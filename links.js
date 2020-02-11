function DisableLinks()  // createing a function to Disable Links
{
	// disable google link
	var google1 = document.getElementById("google").style.color ="red";
	var google2 = document.getElementById("google").style.cursor ="default";
	var google3 = document.getElementById("google").style.pointerEvents ="none"
   
   // // disable bing link
   var bing1 = document.getElementById("bing").style.color ="red";
   var bing2 = document.getElementById("bing").style.cursor ="default";
   var bing3 = document.getElementById("bing").style.pointerEvents ="none";

      // // disable yahoo link
   var yahoo1 = document.getElementById("yahoo").style.color ="red";
   var yahoo2 = document.getElementById("yahoo").style.cursor ="default";
   var yahoo3 = document.getElementById("yahoo").style.pointerEvents ="none";
}



function EnableLinks()  // createing a function to Enable Links
{
	// disable google link
	var google1 = document.getElementById("google").style.color ="";
	var google2 = document.getElementById("google").style.cursor ="";
	var google3 = document.getElementById("google").style.pointerEvents =""
   
   // // disable bing link
   var bing1 = document.getElementById("bing").style.color ="";
   var bing2 = document.getElementById("bing").style.cursor ="";
   var bing3 = document.getElementById("bing").style.pointerEvents ="";

      // // disable yahoo link
   var yahoo1 = document.getElementById("yahoo").style.color ="";
   var yahoo2 = document.getElementById("yahoo").style.cursor ="";
   var yahoo3 = document.getElementById("yahoo").style.pointerEvents ="";
}