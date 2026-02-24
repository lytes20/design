import DrawingCanvas from "./DrawingCanvas";
import Line from "./Shapes/Line";
import Circle from "./Shapes/Circle";

class App {
  static main(): void {
    // Create a canvas
    const canvas = new DrawingCanvas();

    // Crete a line
    const line: Line = new Line();
    canvas.draw(line);

    // Crete a circle
    const circle1: Circle = new Circle();
    canvas.draw(circle1);

    const circle2: Circle = new Circle();
    canvas.draw(circle2);
  }
}

App.main();
