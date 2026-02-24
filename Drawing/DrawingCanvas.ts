import Shape from "./Shape";

export default class DrawingCanvas {
  constructor() {}

  draw(shape: Shape) {
    shape.draw(this);
  }
}
