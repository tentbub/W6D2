
$('.parentDiv').append("<div class='childDiv'></div>")

$('.parentDiv').on("click", ".childDiv", function() {
    $(this).toggleClass("gray")
});

let i;
for (i=0; i<15; i++) { $('.parentDiv').append("<div class='childDiv'></div>") 

}

