precision mediump float;

attribute vec2 position;
uniform vec2 rotate;
uniform vec3 translate;

void main() {
    gl_Position = vec4((position.x*rotate.x-position.y*rotate.y+translate.x/600.0)*2.0/3.0,(position.x*rotate.y+position.y*rotate.x+translate.y/400.0),translate.z,1.0);
    gl_PointSize = 2.0;
}