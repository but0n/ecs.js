function renderSystem(e) {
    if(e.ctx) {
        let ctx = e.ctx;
        ctx.fillStyle = "#333333";
        ctx.fillRect(0, 0, 600, 600);
    }
}

function move(e) {
    if(e && e.v) {
        e.pos.x += e.v.x;
        e.pos.y += e.v.y;

        if ((e.pos.y > 600 - 2 / 2) || (e.pos.y < 0)) { e.v.y = -e.v.y * 0.9 }
        if ((e.pos.x > 600 - 2 / 2) || (e.pos.x < 0)) { e.v.x = -e.v.x * 0.9 }

    }
}

function drawAgent(e) {
    if (e && e.transform.root && e.transform.root.entity.ctx) {
        let c = e.transform.root.entity.ctx;
        c.fillStyle = "rgba(255, 255, 255, 0.5)";
        c.beginPath();
        c.arc(e.pos.x, e.pos.y, 2, 0, Math.PI * 2, true);
        c.closePath();
        c.fill();
    }
    // c.fillStyle = "rgba(255, 255, 255, 0.43)";
    // c.beginPath();
    // c.arc(this.xPos, this.yPos, this.zPos, 0, Math.PI * 2, true);
    // c.closePath();
    // c.fill();
}

function loop() {
    cxt.fillStyle = "#333333";
    cxt.fillRect(0, 0, 600, 600);
    if (ram.length < 100) {
        var point = new particle(200, 300);
        ram.push(point);
    }
    for (coun = 0; coun < ram.length; coun++) {
        ram[coun].re(cxt);
        ram[coun].update();
    }
}
function particle(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.zPos = Math.random() * 4;
    this.Vy = -2;
    this.Vx = Math.random() * 2 + 2;
    this.re = (c) => {
        c.fillStyle = "rgba(255, 255, 255, 0.43)";
        c.beginPath();
        c.arc(this.xPos, this.yPos, this.zPos, 0, Math.PI * 2, true);
        c.closePath();
        c.fill();
    }
    this.update = () => {
        this.xPos += this.Vx;
        this.yPos += this.Vy;
        this.Vy += 0.098;// g = dv/dt
        if ((this.yPos > 600 - this.zPos / 2) || (this.yPos < 0)) { this.Vy = -this.Vy * 0.9 }
        if ((this.xPos > 600 - this.zPos / 2) || (this.xPos < 0)) { this.Vx = -this.Vx * 0.9 }
    }
}