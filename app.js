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
      console.log(response);
      
      switch (response.choice){
       case "view all employees":
         viewAllEmployees();
         break;
        
        case "view all departments":
          viewAllDepartments();
          break;

        case "view all roles":
          viewAllRoles();
          break;

        case "add an employee":
          addEmployee();
          break;
        
        case "remove employee":
          break;

        case "update an employee":
          updateEmployee();
          break;

        case "add a role":
          addRole();
          break;

        case "remove a role":
          break;

        case "add a department":
          addDepartment();
          break;

        case "remove a department":
          break;

        case "exit":
          break;

      
        
      }
    }
    )};

    function viewAllEmployees () {
      connection.query("SELECT * FROM employee", function (err, result) {
        if (err) throw err;
        console.table(result)
        start();

    })
  }

    function viewAllDepartments() {
      connection.query("SELECT * FROM department", function (err, result) {
        if (err) throw err;
        console.table(result)
        start();
    }
      )}

      function addDepartment(){
        inquirer.prompt ([
          {
            name: "depName",
            type: "input",
            message: "what department would you like to add?"
            
          },
        ]).then(function(response){
          console.log(response)
          connection.query(
            "INSERT into department SET ?", 
            {
              name: response.depName,  
            },
            (err,data) => {
              if (err) throw (err)
              console.table(data)
              viewAllDepartments();
            }
            
          )
        })
          

      
      }

      function viewAllRoles() {
        connection.query("SELECT * FROM role", function (err, result) {
          if (err) throw err;
          console.table(result)
          start();

      }
        )}

        function addRole(){
          connection.query("SELECT * FROM department", function (err, result) {

            if (err) throw err;
            var allDepArr = result.map(function(department) {
              return department.name
              
            })
            console.log(allDepArr)
            
            

          
  

          inquirer.prompt ([
            {
              name: "titleRole",
              type: "input",
              message: "whats the title of your role?"
              
            },
            {
              name: "salaryRole",
              type: "input",
              message: "whats the salary that you make?"

            },
            {
              name: "depRole",
              type: "list",
              message: "whats your department?",
              choices: allDepArr

            },

          ]).then(function(response){
            console.log(response)
            const foundDep = result.find(function(department) {
              return department.name === response.depRole
            })
            console.log(foundDep)
            connection.query(
              "INSERT into role SET ?", 
              {
                title: response.titleRole,
                salary: response.salaryRole,
                department_id: foundDep.id
              },
              (err,data) => {
                if (err) throw (err)
                console.table(data)
                viewAllDepartments();
              }
              
            )

          })
          })
        }

        function addEmployee() {
          connection.query("SELECT * FROM role", function (err, result) {
            if (err) throw err;
            var titles = result.map(function(role) {
              return role.title 

              
            })
            console.log(titles)
          inquirer.prompt ([
          {
            name: "firstName",
            type: "input",
            message: "whats the employees first name?"
            
          },
          {
            name: "lastName",
            type: "input",
            message: "whats the employees last name?"
          },
          {
            name: "roleName",
            type: "list",
            message: "whats the employees role?",
            choices: titles
            
          }
          
        ]).then(function ({ firstName, lastName, roleName}) {
          console.log(firstName, lastName, roleName);
          const foundRole =  result.find(function(role) {
            return roleName === role.title
          })
          
          connection.query(
            "INSERT into employee SET ?", 
            {
              first_name: firstName,
              last_name: lastName,
              role_id : foundRole.id
              
            },
            (err,data) => {
              if (err) throw (err)
              console.table(data)
              viewAllDepartments();
            }
            
          )
          })
        
      
      
      });
        }

    function updateEmployee() {
      connection.query("SELECT first_name, last_name, role_id FROM employee", function (err, result) {
        if (err) throw err;
        var upEmployee = result.map(function(role) {
          return role.name

        })
        console.log(employee)


         
      })
    }
    
  //     inquirer.prompt ([
  //       {
  //         name: "newRole",
  //         type: "input",
  //         message: "Whats your new role?"
  //       },
  //       {
  //         name: "newEmployeeName",
  //         type: "list",
  //         message: "Which employee role are you updating?",
  //         choices: upEmployee
  //       },

  //     ]).then(function(response) {
  //       console.log(response)
  //       const updatedEm = result.find(function(role))
  //     })
  // }

  
    
          

      
  