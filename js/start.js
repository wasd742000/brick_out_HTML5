function loop() {
    if(room.loop.method !== null) {
        if(room.loop.bindTo !== null) room.loop.method.bind(room.loop.bindTo)();
        else room.loop.method();
    }
    app.render();
    requestAnimationFrame(loop);
}

function setup() {
    textures = resources['assets/pongping.json'].textures;
    key = {
        left: new Key(['A'.charCodeAt(0), 37]),
        right: new Key(['D'.charCodeAt(0), 39]),
        shift: new Key(16),
        enter: new Key([13, 32])
    };
    room.menu.setup.bind(room.menu)();
    room.game.setup.bind(room.game)();
    room.score.setup.bind(room.score)();
    setRoom(room.menu);
    loop();
}

document.body.appendChild(app.view);

loader.add("assets/pongping.json").load(setup);
        


