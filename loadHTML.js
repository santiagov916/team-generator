const inquirer = require('inquirer');

function managerCard(data) {
    var html = ""
    for(var entry of data) {
        html += `<div class="card m-card">
        <div class="card-body bg-primary text-white">
            <h4 class="font-weight-bold"> ${entry.getName} </h4>
            <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${entry.getId()} </li>
            <li class="list-group-item email">Email: ${entry.getEmail()}</li>
            <li class="list-group-item number">Office Number: ${entry.getNumber()}</li>
        </ul>
    </div>`
    }
    return html;
}

function engineerCard(data) {
    var html = ""
    for(var entry of data) {
        html += `<div class="card m-card">
        <div class="card-body bg-primary text-white">
            <h4 class="font-weight-bold"> ${entry.getName()} </h4>
            <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${entry.getId()} </li>
            <li class="list-group-item email">Email: ${entry.getEmail()}</li>
            <li class="list-group-item number">Office Number: ${entry.getNumber()}</li>
        </ul>
    </div>`
    }
    return html;
}

function internCard(data) {
    var html = ""
    for(var entry of data) {
        html += `<div class="card m-card">
        <div class="card-body bg-primary text-white">
            <h4 class="font-weight-bold"> ${entry.getName()}</h4>
            <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${entry.getId()}</li>
            <li class="list-group-item email">Email: ${entry.getEmail()}</li>
            <li class="list-group-item number">Office Number: ${entry.getNumber()}</li>
        </ul>
    </div>`
    }
}
