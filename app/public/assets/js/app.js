
$.ajax({
    method: "GET",
    url: '/api/users'
}).then(function () {
    console.log("hello world");
});

$


document.getElementById("showPassword").addEventListener("click", function(e){
    e.preventDefault();
    console.log('switch password')
    let pwd = document.getElementById("entryPassword");
    if(pwd.getAttribute("type")==="password"){
        pwd.setAttribute("type","text");
    } else {
        pwd.setAttribute("type","password");
    }
});

//TODO Have Andrew assist me with the page change
// $('#showVault').on('click', function (event) {
//     event.preventDefault();
//     console.log("button was clicked")
//     $.ajax({
//         method: "GET",
//         url: '/api/secrets'
//     }).then(function () {
//         res.json(response)
//         console.log("page should change")
//     });
// });

// $(clipboard.on('click', function(event){
//     event.preventDefault();
//     console.log("Copied to clipboard")
// }));




// $.ajax({
//     method: "GET",
//     url: '/api/secret'
// }).then(function () {
//     console.log("hello world");
// });

$('#addVault').on('click', function (event) {
    event.preventDefault();
    console.log("button was clicked")
    let data = {
        name: $(entryName).val(),
        url: $(entryLink).val(),
        user_name: $(entryUsername).val(),
        password: $(entryPassword).val()
    }
    console.log(data)
        console.log("this happened")
    $.ajax({
        method: "POST",
        url: '/api/secret',
        data: data
    }).then(function (response) {
        console.log("switch pages")
        console.log(response)
    })
});


document.getElementById("showPassword").addEventListener("click", function(e){
    e.preventDefault();
    console.log('switch password')
    let pwd = document.getElementById("entryPassword");
    if(pwd.getAttribute("type")==="password"){
        pwd.setAttribute("type","text");
    } else {
        pwd.setAttribute("type","password");
    }
});

document.getElementById("showPwd").addEventListener("click", function(e){
    e.preventDefault();
    console.log('switch password')
    let pwd = document.getElementById("pwd");
    if(pwd.getAttribute("type")==="password"){
        pwd.setAttribute("type","text");
    } else {
        pwd.setAttribute("type","password");
    }
});