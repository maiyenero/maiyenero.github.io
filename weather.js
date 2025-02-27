function toCelsius() {

	// grabs the input from the user
	let input =  document.getElementById("temperature").value;

	let celsius = (Number(input) - 32) * 5 / 9; //convert to celsius 

	//let resultParent = document.getElementById("result-parent");
	//	let result = document.getElementById("result");

	//remove existing warning
  // let currentWarning = document.getElementById("warning");
 	//  if (currentWarning) {
      // currentWarning.remove();
   //}

  	//check if number
   if (isNaN(celsius) {
		document.getElementById("result-parent").innerText = "Please input a valid number!";
		document.getElementById("result-parent").style.fontWeight = "bold";
	} else {
		//show to user 
		document.getElementById("result-parent").innerText = "The temperature in Celsius is" + celsius;
		document.getElementById("result-parent").style.color = "red";
		document.getElementById("result-parent").style.fontWeight = "normal";
	}
//make the div visiable 
	document.getElementById("result-parent").style.visibility = "visible";
	
}
