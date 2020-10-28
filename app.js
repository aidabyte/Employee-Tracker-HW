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
         break;
        
        case "view all departments":
          break;

        case "view all roles":
          break;

        case "add an employee":
          break;
        
        case "remove employee":
          break;

        case "update an employee":
        break;

        
      }
    }
    )};

