import DrawingCanvas from "./DrawingCanvas";

export default abstract class Shape {
  private canvas: DrawingCanvas;
  abstract draw(canvas: DrawingCanvas): void;
}
