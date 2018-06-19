
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

function Circle(radius) {
   this.radius = radius;
   this.draw = function() {
       console.log("Hello World!");
    }
}

Circle.call({}, 1);
const another = new Circle(1);