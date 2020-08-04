const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

// MySQL DB Connection Information (remember to change this with your specific credentials)
const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username 
    user: "root",

    // Your root password
    password: "Ay57435743",
    database: "employees_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
    mainMenu();
});

// Prompts the user all the options
function mainMenu() {
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "Choose what you want to do from the list of options: ",
        choices: [
            "+ Add Department","+ Add Role","+ Add Employee",
            "* View Current Departments", "* View Current Roles", "* View Current Employees",
            "^ Update Employee Role",
            "- Delete Department", "- Delete Role", "- Delete Employee",
            "== END APPLICATION =="
        ],
    }]).then(res => {
        console.log(res.action);
        switch (res.action) {
            case "+ Add Department":
                addDepartment()
                break;

            case "+ Add Role":
                addRole()
                break;

            case "+ Add Employee":
                addEmployee()
                break;
                                        
            case "* View Current Departments":
                viewDepartments()
                break;

            case "* View Current Roles":
                viewRoles()
                break;
            
            case "* View Current Employees":
                viewEmployees()
                break;

            case "^ Update Employee Role":
                updateEmployeeRole();
                break;
            
            case "* Delete Department":
                deleteDepartment()
                break;

            case "* Delete Role":
                deleteRole()
                break;

            case "* Delete Employee":
                deleteEmployee()
                break;
                
            default:
                connection.end()
                break;
        }
    })
}

// Adds a new Department to the department table in the database.
function addDepartment() {
    inquirer.prompt({
        type: "input",
        name: "department",
        message: "Enter the name of the new department."
    }).then(res => {
        connection.query("INSERT INTO department (name) VALUES (?)", [res.department], (err, data) => {
            if (err) throw err;
            console.log("Successfully added new department: ", res.department);
            mainMenu();
        })
    })
}

// Adds a new Role to the role table in the database.
function addRole() {
    inquirer.prompt([
        {
            message: "Enter the title for this role.",
            type: "input",
            name: "title"
        }, 
        {
            message: "Enter the salary for this role.",
            type: "number",
            name: "salary"
        }, 
        {
            message: "Enter the department ID for this role.",
            type: "number",
            name: "department_id"
        }
    ]).then(function (res) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", 
        [res.title, res.salary, res.department_id], function (err, data) {
            if (err) throw err;
            console.log("Successfully added new role: ", res.title);
            mainMenu();
        })  
    })
}

// Adds a new Employee to the employee table in the database.
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter the first name of this employee."
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter the last name of this employee."
        },
        {
            type: "number",
            name: "roleId",
            message: "Enter the role ID of this employee."
        },
        {
            type: "number",
            name: "managerId",
            message: "Enter the managerId of this employee (if not applicable, enter 0)."
        }
    ]).then(res => {
        connection.query("INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)", 
        [res.firstName, res.lastName, res.roleId], (err, data) => {
            if (err) throw err;
            console.log("Successfully added new employee: ", res.firstName, " ", res.lastName);
            mainMenu();
        })
    })
}


// Displays all Department names
function viewDepartments() {
    connection.query("SELECT * FROM department", (err, data) => {
        console.table(data);
        mainMenu();
    })
}

// Displays all employee Role titles
function viewRoles() {
    connection.query("SELECT * FROM role", (err, data) => {
        console.table(data);
        mainMenu();
    })
}

// Displays all Employee Information
function viewEmployees() {
    connection.query("SELECT * FROM employee", (err, data) => {
        console.table(data);
        mainMenu();
    })
}


// Updates the title of an employee's role
function updateEmployeeRole() {
    inquirer.prompt([
        {
            message: "Enter the first name of the to be updated employee.",
            type: "input",
            name: "firstName"
        }, 
        {
            message: "Enter their last name.",
            type: "input",
            name: "lastName"
        }, 
        {
            message: "Enter the new role ID.",
            type: "number",
            name: "roleId"
        }
    ]).then(res => {
        connection.query(
            "UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?", 
            [res.roleId, res.firstName, res.lastName], (err, data) => {
                console.table(data);
            }
        )
        mainMenu();
    })

}

