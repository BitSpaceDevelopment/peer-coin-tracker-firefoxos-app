// Save API click event
$(".api-btn").click(function(){
    var data = document.getElementById("api_key_input").value;
    localStorage["api"] = data; 
});

$("a#settings_button").on("click", function(e){
    e.preventDefault;
    $("#options").click();
});