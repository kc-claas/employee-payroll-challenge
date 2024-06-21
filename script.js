// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

let employeeRoster = []

// Collect employee data
const collectEmployees = function() {
  employeeRoster = []
  let x = 0
  while (x>=0) {
  // TODO: Get user input to create and return an array of employee objects
    employeeRoster[x] = {firstName: window.prompt("Employee first name"),
    lastName: window.prompt("Employee last name"),
    salary: parseFloat(window.prompt("Employee salary"))}
  if (Number.isNaN(employeeRoster[x].salary))
    {employeeRoster[x].salary = 0};

    // console.log(employeeRoster)
  
  if (window.confirm("Add another employee?")) {
    x++}
    else {x = -1}    
  };
    return employeeRoster
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalsalary = 0
      // console.log(employeesArray)
  for (i = 0; i < employeesArray.length; i++) {
    totalsalary = (totalsalary + employeesArray[i].salary)
      // console.log(totalsalary)
    }

  let averageSalary = (totalsalary/(employeesArray.length))
    averageSalaryWithTwoDecimals = averageSalary.toFixed(2)

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalaryWithTwoDecimals}`)
    
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const winner = (Math.floor(Math.random()*employeesArray.length))
    console.log(`Congratulations to ${employeesArray[winner].firstName} ${employeesArray[winner].lastName}, our random drawing winner!`)
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
