//----------SHOW BUTTON----------//
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
//----------END SHOW BUTTON----------//
$('#addVault').on('click', function (event) {
    event.preventDefault();
    console.log("button was clicked")
    let data = {
        name: $(entryName).val().trim(),
        url: $(entryLink).val().trim(),
        user_name: $(entryUsername).val().trim(),
        password: $(entryPassword).val().trim()
    };
    console.log('time for validation');
    console.log(data.name.length);
    if(data.name.length<=0){
        console.log('validation!');
      $('#p1').text("Field cannot be empty.").toggleClass("invalid-feedback");
      return false;  
    };
     if(data.user_name.length<=0){
        console.log('validation!');
      $('#p3').text("Field cannot be empty.").toggleClass("invalid-feedback");
      return false; 
    };
     if(data.password.length<=0){
        console.log('validation!');
      $('#p4').text("Field cannot be empty.").toggleClass("invalid-feedback");
      return false; 
    }

        
    console.log('no validation');
    $.ajax({
        method: "POST",
        url: '/secret',
        data: data
    }).then(function (response) {
        // console.log(response);
        // $(inputForm).reset;
        window.location.replace('/secret');
        // window.location.reload();
        $(entryName).val('');
        $(entryLink).val('');
        $(entryUsername).val('');
        $(entryPassword).val('');
    })
});

$('.deletePwd').on('click', function (event) {
    event.preventDefault();
    console.log("delete button was clicked");
    
    let id = $(this).data("id");
    console.log(id);
    console.log(`this is the ${id}`)
    $.ajax({
        method: "DELETE",
        url: `/secret/${id}`,
        // data: data
    }).then(function (response) {
        console.log("deleting stuff");
        console.log(response);
        location.reload();
        // window.location.reload()
        // window.location.replace('/secret');
    })
});

$('.updatePwd').on('click', function (event) {
    event.preventDefault();
    console.log("update button was clicked")
    let id = $(this).data("id");
    console.log(id)
    let data = {
        // name: $(nameChange).val(),
        url: $(".urlChange-"+id).val(),
        user_name: $(".usernameChange-"+id).val(),
        password: $(".passwordChange-"+id).val()
    }
    console.log(data)
    $.ajax({
        method: "PUT",
        url: `/secret/${id}`,
        data: data
    }).then(function (response) {
        console.log('getting somewhere');
        console.log(response);
        window.location.reload();
        });
});

// Generate button - generates string in base 36 and slices off last 10 digits to create a random string
$('#generate').on('click', function (event) {
    event.preventDefault();
    console.log(" generate button was clicked");
    let random = $(entryPassword).val(Math.random().toString(36).slice(-10));
   
});