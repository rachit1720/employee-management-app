
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const employees = [
  { id: 1, name: "Rachit", department: "DevOps" },
  { id: 2, name: "Amit", department: "IT" }
];

function showMenu() {
  console.log("\n===== Employee Management System =====");
  console.log("1. View Employees");
  console.log("2. Add Employee");
  console.log("3. Exit");

  rl.question("Choose an option: ", (choice) => {
    if (choice === "1") {
      viewEmployees();
    } else if (choice === "2") {
      addEmployee();
    } else if (choice === "3") {
      console.log("Application closed.");
      rl.close();
    } else {
      console.log("Invalid option. Try again.");
      showMenu();
    }
  });
}

function viewEmployees() {
  console.log("\n--- Employee List ---");

  employees.forEach((employee) => {
    console.log(
      `ID: ${employee.id} | Name: ${employee.name} | Department: ${employee.department}`
    );
  });

  showMenu();
}

function addEmployee() {
  rl.question("Enter employee name: ", (name) => {
    rl.question("Enter department: ", (department) => {
      const newEmployee = {
        id: employees.length + 1,
        name: name,
        department: department
      };

      employees.push(newEmployee);

      console.log("Employee added successfully!");
      showMenu();
    });
  });
}

showMenu();


