function toCelsius() {
    // Grabs the input from the user
    let input = document.getElementById("temperature").value;
    let resultParent = document.getElementById("result-parent");
    let result = document.getElementById("result");

    //remove existing warning
    let currentWarning = document.getElementById("warning");
    if (currentWarning) {
        currentWarning.remove();
    }

    //valid number
    if (isNaN(input) || input.trim() === "") {
        let warning = document.createElement("div");
        warning.id = "warning";
        warning.innerText = "Please input a valid number!";
        warning.style.color = "red";
        warning.style.fontWeight = "bold";

        //hide if not number
        resultParent.style.visibility = "hidden";

        //give warning about not entering num 
        resultParent.parentNode.insertBefore(warning, resultParent);
    } else { //if number convert to celsius 
        // Converts the temperature to Celsius
        let celsius = (Number(input) - 32) * 5 / 9;

        //Show result back to user
        result.innerText = celsius.toFixed(2); //round to 2 decimal places for readability 

        // Makes the div visible
        resultParent.style.visibility = "visible";
    }
}
