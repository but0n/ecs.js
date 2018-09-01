function worldMixin(ecs) {

    ecs.prototype.initWorld = function() {
        // foundamental
        this.registComponent('ctx');
        this.registComponent('pos');
        this.registComponent('matrix');
        this.registComponent('transform');
        this.registComponent('v');

        this.world = ecs.prototype.createEntity();
        this.world.ctx = document.querySelector('#renderer').getContext("2d");

        // this.setComponentByID(this.world.id, 'pos', 12);

    }

    ecs.prototype.systems = [];

    ecs.prototype.update = function(e) {
        if(e) {
            for (let sys of this.systems) {
                sys(e);
            }
            for (let sub of e.transform.child) {
                this.update(sub.entity);
            }

        }
    }

}