function renderSystem(ecs) {
    let entites = ecs.getAllEntites();
    for(let id in entites) {
        let e = entites[id];
        if(e.ctx) {
            let ctx = e.ctx;
            ctx.fillStyle = "#333333";
            ctx.fillRect(0, 0, 600, 600);
        }
    }
}

function move(ecs) {
    let entites = ecs.getAllEntites();
    for (let id in entites) {
        let e = entites[id];
        if(e && e.v) {
            e.pos.x += e.v.x;
            e.pos.y += e.v.y;

            if ((e.pos.y > 600 - 2 / 2) || (e.pos.y < 0)) { e.v.y = -e.v.y * 0.9 }
            if ((e.pos.x > 600 - 2 / 2) || (e.pos.x < 0)) { e.v.x = -e.v.x * 0.9 }

        }
    }

}

function drawAgent(ecs) {
    let entites = ecs.getAllEntites();
    for (let id in entites) {
        let e = entites[id];
        if (e && e.transform.root && e.transform.root.entity.ctx) {
            let c = e.transform.root.entity.ctx;
            c.fillStyle = "rgba(255, 255, 255, 0.5)";
            c.beginPath();
            c.arc(e.pos.x, e.pos.y, 2, 0, Math.PI * 2, true);
            c.closePath();
            c.fill();

            c.strokeStyle = "rgba(255, 255, 255, 0.1)";
            c.moveTo(0, 0);
            c.lineTo(e.pos.x, e.pos.y);
            c.stroke();
        }
    }

}