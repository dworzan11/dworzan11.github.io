precision mediump float;

varying vec2 ftexcord;
uniform sampler2D sampler;
uniform vec2 size;

void main() {
    gl_FragColor = texture2D(sampler, vec2(ftexcord.x/size.x, ftexcord.y/size.y));
}