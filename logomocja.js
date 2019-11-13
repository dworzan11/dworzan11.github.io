console.log("Hello")
var Xmin = 0.0;
var Xmax = 800.0;
var Ymin = 0.0
var Ymax = 450.0;
var Xstart = 400.0;
var Ystart = 225.0;
//var Xstart = 0.0;
//var Ystart = 0.0;
var dirstart = 90.0;
var operations = [];
//var operations = ["F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1"]
//operations = ["F 50","R 90","F 200","R 90","F 50","R 90","F 200"]
//operations = ["F 200","R 120","F 200","R 120","F 200"];
//operations = ["R 54","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100"];
//operations = ["L 180","F 150","R 90","F 75","R 90","F 75","R 45","F 106"]
//operations=["F 50","R 90","F 200","R 90","F 50","R 90","F 200","F 200","R 120","F 200","R 120","F 200","R 54","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 180","F 150","R 90","F 75","R 90","F 75","R 45","F 106"]
var canvas = document.getElementById("canvas");
var comands = document.getElementById("comands");
var list = document.getElementById("list");
var ctx = canvas.getContext("2d");
window.onload = function() {
    window.addEventListener("resize", function () {
        canvas.height = window.innerHeight * (1/2);
        canvas.width = canvas.height * (16/9);
        draw();
    });
    canvas.height = window.innerHeight * (1/2);
    canvas.width = canvas.height * (16/9);
    comands.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            let node = document.createElement("DT");
            let textnode = document.createTextNode(comands.value);
            node.appendChild(textnode);
            list.appendChild(node);
            if(comands.value.length<3 || (comands.value.charAt(0)!='F' && comands.value.charAt(0)!='B' && comands.value.charAt(0)!='R' && comands.value.charAt(0)!='L') || comands.value.charAt(1)!=' ' || isNaN(Number(comands.value.substring(2)))) {
                node.style.color="red";
            } else {
                operations.push(comands.value);
                draw();
            }
            comands.value = "";
        }
    });
    //operations = ["F 20", "R 90", "F 20", "R 90", "F 20"];
    //operations = nextHilbertDegre(operations, "20")
    //operations = nextHilbertDegre(operations, "20")
    //operations = nextHilbertDegre(operations, "20")
    //operations = nextHilbertDegre(operations, "20")
    //operations = nextHilbertDegre(operations, "20")
    draw()
    document.getElementById("kolo").onclick = function () {
        console.log(operations)
        operations = operations.concat(["F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1","F 1","R 1"]);
        draw();
    };
    document.getElementById("prostokont").onclick = function () {
        operations = operations.concat(["F 50","R 90","F 200","R 90","F 50","R 90","F 200"])
        draw();
    };
    document.getElementById("trojkat").onclick = function () {
        operations = operations.concat(["F 200","R 120","F 200","R 120","F 200"])
        draw();
    };
    document.getElementById("gwiazda").onclick = function () {
        operations = operations.concat(["R 54","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100","L 72","F 100","R 144","F 100"])
        draw();
    };
}
var clear = function() {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0, canvas.width, canvas.height );
}
var move = function(x, y) {
    ctx.moveTo(ctx.canvas.width*(x/(Xmax-Xmin)),ctx.canvas.height - ctx.canvas.height*(y/(Ymax-Ymin)));
}
var line = function(x, y) {
    ctx.lineTo(ctx.canvas.width*(x/(Xmax-Xmin)),ctx.canvas.height - ctx.canvas.height*(y/(Ymax-Ymin)));
}
var draw = function() {
    let x = Xstart;
    let y = Ystart;
    let dir = dirstart;
    clear()
    ctx.beginPath();
    move(Xstart,Ystart);
    for(s of operations) {
        if(s.charAt(0)=='F' || s.charAt(0)=='B') {
            let l = Number(s.substring(2));
            if(s.charAt(0)=='B') {
                l*=-1;
            }
            let nextX = x + Math.cos(Math.PI*(dir/180))*l;
            let nextY = y + Math.sin(Math.PI*(dir/180))*l;
            line(nextX,nextY);
            x = nextX;
            y = nextY;
        } else if(s.charAt(0)=='R' || s.charAt(0)=='L') {
            let d = Number(s.substring(2));
            if(s.charAt(0)=='R') {
                d*=-1;
            }
            dir=(dir+d)%360;
        }
    }
    let l = 10;
    move(x + Math.cos(Math.PI*(dir/180))*2*l,y + Math.sin(Math.PI*(dir/180))*2*l);
    line(x + Math.cos(Math.PI*((dir+160)/180))*l,y + Math.sin(Math.PI*((dir+160)/180))*l);
    line(x + Math.cos(Math.PI*((dir-160)/180))*l,y + Math.sin(Math.PI*((dir-160)/180))*l);
    line(x + Math.cos(Math.PI*(dir/180))*2*l,y + Math.sin(Math.PI*(dir/180))*2*l);
    console.log("elo");
    ctx.stroke();
}
var reverse = function(a) {
    let r = [];
    let len = a.length;
    console.log(len)
    for(let i = 0; i < len; i++) {
        s = a[len-1-i];
        if(s.charAt(0)=='F') {
            r.push("B" + s.substring(1));
        } else if(s.charAt(0)=='B') {
            r.push("F" + s.substring(1));
        } else if(s.charAt(0)=='R') {
            r.push("L" + s.substring(1));
        } else if(s.charAt(0)=='L') {
            r.push("R" + s.substring(1));
        }
    }
    return r;
}
var nextHilbertDegre = function(HilbertDegre, step) {
    let r = [];
    rev = reverse(HilbertDegre);
    
    r.push("L 90");
    r = r.concat(rev);
    r.push("L 90");
    r.push("F " + step);
    r = r.concat(HilbertDegre);
    r.push("L 90");
    r.push("F " + step);
    r.push("L 90");
    r = r.concat(HilbertDegre);
    r.push("F " + step);
    r.push("L 90");
    r = r.concat(rev);
    r.push("L 90");
    
    console.log(rev,r)
    
    return r
}