const inquirer = require('inquirer');

// specific html card load for a Manager
function managerCard(data) {
    var html = ""
    for(var entry of data) {
        html +=             `<<div class="card m-card col-3">
        <div class="card-body bg-primary text-white">
        <h4 >${entry.getName()}</h4>
        <h4 class=" bg-primary text-white"><i class="fas fa-mug-hot  "></i>  
        ${entry.getRole()}</h4>
        <p class="card-text"></p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item  ID" >ID number: ${entry.getId()}</li>
        <li class="list-group-item email" > Email:   <a href="mailto:${entry.getEmail()}">${entry.getEmail()}</a></li>
        <li class="list-group-item " >Office number:  ${entry.getOfficeNumber()}</li>
        </ul>
    </div>`
    }
    return html;
}

// specific html card load for an Engineer
function engineerCard(data) {
    var html = ""
    for(var entry of data) {
        html += `<div class="card m-card col-3">
        <div class="card-body bg-primary text-white">
            <h4 class="font-weight-bold"> ${entry.getName()} </h4>
            <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${entry.getId()} </li>
            <li class="list-group-item email">Email: ${entry.getEmail()}</li>
            <li class="list-group-item number">Github: ${entry.getGithub()}</li>
        </ul>
    </div>`
    }
    return html;
}

// specific html load for an Intern
function internCard(data) {
    var html = ""
    for(var entry of data) {
        html += `<div class="card m-card col-3">
        <div class="card-body bg-primary text-white">
            <h4 class="font-weight-bold"> ${entry.getName()}</h4>
            <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${entry.getId()}</li>
            <li class="list-group-item email">Email: ${entry.getEmail()}</li>
            <li class="list-group-item number">School: ${entry.getSchool()}</li>
        </ul>
    </div>`
    }
    return html;
}

// this function will put all the above data together and generate a page template for the user to see
function loadTeam(data) {
    const managers = data.filter(item => item.getRole() == "Manager")
    const engineers = data.filter(item => item.getRole() == "Engineer")
    const interns = data.filter(item => item.getRole() == "Intern")

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>

        <meta charset="UTF-8">
        <title>Team Generator</title>
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&family=Zen+Antique&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="../dist/style.css">
        <script src="jquery-3.5.1.min.js"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

    </head>
    <body>
        <header>

            <div class="jumbotron bg-danger text-center">
                <h2 class="text-white font-weight-bold text-style-underline">Our Team</h2>
            </div>

        </header>
    
        <div class="container d-flex justify-content-between bg-white col-12">
            
            <div class="row col-12">
            
            ${managerCard(managers)}
            ${engineerCard(engineers)}
            ${internCard(interns)}

            </div>
    
        </div>
    </body>
    </html>
    
    `
};

module.exports = { loadTeam };
