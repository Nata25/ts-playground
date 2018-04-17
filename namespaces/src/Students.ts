namespace Students {

  export interface Student {
    name: string;
    age: number;
  }

  const ann: Student = {
    name: 'Ann',
    age: 30
  }

  const andrew: Student = {
    name: 'Andrew',
    age: 25
  }

  const mike: Student = {
    name: 'Mike',
    age: 41
  }

  const students: Array<Student> = [ann, andrew, mike];

  export function findStudent(name: string): Object {
    const student = students.find(function(student) {
      return student.name.toLocaleLowerCase() === name.toLocaleLowerCase();
    });
    return student;
  }
}