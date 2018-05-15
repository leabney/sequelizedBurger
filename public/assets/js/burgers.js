$(function() {

    $("#submit").on("click", function(event) {
        
        event.preventDefault();
    
        
        var newBurger = {
          name: $("#name").val().trim(),
          devoured: 0
        };
    
        
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );

        $("#name").val("");
      });


      $(".change-status").on("click", function(event) {
        var id = $(this).data("id");
       
    
        var newBurgerState = {
          devoured: 1
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newBurgerState
        }).then(
          function() {
            console.log("devoured burger");
            // Reload the page to get the updated list
          }
        );
        location.reload();
      });

      $("#remove").on("click", function(event) {
        
        event.preventDefault();

        $.ajax("/api/burgers/", {
          type: "DELETE",
          
        }).then(
          function() {
            console.log("removed all burgers");
            // Reload the page to get the updated list
          }
        );
        location.reload();
      });

})
