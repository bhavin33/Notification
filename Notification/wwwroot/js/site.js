// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.


// Write your JavaScript code.
var connection = new signalR.HubConnectionBuilder().withUrl("/notification").build();
connection.on("ReceiveMessage", function (user, message) {
    console.log("recieved signalR message" + message + user);
    const notificationMessenger = document.getElementById("notification-message");
    const notificationMessengerBody = document.querySelector("#notification-message .toast-body");
    notificationMessengerBody.textContent = message;
    let toastr = new bootstrap.Toast(notificationMessenger);
    toastr.show();
});

connection.start().then(function () {
    console.log("start");
}).catch(function (err) {
    return console.error(err.toString());
});