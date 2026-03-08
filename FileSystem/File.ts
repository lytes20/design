import FileSystemComponent from "./FileSystemComponent";

export default class File extends FileSystemComponent {
  private sizeInBytes: number;
  constructor(name: string, sizeInBytes: number) {
    super(name);
    this.sizeInBytes = sizeInBytes;
  }
  print(): void {
    console.log(this.name);
  }
  getSizeInBytes(): number {
    return this.sizeInBytes;
  }
}
