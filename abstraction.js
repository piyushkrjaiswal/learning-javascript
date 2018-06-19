function Circle(radius) {
    this.radius = radius;
    let defaultLocation = { x: 0, y: 0 };
    this.getDefaultLocation = function() {
        return defaultLocation;
    };
    let computeOptimumLocation = function(factor) {};

    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get:function() {
            return defaultLocation;
        }, 
        set: function(value) {
            if(!value.x || !value.y)
            throw new Error('Invalid Location');
           defaultLocation = value;  
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();