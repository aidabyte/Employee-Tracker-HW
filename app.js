const inquirer = require('inquirer');
const mysql = require('mysql');
// const consoleTables = require ('console.tables')


var connection = mysql.createConnection({


  host: "localhost",

  // Your port; if not 3306
  PORT: 3000,

  // Your username
  user: "root",

  // Your password
  password: "password",



  database: "employee_db"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    start();
    // connection.end();
});


function start() {
  inquirer
    .prompt({
      name: "choice",
      type: "list",
      message: "What would you like to do?",
      choices: [
       "view all employees",
       "view all departments", 
       "view all roles",
       "add an employee",
       "remove employee",
       "update an employee",
       "add a role",
       "remove a role",
       "add a department",
       "remove a department",
       "exit"

      ]
    }).then(function (response) {
      
      switch (response.choice){
       case "view all employees":
         viewAllEmployees();
         break;
        
        case "view all departments":
          viewAllDepartments();
          break;

        case "view all roles":
          break;

        case "add an employee":
          break;
        
        case "remove employee":
          break;

        case "update an employee":
          break;

        case "add a role":
          break;

        case "remove a role":
          break;

        case "add a department":
          break;

        case "remove a department":
          break;

        case "exit":
          break;

      
        
      }
    }
    )};

    function viewAllEmployees () {
      connection.query("SELECT * FROM employees", function (err, result) {
        if (err) throw err;
        start();

    })
  }

    function viewAllDepartments() {
      connection.query("SELECT * FROM departments", function (err, result) {
        if (err) throw err;
        start();
    }
      )}

      function viewAllRoles() {
        connection.query("SELECT * FROM departments", function (err, result) {
          if (err) throw err;
          start();

      }



