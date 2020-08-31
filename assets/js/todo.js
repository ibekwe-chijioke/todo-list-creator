$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "#delete", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        let item = $(this).val();
        $("ul").append("<li><span id='delete'><i class='fa fa-trash-o'></i></span>" + item + "</li>");
        $(this).val("");
    };
});

$("#plus").on("click", function(){
    $(this).toggleClass("clicked");
    $("input[type='text']").fadeToggle();
});