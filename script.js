class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }
  }

  class Manager extends Employee {
      constructor(descriptionOfJob, name, salary, hireDate) {
          super(name, salary, hireDate);
          this.descriptionOfJob = descriptionOfJob;
      }
      jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + ", her salary is " + this.salary + ", and she " + this.descriptionOfJob + ".")
      }
  }

  class Designer extends Employee {
    constructor(experience, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience(){
        console.log(this.name + " was hired on " + this.hireDate + ", his salary is " + this.salary + ", and he has " + this.experience + " years of experience.")
    }
}

class SalesAssociate extends Employee {
    constructor(degrees, name, salary, hireDate) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted(){
        console.log(this.name + " was hired on " + this.hireDate + ", his salary is " + this.salary + ", and he has a degree in " + this.degrees + ".")
    }   
}

let manager = new Manager("manages all employees", "Elizabeth", 70000, "10/29/2016");
    manager.jobDescription();
  
let designer = new Designer(5, "Daniel", 60000, "7/18/2017");
    designer.yearsExperience();
    
let salesAssociate = new SalesAssociate("communications", "Robert", 50000, "1/07/2019");
    salesAssociate.degreeCompleted();
   