import Directory from './Directory';
import File from './File';

class App {
  static main() {
    const cDir: Directory = new Directory('C');
    const appDir: Directory = new Directory('applications');
    const dataDir: Directory = new Directory('my data');
    const courseDir: Directory = new Directory('cs525');

    const excelFile: File = new File('msexcel.exe', 2353256);
    const wordFile: File = new File('word.exe', 3363858);
    const studentsFile: File = new File('students.doc', 34252);

    cDir.addComponent(appDir);
    cDir.addComponent(dataDir);
    dataDir.addComponent(courseDir);
    appDir.addComponent(excelFile);
    appDir.addComponent(wordFile);
    courseDir.addComponent(studentsFile);

    cDir.print();
  }
}

App.main();
