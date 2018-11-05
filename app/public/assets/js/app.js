
$(".showPwd").on("click", function(event){
    event.preventDefault();
    let pwd = $(this).closest(".pwdToggle").find(".pwd").attr("type");
    // console.log(pwd);
    if(pwd === "password"){
        $(this).closest(".pwdToggle").find(".pwd").attr("type", "text");
    }
    else{
        $(this).closest(".pwdToggle").find(".pwd").attr("type", "password");
    }
 })
 $("#triggerModal").on("click", function(event){
    event.preventDefault();
 });





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
    console.log(data)
    $.ajax({
        method: "POST",
        url: '/secret',
        data: data
    }).then(function (response) {
        // console.log(response);
        // $(inputForm).reset;
        window.location.replace('/secret');
        $(entryName).val('');
        $(entryLink).val('');
        $(entryUsername).val('');
        $(entryPassword).val('');
    })
});

$('#generate').on('click', function (event) {
    event.preventDefault();
    console.log("button was clicked")
    let random = $(entryPassword).val(Math.random().toString(36).slice(-10))
   
});