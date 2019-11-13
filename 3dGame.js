var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var stereo = true;
var eye = 1;

var a = 0.0;
var b = 160.0;
var w = 160.0;
var h = 90.0;
var world = [];
//[
//[[80,25,-25],[80,25,25]],[[80,-25,-25],[80,-25,25]],[[130,25,-25],[130,25,25]],[[130,-25,-25],[130,-25,25]],
//[[80,25,-25],[80,-25,-25]],[[80,25,25],[80,-25,25]],[[130,25,-25],[130,-25,-25]],[[130,25,25],[130,-25,25]],
//[[80,25,-25],[130,25,-25]],[[80,25,25],[130,25,25]],[[80,-25,-25],[130,-25,-25]],[[80,-25,25],[130,-25,25]]
//];
var x = 0.0;
var y = 0.0;
var z = 25.0;
var alfa = 0.0;
var beta = -1*Math.PI/16;

var ract = function(x0,y0,z0,r) {
    return [
    [[x0-r,y0+r,z0-r],[x0-r,y0+r,z0+r]],[[x0-r,y0-r,z0-r],[x0-r,y0-r,z0+r]],[[x0+r,y0+r,z0-r],[x0+r,y0+r,z0+r]],[[x0+r,y0-r,z0-r],[x0+r,y0-r,z0+r]],
    [[x0-r,y0+r,z0-r],[x0-r,y0-r,z0-r]],[[x0-r,y0+r,z0+r],[x0-r,y0-r,z0+r]],[[x0+r,y0+r,z0-r],[x0+r,y0-r,z0-r]],[[x0+r,y0+r,z0+r],[x0+r,y0-r,z0+r]],
    [[x0-r,y0+r,z0-r],[x0+r,y0+r,z0-r]],[[x0-r,y0+r,z0+r],[x0+r,y0+r,z0+r]],[[x0-r,y0-r,z0-r],[x0+r,y0-r,z0-r]],[[x0-r,y0-r,z0+r],[x0+r,y0-r,z0+r]]
    ]
}

window.onload = function() {
    window.addEventListener("resize", function () {
        canvas.height = window.innerHeight * (1/2);
        canvas.width = canvas.height * (16/9);
        draw();
    });
    canvas.height = window.innerHeight * (1/2);
    canvas.width = canvas.height * (16/9);
    world = ract(Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*20 + 10)
    .concat(ract(Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*20 + 10))
    .concat(ract(Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*20 + 10))
    .concat(ract(Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*20 + 10))
    .concat(ract(Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*200 - 100,Math.random()*20 + 10));
    draw();
    document.addEventListener('keydown',function(e) {
        if(e.key==="ArrowRight") {
            alfa=(alfa-Math.PI/180)%(2*Math.PI);
            draw();
        } else if(e.key==="ArrowLeft") {
            alfa=(alfa+Math.PI/180)%(2*Math.PI);
            draw();
        } else if(e.key==="ArrowUp") {
            beta=(beta+Math.PI/180)%(2*Math.PI);
            draw();
        } else if(e.key==="ArrowDown") {
            beta=(beta-Math.PI/180)%(2*Math.PI);
            draw();
        } else if(e.key==="w") {
            x+=5*Math.cos(alfa)*Math.cos(beta);
            y+=5*Math.sin(alfa)*Math.cos(beta);
            z+=5*Math.sin(beta);
            draw();
        } else if(e.key==="s") {
            x-=5*Math.cos(alfa)*Math.cos(beta);
            y-=5*Math.sin(alfa)*Math.cos(beta);
            z-=5*Math.sin(beta);
            draw();
        } else if(e.key==="a") {
            x-=5*Math.sin(alfa)
            y+=5*Math.cos(alfa)
            draw();
        } else if(e.key==="d") {
            x+=5*Math.sin(alfa)
            y-=5*Math.cos(alfa)
            draw();
        } else if(e.key==="m") {
            stereo = !stereo
            draw();
        }
        //console.log(e,e.value);
    });
    //setInterval(function(){alfa=(alfa+(Math.PI/360))%(2*Math.PI);x=80-Math.cos(alfa)*80;y=-1*Math.sin(alfa)*80;draw()},20);
}

var clear = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0, canvas.width, canvas.height );
}
var move = function(x, y) {
    ctx.beginPath();
    //if(x<=-0.5*w || x>= 0.5*w || y<=-0.5*h || y>= 0.5*h)console.log("m",x,y)
    ctx.moveTo(0.5*ctx.canvas.width - ctx.canvas.width*(x/w),0.5*ctx.canvas.height - ctx.canvas.height*(y/h));
}
var line = function(x, y , r) {
    if (stereo) {
        if(r) {
            ctx.strokeStyle = "#ff0000";
        } else {
            ctx.strokeStyle = "#0000ff"
        }
    } else {
        ctx.strokeStyle = "#000000";
    }
    //if(x<=-0.5*w || x>= 0.5*w || y<=-0.5*h || y>= 0.5*h)console.log("l",x,y)
    ctx.lineTo(0.5*ctx.canvas.width - ctx.canvas.width*(x/w),0.5*ctx.canvas.height - ctx.canvas.height*(y/h));
    ctx.stroke();
}

var draw = function() {
    clear()
    let sina = Math.sin(alfa);
    let cosa = Math.cos(alfa);
    let sinb = Math.sin(beta);
    let cosb = Math.cos(beta);
    for(l of world) {
        
        let p1 = [
            cosa*cosb*(l[0][0]-x) + sina*cosb*(l[0][1]-y) + sinb*(l[0][2]-z),
            -1*sina*(l[0][0]-x) + cosa*(l[0][1]-y),
            -1*cosa*sinb*(l[0][0]-x) + -1*sina*sinb*(l[0][1]-y) + cosb*(l[0][2]-z)
        ]
        let p2 = [
            cosa*cosb*(l[1][0]-x) + sina*cosb*(l[1][1]-y) + sinb*(l[1][2]-z),
            -1*sina*(l[1][0]-x) + cosa*(l[1][1]-y),
            -1*cosa*sinb*(l[1][0]-x) + -1*sina*sinb*(l[1][1]-y) + cosb*(l[1][2]-z)
        ]
        //console.log(p1,p2)
        fx = p1[0]>=5;
        fym = p1[1]>=-1*w*(a+p1[0])/(2*(a+b));
        fyp = p1[1]<=w*(a+p1[0])/(2*(a+b));
        fzm = p1[2]>=-1*h*(a+p1[0])/(2*(a+b));
        fzp = p1[2]<=h*(a+p1[0])/(2*(a+b));
        
        //fi = fi && p1[1]>=-0.5*w && p1[1]<=0.5*w;
        //fi = fi && p1[2]>=-0.5*h && p1[2]<=0.5*h;
        
        sx = p2[0]>=5;
        sym = p2[1]>=-1*w*(a+p2[0])/(2*(a+b));
        syp = p2[1]<=w*(a+p2[0])/(2*(a+b))
        szm = p2[2]>=-1*h*(a+p2[0])/(2*(a+b));
        szp = p2[2]<=h*(a+p2[0])/(2*(a+b))
        
        //si = si && p2[1]>=-0.5*w && p2[1]<=0.5*w;
        //si = si && p2[2]>=-0.5*h && p2[2]<=0.5*h;
        
        if((fx || sx) && (fym || sym) && (fyp || syp) && (fzm || szm) && (fzp || szp)) {
            if(!fx) {
                nx=5;
                ny=(p2[1]-p1[1])*(-1*p1[0])/(p2[0]-p1[0])+p1[1];
                nz=(p2[2]-p1[2])*(-1*p1[0])/(p2[0]-p1[0])+p1[2];
                p1[0] = nx;
                p1[1] = ny;
                p1[2] = nz;
            } else if(!sx) {
                nx=5;
                ny=(p1[1]-p2[1])*(-1*p2[0])/(p1[0]-p2[0])+p2[1];
                nz=(p1[2]-p2[2])*(-1*p2[0])/(p1[0]-p2[0])+p2[2];
                p2[0] = nx;
                p2[1] = ny;
                p2[2] = nz;
            }
            
            if (stereo) {
                move((p1[1]+eye)*(a+b)/(p1[0]+a),p1[2]*(a+b)/(p1[0]+a));
                line((p2[1]+eye)*(a+b)/(p2[0]+a),p2[2]*(a+b)/(p2[0]+a),true);
            
                move((p1[1]-eye)*(a+b)/(p1[0]+a),p1[2]*(a+b)/(p1[0]+a));
                line((p2[1]-eye)*(a+b)/(p2[0]+a),p2[2]*(a+b)/(p2[0]+a),false);
            } else {
                move((p1[1])*(a+b)/(p1[0]+a),p1[2]*(a+b)/(p1[0]+a));
                line((p2[1])*(a+b)/(p2[0]+a),p2[2]*(a+b)/(p2[0]+a),true);
            }
                
            //move(p1[1],p1[2]);
            //line(p2[1],p2[2]);
        }
        
    }
    //ctx.stroke();
}