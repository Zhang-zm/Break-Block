export default function Game() {
    let g = {
        actions: {},
        keydowns: {}
    };
    let canvas = document.querySelector('#id-canvas');
    let context = canvas.getContext('2d');

    g.canvas = canvas;
    g.context = context;

    g.drawImage = function(image) {
        g.context.drawImage(image.image, image.x, image.y);
    };

    // events
    window.addEventListener('keydown', function(event) {
        g.keydowns[event.key] = true;
    });

    window.addEventListener('keyup', function(event) {
        g.keydowns[event.key] = false;
    });

    g.registerAction = function(key, callback) {
        g.actions[key] = callback;
    };

    setInterval(function() {
        // events
        let actions = Object.keys(g.actions);

        for (let i = 0; i < actions.length; i++) {
            const key = actions[i];

            if (g.keydowns[key]) {
                // 某个案件被按下 调用注册的action
                g.actions[key]();
            }
        }
        // update
        g.update();

        //clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        // draw
        g.draw();
    }, 1000 / 30);

    return g;
}
