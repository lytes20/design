import FileSystemComponent from './FileSystemComponent';

export default class Directory extends FileSystemComponent {
  fileSystemComponents: FileSystemComponent[] = [];
  constructor(name: string) {
    super(name);
  }

  addComponent(component: FileSystemComponent): void {
    this.fileSystemComponents.push(component);
  }

  print(): void {
    console.log(`Dir: ${this.name} size=${this.getSizeInBytes()}`);
    for (const component of this.fileSystemComponents) {
      component.print();
    }
  }

  getSizeInBytes(): number {
    let sizeInBytes = 0;
    for (const component of this.fileSystemComponents) {
      sizeInBytes = sizeInBytes + component.getSizeInBytes();
    }
    return sizeInBytes;
  }
}
