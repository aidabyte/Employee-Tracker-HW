const mysql = require("mysql");
const inquirer = require("inquirer");
const tables = require("console.tables")

// any port can connect
var PORT = process.env.PORT || 3000;
// MySQL DB Connection Information 
var connection = mysql.createConnection({
  

  host: "localhost",


  port : 3000,

// change this to your own
  user: "root",


  password: "password",


  database: "employee_db"


  });
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });


  function start() {
    inquirer
      .prompt({
        name: "userAction",
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

        ]
      })
    }
     

