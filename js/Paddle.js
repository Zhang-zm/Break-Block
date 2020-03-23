import { imageFromPath } from './tools.js';

export default function Paddle() {
    let image = imageFromPath('./images/paddle.png');
    let o = {
        image,
        x: 100,
        y: 250,
        speed: 15
    };

    o.moveLeft = function() {
        o.x -= o.speed;
    };
    o.moveRight = function() {
        o.x += o.speed;
    };

    o.collide = function(obj) {
        // obj 两个矩形是否相交

        if (obj.y + obj.image.height > o.y) {
            if (obj.x > o.x && o.x + o.image.width) {
                return true;
            }
        }
        return false;
    };

    return o;
}
