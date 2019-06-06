
// function myFunction(){
//     var formData = JSON.stringify($("#myForm").serializeArray());
//     console.log(formData);
//     $.ajax({
//         type: "POST",
//         url: "http://127.0.0.1:9000/test",
//         data: formData,
//         success: function(){},
//         dataType: "json",
//         contentType : "application/json"
//       });

// }
$(document).ready(function(){
  var contextroot = "/services/"
  $("#customerForm").submit(function(e){
      e.preventDefault();
      var form = $(this);
      var action = form.attr("action");
      var data = form.serializeArray();

      $.ajax({
                  url: contextroot+action,
                  dataType: 'json',
                  type: 'POST',
                  contentType: 'application/json',
                  data: JSON.stringify(getFormData(data)),
                  success: function(data){
                      console.log("DATA POSTED SUCCESSFULLY"+data);
                  },
                  error: function( jqXhr, textStatus, errorThrown ){
                      console.log( errorThrown );
                  }
      });
});
});

//utility function
function getFormData(data) {
 var unindexed_array = data;
 var indexed_array = {};
 $.map(unindexed_array, function(n, i) {
  indexed_array[n['name']] = n['value'];
 });

 return indexed_array;
}