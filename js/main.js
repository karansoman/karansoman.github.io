	
// https://learn.jquery.com/using-jquery-core/document-ready/
	$(document).ready(function(){


	
// backgrounds keep changing - depending on 
// the background color we need to see the text 
		//All the links in self text will have the below style 
		$(".selfText a").css("border","1px solid #f6f6f6");
		$(".selfText a").hover(function(){
			// https://remysharp.com/2007/04/12/jquerys-this-demystified
			$(this).css("background","#f6f6f6");
			$(this).css("color","#1c1c1c");
			// the below is the call back function 
			// hover off function - remove the background 
			// property all the way completely, 
			// telling it to default 
		}, function() {
			$(this).css("background","#1c1c1c");
			$(this).css("color","#f6f6f6");
		});
		// All the links in the story text will have the below style
		$(".storyText a").css("border","2px solid #1c1c1c");

		$(".storyText a").hover(function(){
			$(this).css("background","#1c1c1c");
			$(this).css("color","#f6f6f6");
		}, function(){
			$(this).css("background","#f6f6f6");
			$(this).css("color","1c1c1c");
		});
		
// Container - if the word earl exists inside you then take this  
// Whenever EARL is there you know it is a third person voice - story text - white background black text 
// whenever the page has you in it its selftext - first person text - black bkgrnd white text 
		$(".container:contains('EARL')").parent().css("background","#f6f6f6");
		$(".container:contains('Earl')").parent().css("background","#f6f6f6");
		$(".container:contains('You')").parent().css("background","#1c1c1c");
		$(".container:contains('you')").parent().css("background","#1c1c1c");



		var viewportwidth = $(window).width();
		var viewportHeight = $(window).height();

// everytime an a tag is clicked we have context to THIS  / 
// anytime any button is clicked do this - 2 sent instead of 40 
		$("a").click(function(e){
			
			e.preventDefault();
			// var paragraph = $(this).parent();
			// var article = paragraph.parent().parent().parent();
			// var container = article.parent();
			
			// every time a is clicked make sure that the parents 
			// / link - paragraph - article - container - what 
			// the href of this link that I have just clicked 
			var href = $(this).attr('href');
			var pageHeight = 10000;
			var clicked = false;
// Variable "href" what is the href that was clicked; that this link will be directed to //
//If an a tag is clicked insert an Iframe after the tag that was clicked  =
 // you need to give an iframe a width and a height / compulsary /
 // building up an html string to put into my html document 
 // inject valid html - make a sentence using the iframe tag
 // I want to know where this link is going to and then write the html 
			if (clicked==false) {
				$(this).after("<iframe class='framer' height=' "+pageHeight+"' width='"+viewportwidth+" ' src='"+href+" ' frameBorder='0'>");
				clicked = true;
				// every link does the iframe thing 

			} else {

			}
						
});


	});