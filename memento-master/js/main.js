	$(document).ready(function(){


	
// backgrounds keep changing - depending on the background color we need to see the text 
		$(".selfText a").css("border","1px solid #f6f6f6");

		$(".selfText a").hover(function(){
			$(this).css("background","#f6f6f6");
			$(this).css("color","#1c1c1c");
		}, function() {
			$(this).css("background","");
			$(this).css("color","#f6f6f6");
		});

		$(".storyText a").css("border","2px solid #1c1c1c");

		$(".storyText a").hover(function(){
			$(this).css("background","#1c1c1c");
			$(this).css("color","#f6f6f6");
		}, function(){
			$(this).css("background","");
			$(this).css("color","1c1c1c");
		});
		
// Container - if the word earl exists inside you then take this  
		$(".container:contains('EARL')").parent().css("background","#f6f6f6");
		$(".container:contains('Earl')").parent().css("background","#f6f6f6");
		$(".container:contains('You')").parent().css("background","#1c1c1c");
		$(".container:contains('you')").parent().css("background","#1c1c1c");

		var viewportwidth = $(window).width();
		var viewportHeight = $(window).height();
		var fof = $(document).height();

		//alert(fof);

// everytime an a tag is clicked we have context to THIS  / anytime any button is clicked do this - 2 sent instead of 40 
		$("a").click(function(e){
			
			e.preventDefault();
			
			var container = $(this).parent().parent().parent().parent();
			var paragraph = $(this).parent();
			// every time a is clicked make sure that the parents / link - paragraph - article - container - what 
			var article = $(this).parent().parent().parent();
			// offset 

			var offset = $(this).offset();
			// what is the href that was clicked - that this link wants to go to 
			var href = $(this).attr('href');
			var pageHeight = 10000;
			var clicked = false;

//If an a tag is clicked insert an Iframe after the tag that was clicked  = you need to give an iframe a width and a height / compulsary /
			if (!clicked) {
				$(this).after("<iframe class='framer' height=' "+pageHeight+"' width='"+viewportwidth+" ' src='"+href+" ' frameBorder='0'>");
				clicked = true;

			} else {

			}
						
});


	});