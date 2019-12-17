var getSourceSynch = function (url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return (req.status == 200) ? req.responseText : null;
};
var canvas = <HTMLCanvasElement>document.getElementById('canvas');
var gl: WebGLRenderingContext = canvas.getContext('webgl');

var vertexShader = gl.createShader(gl.VERTEX_SHADER)
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

gl.shaderSource(vertexShader, getSourceSynch('vertexShader1.glsl'))
gl.shaderSource(fragmentShader, getSourceSynch('fragmentShader1.glsl'))

gl.compileShader(vertexShader)
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader))
}

gl.compileShader(fragmentShader)
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader))
}

var program = gl.createProgram()
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)
gl.linkProgram(program)
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('ERROR linking program!', gl.getProgramInfoLog(program))
}

gl.bindAttribLocation(program, 0, 'position')

gl.linkProgram(program)
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('ERROR linking program!', gl.getProgramInfoLog(program))
}

var points = [
    -100.0, -200.0,
    100.0, -200.0,
    160.0, 0.0,
    0.0, 100.0,
    -160.0, -0.0,
    0.0, -60.0
]

var vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(points), gl.STATIC_DRAW)

//var positionAtrribLocation = gl.getAttribLocation(program, 'position')
gl.vertexAttribPointer(
    0,//positionAtrribLocation,
    2,
    gl.FLOAT,
    false,
    2 * Float32Array.BYTES_PER_ELEMENT,
    0
)
var colorUniformLocation = gl.getUniformLocation(program, 'color')
var rotateUniformLocation = gl.getUniformLocation(program, 'rotate')
var translateUniformLocation = gl.getUniformLocation(program, 'translate')

gl.enableVertexAttribArray(0//positionAtrribLocation
    )

var type = 0;
var color = [1.0,0.0,0.0]
var rotate = [1.0,0.0]
var translate = [0.0,0.0]
var R = <HTMLInputElement>document.getElementById('r')
var G = <HTMLInputElement>document.getElementById('g')
var B = <HTMLInputElement>document.getElementById('b')
var Rotate = <HTMLInputElement>document.getElementById('rotate')
var TranslateX = <HTMLInputElement>document.getElementById('translateX')
var TranslateY = <HTMLInputElement>document.getElementById('translateY')
R.addEventListener('input',function(){
    repaint()
})
G.addEventListener('input',function(){
    repaint()
})
B.addEventListener('input',function(){
    repaint()
})
Rotate.addEventListener('input',function(){
    repaint()
})
TranslateX.addEventListener('input',function(){
    repaint()
})
TranslateY.addEventListener('input',function(){
    repaint()
})
var repaint = function () {
    gl.useProgram(program)
    color[0]=Number(R.value)/255
    color[1]=Number(G.value)/255
    color[2]=Number(B.value)/255
    rotate[0]=Math.cos(Number(Rotate.value)/180*Math.PI)
    rotate[1]=Math.sin(Number(Rotate.value)/180*Math.PI)
    translate[0]=Number(TranslateX.value)
    translate[1]=Number(TranslateY.value)
    gl.uniform3fv(colorUniformLocation, new Float32Array(color))
    gl.uniform2fv(rotateUniformLocation, new Float32Array(rotate))
    gl.uniform2fv(translateUniformLocation, new Float32Array(translate))
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    switch (type) {
        case 0:
            gl.drawArrays(gl.POINTS, 0, 6)
            break;
        case 1:
            gl.drawArrays(gl.LINE_STRIP, 0, 6)
            break;
        case 2:
            gl.drawArrays(gl.LINE_LOOP, 0, 6)
            break;
        case 3:
            gl.drawArrays(gl.LINES, 0, 6)
            break;
        case 4:
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 6)
            break;
        case 5:
            gl.drawArrays(gl.TRIANGLE_FAN, 0, 6)
            break;
        case 6:
            gl.drawArrays(gl.TRIANGLES, 0, 6)
            break;
    }
}
repaint()
document.addEventListener('keydown',function(e) {
    if(e.key==="n") {
        type = (type+1)%7
        repaint()
    } else if(e.key==="r") {
        repaint()
    }
});

const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
for (let i = 0; i < numAttribs; ++i) {
    const info = gl.getActiveAttrib(program, i);
    console.log('name:', info.name, 'type:', info.type, 'size:', info.size);
}

const numUniform = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
for (let i = 0; i < numUniform; ++i) {
    const info = gl.getActiveUniform(program, i);
    console.log('name:', info.name, 'type:', info.type, 'size:', info.size);
}