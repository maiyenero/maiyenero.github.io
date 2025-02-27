function toCelsius(){

    // grabs the input from the user
    let input =  document.getElementById("temperature").value;

    //remove existing warning
    let currentWarning = document.getElementById("warning");
    if (currentWarning) {
        currentWarning.remove();
    }

    if (isNaN(input)) {
        document.getElementById("result").innerText = ""; // Clear any previous result
	document.getElementById("result-parent").style.visibility = "hidden";
        document.getElementById("result-parent").innerHTML += `<div id="warning" style="color: red; font-weight: bold;">Please input a valid number!</div>`;
        //document.getElementById("result-parent").style.visibility = "visible";

    } else {
        // Convert to Celsius and show result
        let celsius = ((Number(input) - 32) * 5 / 9).toFixed(2);
        document.getElementById("result").innerText = celsius;
        document.getElementById("result-parent").style.color = "red";
        document.getElementById("result-parent").style.fontWeight = "normal";
        document.getElementById("result-parent").style.visibility = "visible";
    }
}

