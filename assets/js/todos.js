// Note to create listeners on future elements, you
// need to create them on the parent that will exist
// at the beginning and use a second argument as the 
// specific thing to click

// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Fade out and delete when X is clicked
$("ul").on("click", "span", function(event){
	
	// We need the li not the span to fadeOut
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	// To prevent event bubbling (moving to li layer etc)
	event.stopPropagation();
});

// Add new todo
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		// grabbing new todo text
		var todoText = $(this).val();
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
		// delete input text
		$(this).val("");
	};
});

// Fade in/out input when the plus icon is clicked
$("h1 i").on("click", function(){
	$("input[type='text']").fadeToggle();
});