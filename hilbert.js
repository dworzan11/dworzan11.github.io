var degre = 4;
var h;
var step;
var svg = document.getElementById('svg');
var degredisplay = document.getElementById('degre');

var nextdegre = function(hilbet,d) {
    let center = (2**d + 1)*step/2
    let out = "";
    out += "<g transform=\"rotate(90 "+String(center)+" "+String(h-center)+")\">\n";
    out += hilbert;
    out += "</g>\n"
    out += "<line x1=\""+String(step)+"\" y1=\""+String(h - (2**d * step))+"\" x2=\""+String(step)+"\" y2=\""+String(h - ((2**d + 1) * step))+"\"  style=\"stroke:rgb(0,0,0);stroke-width:1\"/>\n"
    out += "<g transform=\"translate(0,"+String(-1*(2**d)*step)+")\">\n";
    out += hilbert;
    out += "</g>\n"
    out += "<line x1=\""+String((2**d)*step)+"\" y1=\""+String(h - ((2**d + 1) * step))+"\" x2=\""+String(((2**d)+1)*step)+"\" y2=\""+String(h - ((2**d + 1) * step))+"\"  style=\"stroke:rgb(0,0,0);stroke-width:1\"/>\n"
    out += "<g transform=\"translate("+String((2**d)*step)+","+String(-1*(2**d)*step)+")\">\n";
    out += hilbert;
    out += "</g>\n"
    out += "<line x1=\""+String((2**(d+1))*step)+"\" y1=\""+String(h - ((2**d + 1) * step))+"\" x2=\""+String((2**(d+1))*step)+"\" y2=\""+String(h - ((2**d) * step))+"\"  style=\"stroke:rgb(0,0,0);stroke-width:1\"/>\n"
    out += "<g transform=\"translate("+String((2**d)*step)+",0) rotate(-90 "+String(center)+" "+String(h-center)+")\">\n";
    out += hilbert;
    out += "</g>\n"
    return out;
}

var draw = function() {
    hilbert = "";
    hilbert+="<line x1=\""+String(step)+"\" y1=\""+String(h-step)+"\" x2=\""+String(step)+"\" y2=\""+String(h-2*step)+"\"  style=\"stroke:rgb(0,0,0);stroke-width:1\"/>\n";
    hilbert+="<line x1=\""+String(step)+"\" y1=\""+String(h-2*step)+"\" x2=\""+String(2*step)+"\" y2=\""+String(h-2*step)+"\"  style=\"stroke:rgb(0,0,0);stroke-width:1\"/>\n";
    hilbert+="<line x1=\""+String(2*step)+"\" y1=\""+String(h-2*step)+"\" x2=\""+String(2*step)+"\" y2=\""+String(h-step)+"\"  style=\"stroke:rgb(0,0,0);stroke-width:1\"/>\n";
    
    for(let i=1;i<degre;i++) {
        hilbert = nextdegre(hilbert,i)
    }
    svg.innerHTML=hilbert;
}

window.onload = function() {
    document.getElementById("slider").value = 4
    window.addEventListener("resize", function () {
        h = window.innerHeight * (1/2);
        step = h/(2**degre+1)
        svg.setAttribute("height", h);
        svg.setAttribute("width", h);
        draw();
    });
    document.getElementById('slider').addEventListener('change', function(e) {
        degredisplay.innerHTML = e.target.value;
        degre = e.target.value;
        step = h/(2**degre+1)
        svg.setAttribute("height", h);
        svg.setAttribute("width", h);
        draw();
    });
    h = window.innerHeight * (1/2);
    step = h/(2**degre+1)
    svg.setAttribute("height", h);
    svg.setAttribute("width", h);
    
    draw();
}