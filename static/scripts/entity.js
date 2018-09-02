function entityMixin(ecs) {

    ecs.prototype.createEntity = function() {

        // An entity only consists of an ID and a container of components.
        // The idea is to have no game methods embedded in the entity.
        // The container doesn't have to be located physically together with the entity, but should be easy to find and access.

        let entity = {
            id: e7()
        };

        this.updateOb(entity);

        // foundamental

        entity.pos = new vector2();
        entity.matrix = new Matrix4();
        entity.transform = new transform(entity);
        entity.entity = entity;
        return entity;

    }

    ecs.prototype.updateOb = function(e) {
        for(let key in this.components) {

            const ob = {};
            ob.get = () => this.components[key][e.id];
            ob.set = data => {
                return this.components[key][e.id] = data;
            }

            Object.defineProperty(e, key, ob);

        }
    }

}



let lut = []; for (var i = 0; i < 256; i++) { lut[i] = (i < 16 ? '0' : '') + (i).toString(16); }
function e7() {
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
        lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
        lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
        lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
}
