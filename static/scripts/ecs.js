function ecs() {
    console.log(this);
    this.initWorld();
}

componentMixin(ecs);
entityMixin(ecs);
worldMixin(ecs);

let e = new ecs();

let gameObject = e.createEntity();
for(let i = 0, amount = 1000; i < amount; i++) {
    let g = e.createEntity();
    // let g2 = e.createEntity();
    // g.transform.addChild(g2.transform);
    e.world.transform.addChild(g.transform);
    g.pos.x = 600 * Math.random();
    g.pos.y = 600 * Math.random();
    g.v = new vector2();
    let speed = 1;
    g.v.x = speed * Math.random() + -speed * Math.random();
    g.v.y = speed * Math.random() + -speed * Math.random();
}


// e.update(e.world);
var stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);

function animate() {
    stats.begin();
    renderSystem(e);
    drawAgent(e);
    move(e);
    // e.update(e.world);
    stats.end();
    requestAnimationFrame(animate)
}
animate();