// Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
// Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
class Point {
    constructor(x, y){
        this.x = x || 0;
        this.y = y || 0;
    }
    distanseTo(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

// Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
// который будет наследоваться от точки в двумерном пространстве
class Point3D extends Point {
    constructor(x, y, z){
        this.z = z || 0;
        super(x, y);
    }
    distanceTo(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
}

// Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала
class Queue {
    constructor(){
        this.queue = [];
    }
    getInLine(Itoh){
        this.queue.push(Itoh);
    }
    nextPlease(){
        return this.queue.shift();
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
