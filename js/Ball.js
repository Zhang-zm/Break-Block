import { imageFromPath } from './tools.js';

export default function Paddle() {
    let image = imageFromPath('./images/ball.png');
    let o = {
        image,
        x: 100,
        y: 150,
        speedX: 10,
        speedY: 10,
        fired: false
    };

    o.fire = function() {
        o.fired = true;
    };

    o.move = function() {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX *= -1;
            }

            if (o.y < 0 || o.y > 300) {
                o.speedY *= -1;
            }

            o.x += o.speedX;
            o.y += o.speedY;
        }
    };
    return o;
}
