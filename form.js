// var formData = JSON.stringify($("#myForm").serializeArray());
// $.ajax({
//     type: "POST",
//     url: "http://127.0.0.1:9000/test",
//     data: formData,
//     success: function(){},
//     dataType: "json",
//     contentType : "application/json"
//   });
function myFunction(){
   
    var inpObj = document.getElementById("id1");
    alert("Hello! I am an", inpObj);
    console.log(inpObj.value);

}