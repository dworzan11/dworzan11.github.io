var getSourceSynch = function (url) {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return (req.status == 200) ? req.responseText : null;
};
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(vertexShader, getSourceSynch('vertexShader4.glsl'));
gl.shaderSource(fragmentShader, getSourceSynch('fragmentShader4.glsl'));
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
}
gl.compileShader(fragmentShader);
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
}
var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('ERROR linking program!', gl.getProgramInfoLog(program));
}
var invader1a = [
    10.0, 30.0,
    10.0, 15.0,
    0.0, 15.0,
    10.0, 0.0,
    20.0, 0.0,
    20.0, 15.0,
    10.0, 15.0,
    10.0, 0.0,
    20.0, 0.0,
    20.0, 15.0,
    30.0, 15.0,
    20.0, 30.0
];
var invader1 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, invader1);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(invader1a), gl.STATIC_DRAW);
var invader1tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, invader1tex);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, document.getElementById('invader1'));
var invader2ra = [
    5.0, 30.0,
    10.0, 30.0,
    10.0, 20.0,
    15.0, 20.0,
    5.0, 10.0,
    10.0, 10.0,
    15.0, 0.0,
    0.0, 10.0,
    30.0, 10.0,
    20.0, 10.0,
    25.0, 10.0,
    25.0, 20.0,
    30.0, 20.0,
    20.0, 30.0,
    25.0, 30.0
];
var invader2r = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, invader2r);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(invader2ra), gl.STATIC_DRAW);
var invader2rtex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, invader2rtex);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, document.getElementById('invader2r'));
var invader2la = [
    5.0, 30.0,
    10.0, 30.0,
    0.0, 20.0,
    5.0, 20.0,
    5.0, 10.0,
    10.0, 10.0,
    15.0, 0.0,
    0.0, 10.0,
    30.0, 10.0,
    20.0, 10.0,
    25.0, 10.0,
    15.0, 20.0,
    20.0, 20.0,
    20.0, 30.0,
    25.0, 30.0
];
var invader2l = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, invader2l);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(invader2la), gl.STATIC_DRAW);
var invader2ltex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, invader2ltex);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, document.getElementById('invader2l'));
var invader3a = [
    15.0, 15.0,
    15.0, 5.0,
    10.0, 5.0,
    7.5, 0.0,
    0.0, 0.0,
    0.0, 7.5,
    5.0, 10.0,
    5.0, 15.0,
    0.0, 20.0,
    5.0, 20.0,
    5.0, 25.0,
    10.0, 30.0,
    15.0, 25.0,
    20.0, 30.0,
    25.0, 25.0,
    25.0, 20.0,
    30.0, 20.0,
    25.0, 15.0,
    25.0, 10.0,
    30.0, 7.5,
    30.0, 0.0,
    22.5, 0.0,
    20.0, 5.0,
    15.0, 5.0
];
var invader3 = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, invader3);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(invader3a), gl.STATIC_DRAW);
var invader3tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, invader3tex);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, document.getElementById('invader3'));
var playera = [
    0.0, 30.0,
    30.0, 30.0,
    0.0, 20.0,
    30.0, 20.0,
    10.0, 10.0,
    20.0, 10.0,
    10.0, 0.0,
    20.0, 0.0
];
var player = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, player);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(playera), gl.STATIC_DRAW);
var playertex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, playertex);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, document.getElementById('player'));
var lasera = [
    4.0, 20.0,
    10.0, 15.0,
    6.0, 15.0,
    4.0, 5.0,
    0.0, 5.0,
    6.0, 0.0
];
var laser = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, laser);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lasera), gl.STATIC_DRAW);
var lasertex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, lasertex);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, document.getElementById('laser'));
var backbrounda = [
    300.0, 100.0,
    300.0, 30.0,
    295.6046636329481, 30.13812901002099,
    291.2266736504987, 30.551970907986544,
    286.88330797899926, 31.239892448991796,
    282.5917078984602, 32.19917872099583,
    278.3688103937537, 33.42604385933926,
    274.23128131207255, 34.9156459878224,
    270.1954495904449, 36.66210632737863,
    266.27724281287993, 38.65853239692955,
    262.49212435147024, 40.89704521485894,
    258.8550323395269, 43.36881039375368,
    255.38032071759173, 46.06407300569475,
    252.0817025849918, 48.97219608050119,
    248.9721960805012, 52.081702584991795,
    246.06407300569475, 55.380320717591715,
    243.36881039375368, 58.85503233952687,
    240.89704521485893, 62.49212435147024,
    238.65853239692956, 66.27724281287993,
    236.66210632737864, 70.19544959044491,
    234.91564598782242, 74.23128131207253,
    233.42604385933925, 78.36881039375368,
    232.19917872099583, 82.59170789846017,
    231.23989244899178, 86.88330797899927,
    230.55197090798657, 91.22667365049868,
    230.13812901002098, 95.60466363294805,
    230.0, 100.0,
    230.13812901002098, 104.39533636705194,
    230.55197090798654, 108.77332634950129,
    231.23989244899178, 113.11669202100072,
    232.19917872099583, 117.40829210153984,
    233.42604385933925, 121.6311896062463,
    234.91564598782242, 125.76871868792745,
    236.66210632737864, 129.80455040955508,
    238.65853239692956, 133.72275718712007,
    240.89704521485896, 137.5078756485298,
    243.36881039375368, 141.14496766047313,
    246.06407300569475, 144.6196792824083,
    248.9721960805012, 147.91829741500823,
    252.08170258499177, 151.0278039194988,
    255.3803207175917, 153.93592699430525,
    258.8550323395269, 156.63118960624632,
    262.49212435147024, 159.10295478514104,
    266.27724281287993, 161.34146760307044,
    270.1954495904449, 163.33789367262136,
    274.23128131207255, 165.08435401217758,
    278.3688103937537, 166.57395614066075,
    282.59170789846013, 167.80082127900417,
    286.88330797899926, 168.76010755100822,
    291.2266736504987, 169.44802909201343,
    295.6046636329481, 169.86187098997902,
    300.0, 170.0,
    304.3953363670519, 169.86187098997902,
    308.7733263495013, 169.44802909201346,
    313.11669202100074, 168.76010755100822,
    317.4082921015398, 167.8008212790042,
    321.6311896062463, 166.57395614066075,
    325.76871868792745, 165.08435401217758,
    329.8045504095551, 163.33789367262136,
    333.72275718712007, 161.34146760307044,
    337.50787564852976, 159.10295478514107,
    341.14496766047307, 156.63118960624635,
    344.6196792824083, 153.93592699430525,
    347.91829741500817, 151.0278039194988,
    351.0278039194988, 147.9182974150082,
    353.93592699430525, 144.61967928240827,
    356.6311896062463, 141.14496766047313,
    359.1029547851411, 137.50787564852973,
    361.34146760307044, 133.72275718712007,
    363.33789367262136, 129.80455040955505,
    365.0843540121776, 125.76871868792745,
    366.57395614066075, 121.63118960624632,
    367.8008212790042, 117.40829210153981,
    368.7601075510082, 113.11669202100072,
    369.4480290920134, 108.77332634950132,
    369.861870989979, 104.39533636705193,
    370.0, 100.0,
    369.861870989979, 95.6046636329481,
    369.4480290920135, 91.2266736504987,
    368.7601075510082, 86.8833079789993,
    367.80082127900414, 82.59170789846016,
    366.57395614066075, 78.36881039375369,
    365.08435401217764, 74.23128131207258,
    363.33789367262136, 70.19544959044498,
    361.34146760307044, 66.2772428128799,
    359.10295478514104, 62.492124351470224,
    356.6311896062463, 58.85503233952689,
    353.93592699430525, 55.38032071759175,
    351.02780391949887, 52.081702584991845,
    347.9182974150082, 48.97219608050121,
    344.6196792824083, 46.064073005694745,
    341.1449676604731, 43.368810393753684,
    337.5078756485298, 40.89704521485897,
    333.7227571871201, 38.65853239692958,
    329.80455040955513, 36.662106327378645,
    325.76871868792745, 34.9156459878224,
    321.6311896062463, 33.42604385933926,
    317.40829210153987, 32.19917872099583,
    313.11669202100074, 31.239892448991796,
    308.7733263495013, 30.551970907986558,
    304.3953363670519, 30.13812901002099,
    300.0, 30.0
];
var backbround = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, backbround);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(backbrounda), gl.STATIC_DRAW);
var backgroundtex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, backgroundtex);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, document.getElementById('background'));
var invaders = [
    [1, 10.0, 10.0], [1, 60.0, 10.0], [1, 110.0, 10.0], [1, 160.0, 10.0], [1, 210.0, 10.0], [1, 260.0, 10.0],
    [2, 10.0, 60.0], [2, 60.0, 60.0], [2, 110.0, 60.0], [2, 160.0, 60.0], [2, 210.0, 60.0], [2, 260.0, 60.0],
    [3, 10.0, 110.0], [3, 60.0, 110.0], [3, 110.0, 110.0], [3, 160.0, 110.0], [3, 210.0, 110.0], [3, 260.0, 110.0],
];
var invadersposition = [50.0, 0.0];
var direction = 1.0;
var speed = 0.05;
var prob = 0.001;
var shots = [];
var playerpos = [185.0, 360.0];
var flyr = 0;
var flyl = 0;
var shot = true;
var shottime;
var hit = false;
var hittime;
var hitduration = 1000;
var hitchangeduration = 100;
var life = 3;
var lifed = document.getElementById('life');
var positionAtrribLocation = gl.getAttribLocation(program, 'position');
var sizeUniformLocation = gl.getUniformLocation(program, 'size');
var rotateUniformLocation = gl.getUniformLocation(program, 'rotate');
var translateUniformLocation = gl.getUniformLocation(program, 'translate');
gl.enableVertexAttribArray(positionAtrribLocation);
gl.enable(gl.DEPTH_TEST);
gl.enable(gl.CULL_FACE);
gl.frontFace(gl.CCW);
gl.cullFace(gl.BACK);
var repaint = function () {
    gl.useProgram(program);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.bindBuffer(gl.ARRAY_BUFFER, invader1);
    gl.bindTexture(gl.TEXTURE_2D, invader1tex);
    gl.vertexAttribPointer(positionAtrribLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
    for (var _i = 0, invaders_1 = invaders; _i < invaders_1.length; _i++) {
        var i = invaders_1[_i];
        if (i[0] == 1) {
            gl.uniform2fv(sizeUniformLocation, new Float32Array([30.0, 30.0]));
            gl.uniform2fv(rotateUniformLocation, new Float32Array([1.0, 0.0]));
            gl.uniform3fv(translateUniformLocation, new Float32Array([i[1] + invadersposition[0], i[2] + invadersposition[1], 0.0]));
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, invader1a.length / 2);
        }
    }
    if (direction < 0) {
        gl.bindBuffer(gl.ARRAY_BUFFER, invader2r);
        gl.bindTexture(gl.TEXTURE_2D, invader2rtex);
        gl.vertexAttribPointer(positionAtrribLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
        for (var _a = 0, invaders_2 = invaders; _a < invaders_2.length; _a++) {
            var i = invaders_2[_a];
            if (i[0] == 2) {
                gl.uniform2fv(sizeUniformLocation, new Float32Array([30.0, 30.0]));
                gl.uniform2fv(rotateUniformLocation, new Float32Array([1.0, 0.0]));
                gl.uniform3fv(translateUniformLocation, new Float32Array([i[1] + invadersposition[0], i[2] + invadersposition[1], 0.0]));
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, invader2ra.length / 2);
            }
        }
    }
    else {
        gl.bindBuffer(gl.ARRAY_BUFFER, invader2l);
        gl.bindTexture(gl.TEXTURE_2D, invader2ltex);
        gl.vertexAttribPointer(positionAtrribLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
        for (var _b = 0, invaders_3 = invaders; _b < invaders_3.length; _b++) {
            var i = invaders_3[_b];
            if (i[0] == 2) {
                gl.uniform2fv(sizeUniformLocation, new Float32Array([30.0, 30.0]));
                gl.uniform2fv(rotateUniformLocation, new Float32Array([1.0, 0.0]));
                gl.uniform3fv(translateUniformLocation, new Float32Array([i[1] + invadersposition[0], i[2] + invadersposition[1], 0.0]));
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, invader2la.length / 2);
            }
        }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, invader3);
    gl.bindTexture(gl.TEXTURE_2D, invader3tex);
    gl.vertexAttribPointer(positionAtrribLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
    for (var _c = 0, invaders_4 = invaders; _c < invaders_4.length; _c++) {
        var i = invaders_4[_c];
        if (i[0] == 3) {
            gl.uniform2fv(sizeUniformLocation, new Float32Array([30.0, 30.0]));
            gl.uniform2fv(rotateUniformLocation, new Float32Array([1.0, 0.0]));
            gl.uniform3fv(translateUniformLocation, new Float32Array([i[1] + invadersposition[0], i[2] + invadersposition[1], 0.0]));
            gl.drawArrays(gl.TRIANGLE_FAN, 0, invader3a.length / 2);
        }
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, laser);
    gl.bindTexture(gl.TEXTURE_2D, lasertex);
    gl.vertexAttribPointer(positionAtrribLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
    for (var _d = 0, shots_1 = shots; _d < shots_1.length; _d++) {
        var s = shots_1[_d];
        gl.uniform2fv(sizeUniformLocation, new Float32Array([10.0, 20.0]));
        gl.uniform2fv(rotateUniformLocation, new Float32Array([1.0, 0.0]));
        gl.uniform3fv(translateUniformLocation, new Float32Array([s[1], s[2], 0.1]));
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, lasera.length / 2);
    }
    if (!hit || (Math.floor((window.performance.now() - hittime) / hitchangeduration)) % 2 == 1) {
        gl.bindBuffer(gl.ARRAY_BUFFER, player);
        gl.bindTexture(gl.TEXTURE_2D, playertex);
        gl.vertexAttribPointer(positionAtrribLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.uniform2fv(sizeUniformLocation, new Float32Array([30.0, 30.0]));
        gl.uniform2fv(rotateUniformLocation, new Float32Array([1.0, 0.0]));
        gl.uniform3fv(translateUniformLocation, new Float32Array([playerpos[0], playerpos[1], 0.0]));
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, playera.length / 2);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, backbround);
    gl.bindTexture(gl.TEXTURE_2D, backgroundtex);
    gl.vertexAttribPointer(positionAtrribLocation, 2, gl.FLOAT, false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.uniform2fv(sizeUniformLocation, new Float32Array([400.0, 400.0]));
    gl.uniform2fv(rotateUniformLocation, new Float32Array([1.0, 0.0]));
    gl.uniform3fv(translateUniformLocation, new Float32Array([0.0, 0.0, 0.2]));
    gl.drawArrays(gl.TRIANGLE_FAN, 0, backbrounda.length / 2);
};
repaint();
var lastTime;
var animate = function (time) {
    if (!shot && time - shottime > 300) {
        shot = true;
    }
    if (hit && time - hittime > hitduration) {
        hit = false;
    }
    var timeDelta = time - lastTime;
    lastTime = time;
    var row = Math.floor(((1.0 - direction) * 50 + direction * invadersposition[0] + speed * timeDelta) / 100);
    var prog = (1.0 - direction) * 50 + direction * invadersposition[0] + speed * timeDelta - 100 * row;
    direction = -1 * ((row % 2) * 2 - 1) * direction;
    invadersposition[0] = (1.0 - direction) * 50 + direction * prog;
    invadersposition[1] += 25 * row;
    for (var _i = 0, invaders_5 = invaders; _i < invaders_5.length; _i++) {
        var i = invaders_5[_i];
        if (Math.random() < prob) {
            shots.push([1, i[1] + invadersposition[0] + 10.0, i[2] + invadersposition[1] + 15.0]);
        }
    }
    for (var i in shots) {
        if (shots[i][2] < 400 && shots[i][2] > -20) {
            shots[i][2] += shots[i][0] * speed * 2 * timeDelta;
        }
    }
    for (var i in invaders) {
        for (var j in shots) {
            if (shots[j][0] == -1 &&
                ((invaders[i][1] + invadersposition[0] < shots[j][1] && invaders[i][1] + invadersposition[0] + 30 > shots[j][1])
                    ||
                        (invaders[i][1] + invadersposition[0] < shots[j][1] + 10 && invaders[i][1] + invadersposition[0] + 30 > shots[j][1] + 10))
                &&
                    ((invaders[i][2] + invadersposition[1] < shots[j][2] && invaders[i][2] + invadersposition[1] + 30 > shots[j][2])
                        ||
                            (invaders[i][2] + invadersposition[1] < shots[j][2] + 20 && invaders[i][2] + invadersposition[1] + 30 > shots[j][2] + 20))) {
                delete invaders[i];
                delete shots[j];
                break;
            }
        }
    }
    invaders = invaders.filter(function (e) {
        return e != undefined;
    });
    shots = shots.filter(function (e) {
        return e != undefined;
    });
    if (!hit) {
        for (var j in shots) {
            if (shots[j][0] == 1 &&
                ((playerpos[0] < shots[j][1] && playerpos[0] + 30 > shots[j][1])
                    ||
                        (playerpos[0] < shots[j][1] + 10 && playerpos[0] + 30 > shots[j][1] + 10))
                &&
                    ((playerpos[1] < shots[j][2] && playerpos[1] + 30 > shots[j][2])
                        ||
                            (playerpos[1] < shots[j][2] + 20 && playerpos[1] + 30 > shots[j][2] + 20))) {
                delete shots[j];
                hit = true;
                hittime = window.performance.now();
                life--;
                lifed.innerHTML = 'life: ' + life;
                break;
            }
        }
    }
    shots = shots.filter(function (e) {
        return e != undefined;
    });
    playerpos[0] += speed * 3 * timeDelta * (flyr + flyl);
    if (playerpos[0] < 0)
        playerpos[0] = 0;
    else if (playerpos[0] > 370)
        playerpos[0] = 370;
    repaint();
    if (invadersposition[1] < 400) {
        window.requestAnimationFrame(animate);
    }
};
lastTime = window.performance.now();
window.requestAnimationFrame(animate);
document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        flyr = 1;
        repaint();
    }
    else if (e.key === "ArrowLeft") {
        flyl = -1;
        repaint();
    }
    else if (e.key === "ArrowUp") {
        //repaint()
    }
});
document.addEventListener('keyup', function (e) {
    if (e.key === "ArrowRight") {
        flyr = 0;
        repaint();
    }
    else if (e.key === "ArrowLeft") {
        flyl = 0;
        repaint();
    }
    else if (e.key === "ArrowUp" || e.key === " ") {
        if (shot) {
            shots.push([-1, playerpos[0] + 10.0, playerpos[1] - 20.0]);
            shot = false;
            shottime = window.performance.now();
        }
    }
});
