	
// https://learn.jquery.com/using-jquery-core/document-ready/
// https://remysharp.com/2007/04/12/jquerys-this-demystified
	
alert("Two brothers had an idea for a story. One brother turned it into the most original movie of the spring, Memento. The other wrote this short story. I made hyperlinks.");
	$(document).ready(function(){	

// Text Color and Background Color keep inter-changing (Black&White)
		//Style for Links inside Selftext (First Person)
		$(".selfText a").css("border","1px solid #f6f6f6");
		$(".selfText a").hover(function(){
			// Hovering makes the background white; text black
			$(this).css("background","#f6f6f6");
			$(this).css("color","#1c1c1c");
			// Call Back function; hover off - reversal 
		}, function() {
			$(this).css("background","#1c1c1c");
			$(this).css("color","#f6f6f6");
		});

		// Style for Links inside Storytext (Third Person)
		$(".storyText a").css("border","2px solid #1c1c1c");
		$(".storyText a").hover(function(){
			// Hovering makes the background black; text white
			$(this).css("background","#1c1c1c");
			$(this).css("color","#f6f6f6");
			// Call Back function; hover off - reversal 
		}, function(){
			$(this).css("background","#f6f6f6");
			$(this).css("color","1c1c1c");
		});	

// Container if "this string" exists inside you then use this CSS  
// EARL/Earl is third person - story text - white background black text 
// You/you is first person - self text - black background white text 
		$(".container:contains('EARL')").parent().css("background","#f6f6f6");
		$(".container:contains('Earl')").parent().css("background","#f6f6f6");
		$(".container:contains('You')").parent().css("background","#1c1c1c");
		$(".container:contains('you')").parent().css("background","#1c1c1c");

// In the EVENT of click an <a> tag do THIS  / 
		$("a").click(function(e){
			// Clicked anchors will not take the browser to a new URL. 
			// We can use prevent defualt to determine if this 
			// method has been called by an event handler 
			// that was triggered by this event.
			e.preventDefault();
			// Identify the href of the link clicked (eg - five.html) 
			var viewportWidth = $(window).width();
			var viewportHeight = $(window).height();
			var href = $(this).attr('href');
			// var pageHeight = 10000;
			var clicked = false;
			// Building HTML string (Check if its not clicked)
			// If an a tag is clicked insert an Iframe after 
			// the tag that was clicked  
			// Identify the link and then write valid HTML 
			// to insert it in the document  
			if (clicked==false) {
				$(this).after("<iframe class='framer' height=' "+viewportHeight+"' width='"+viewportWidth+" ' src='"+href+" ' frameBorder='0'>");
				clicked = true;
				// Every Link creates a new iframe 
				// (height and width required)
			} 
			// else {
			// }
						
});


	});