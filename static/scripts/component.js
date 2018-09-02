function componentMixin(ecs) {

    ecs.prototype.components = {};

    ecs.prototype.registComponent = function(uniform) {
        this.components[uniform] = {};
    }
    ecs.prototype.getAllEntites = function () {
        return this.components['entity'];
    }
}

class vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class transform {
    constructor(e) {
        this.entity = e;
        this.parent = null;
        this.child = [];
        this.root = this;
    }
    addChild(transform) {
        this.child.push(transform);
        transform.changeRoot(this.root);
        transform.parent = this;
    }
    changeRoot(root) {
        this.root = root;
        for(let c of this.child) {
            c.changeRoot(root);
        }
    }
}