import Paddle from './Paddle.js';
import Game from './game.js';
import Ball from './Ball.js';

function main() {
    let paddle = Paddle();
    let game = Game();
    let ball = Ball();

    game.registerAction('a', function() {
        paddle.moveLeft();
    });
    game.registerAction('d', function() {
        paddle.moveRight();
    });

    game.registerAction('f', function() {
        ball.fire();
    });

    game.update = function() {
        ball.move();

        // 判断相撞 -- 矩形是否相交
        if (paddle.collide(ball)) {
            ball.speedY *= -1;
        }
    };

    game.draw = function() {
        game.drawImage(paddle);
        game.drawImage(ball);
    };
}
main();
