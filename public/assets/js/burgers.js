$(function() {
    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        if($("#newBurger").val() !== "") {

            var userInput = $("#newBurger").val().trim();
            $("#newBurger").val("");
            // console.log(userInput);
            
            var inputObj = {
                burger_name: userInput
            }
            
            $.ajax("/api/burgers", {
                type: "POST",
                data: inputObj
            }).then (function() {
                location.reload();
            })
        }
    })

    $(document).on("click", ".devour-btn", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var obj = {
            devour: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: obj
        }).then (function() {
            location.reload();
        })
    });

    $(document).on("click", ".moveBack-btn", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        var obj = {
            devour: 0
        }
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data:  obj
        }).then (function() {
            location.reload();
        })
    });

    $(document).on("click", ".delete-btn", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        // console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then (function() {
            location.reload();
        })
    });
});