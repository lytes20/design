abstract class FileSystemComponent {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract print(): void;
  abstract getSizeInBytes(): number;
}

export default FileSystemComponent;
