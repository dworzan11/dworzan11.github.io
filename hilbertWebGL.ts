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

gl.shaderSource(vertexShader, getSourceSynch('vertexShader2.glsl'))
gl.shaderSource(fragmentShader, getSourceSynch('fragmentShader2.glsl'))

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

class Hilbert {
    points: number[] = []
    color = [Math.random(), Math.random(), Math.random()]
    rotate = [1.0, 0.0]
    translate = [0.0, 0.0, 0.0]
    constructor(points, z) {
        for (let p of points)
            this.points.push(p)
        this.translate[2]=z
    }
}

var hilberts = []

var az = 0.0
var hilbertprev = new Hilbert([
    -0.66, -0.66,
    -0.66, 0.66,
    0.66, 0.66,
    0.66, -0.66
],az)
az+=0.1

hilberts.push(hilbertprev)

for (let it = 0; it < 4; it++) {
    let c = []
    for (let i = 0; i < hilbertprev.points.length; i++) {
        c.push((hilbertprev.points[i] + 1.0) / 2)
    }
    let b = []
    for (let i = 0; i < c.length; i++) {
        if (i % 2 == 0) {
            b.push(c[i] - 1.0)
        } else {
            b.push(c[i])
        }
    }
    let a = []
    for (let i = 0; i < c.length; i += 2) {
        a.push(c[i + 1] - 1.0)
        a.push(c[i] - 1.0)
    }
    let d = []
    for (let i = 0; i < c.length; i += 2) {
        d.push(-c[i + 1] + 1.0)
        d.push(-c[i])
    }
    let hilbertnext = new Hilbert(a.concat(b).concat(c).concat(d),az)
    az+=0.1
    hilberts.push(hilbertnext)
    hilbertprev = hilbertnext
}
var buffers = []

for (let i in hilberts) {
    let b = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, b)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hilberts[i].points), gl.STATIC_DRAW)
    buffers.push(b)
}

var positionAtrribLocation = gl.getAttribLocation(program, 'position')

var colorUniformLocation = gl.getUniformLocation(program, 'color')
var rotateUniformLocation = gl.getUniformLocation(program, 'rotate')
var translateUniformLocation = gl.getUniformLocation(program, 'translate')

gl.enableVertexAttribArray(positionAtrribLocation)
gl.enable(gl.DEPTH_TEST)
gl.enable(gl.CULL_FACE)
gl.frontFace(gl.CCW)
gl.cullFace(gl.BACK)

var active = 0
var R = <HTMLInputElement>document.getElementById('r')
var G = <HTMLInputElement>document.getElementById('g')
var B = <HTMLInputElement>document.getElementById('b')
var Rotate = <HTMLInputElement>document.getElementById('rotate')
var TranslateX = <HTMLInputElement>document.getElementById('translateX')
var TranslateY = <HTMLInputElement>document.getElementById('translateY')
var TranslateZ = <HTMLInputElement>document.getElementById('translateZ')
R.addEventListener('input', function () {
    repaint()
})
G.addEventListener('input', function () {
    repaint()
})
B.addEventListener('input', function () {
    repaint()
})
Rotate.addEventListener('input', function () {
    repaint()
})
TranslateX.addEventListener('input', function () {
    repaint()
})
TranslateY.addEventListener('input', function () {
    repaint()
})
TranslateZ.addEventListener('input', function () {
    repaint()
})
var repaint = function () {
    gl.useProgram(program)
    hilberts[active].color[0] = Number(R.value) / 255
    hilberts[active].color[1] = Number(G.value) / 255
    hilberts[active].color[2] = Number(B.value) / 255
    hilberts[active].rotate[0] = Math.cos(Number(Rotate.value) / 180 * Math.PI)
    hilberts[active].rotate[1] = Math.sin(Number(Rotate.value) / 180 * Math.PI)
    hilberts[active].translate[0] = Number(TranslateX.value)
    hilberts[active].translate[1] = Number(TranslateY.value)
    hilberts[active].translate[2] = (Number(TranslateZ.value)/100)
    gl.clearColor(0.0, 0.0, 0.0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    for (let i = 0; i < hilberts.length; i++) {
        gl.uniform3fv(colorUniformLocation, new Float32Array(hilberts[i].color))
        gl.uniform2fv(rotateUniformLocation, new Float32Array(hilberts[i].rotate))
        gl.uniform3fv(translateUniformLocation, new Float32Array(hilberts[i].translate))
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers[i])
        gl.vertexAttribPointer(
            positionAtrribLocation,
            2,
            gl.FLOAT,
            false,
            2 * Float32Array.BYTES_PER_ELEMENT,
            0
        )
        gl.drawArrays(gl.LINE_STRIP, 0, hilberts[i].points.length / 2)
    }
}
repaint()
document.addEventListener('keydown', function (e) {
    if (e.key === "n") {
        active = (active + 1) % hilberts.length
        R.value = String(hilberts[active].color[0] * 255)
        G.value = String(hilberts[active].color[1] * 255)
        B.value = String(hilberts[active].color[2] * 255)
        if (hilberts[active].rotate[1] > 0) {
            Rotate.value = String(Math.acos(hilberts[active].rotate[0]) * 180 / Math.PI)
        } else {
            Rotate.value = String(360 - (Math.acos(hilberts[active].rotate[0]) * 180 / Math.PI))
        }
        TranslateX.value = hilberts[active].translate[0]
        TranslateY.value = hilberts[active].translate[1]
        TranslateZ.value = String(hilberts[active].translate[2]*100)
        repaint()
    } else if (e.key === "r") {
        repaint()
    }
});