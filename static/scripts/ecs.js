function ecs() {
    console.log(this);
    this.initWorld();
}

componentMixin(ecs);
entityMixin(ecs);
worldMixin(ecs);

let e = new ecs();

e.systems.push(renderSystem);
e.systems.push(drawAgent);
e.systems.push(move);

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

function animate() {
    e.update(e.world);
    requestAnimationFrame(animate)
}
animate();