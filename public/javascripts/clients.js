//getting client's feedback from clients.json
function getClientData(){
    var clientsJSON = require(__dirname+"/clients.json");
    console.log(clientsJSON[1]);
}

module.exports.getClientData = getClientData;

