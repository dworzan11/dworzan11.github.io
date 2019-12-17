precision mediump float;

attribute vec2 position;
varying vec2 ftexcord;
uniform vec2 rotate;
uniform vec3 translate;

void main() {
    ftexcord = position;
    gl_Position = vec4((position.x*rotate.x-position.y*rotate.y+translate.x-200.0)/200.0,(-1.0*(position.x*rotate.y+position.y*rotate.x+translate.y-200.0)/200.0),translate.z,1.0);
    gl_PointSize = 2.0;
}