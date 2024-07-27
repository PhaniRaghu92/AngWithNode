export class Employee {
  name: string;
  salary: number;
  active: boolean;
  email: string;
  location: string;

  constructor() {
    this.name = '';
    this.salary = 0;
    this.active = false;
    this.location = '';
    this.email = '';
  }
}
