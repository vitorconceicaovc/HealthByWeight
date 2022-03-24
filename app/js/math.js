//Only one selected on gender checkbox
function selectOnlyThis(id){
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox,function(el){
      el.checked = false;
      el.required = false;
    });
    id.checked = true;
    id.required = true;
}
//user data
function calculate() {
    //age print
    var age = document.querySelector('#age').value
    document.querySelector('#age_data').innerHTML = age 
    //weight print
    var weight = document.querySelector('#weight').value
    document.querySelector('#weight_data').innerHTML = weight + " kg"
    //height print
    var height = document.querySelector('#height').value
    document.querySelector('#height_data').innerHTML = height + " cm"
    //gender print
    switch (true) {
        case (document.querySelector('#Check2').required == true): {
            document.querySelector('#gender_data').innerHTML = "Female"
            var female = 1
            var male = 0
            break;
        }
        case (document.querySelector('#Check2').required == false): {
            document.querySelector('#gender_data').innerHTML = "Male"
            var female = 0
            var male = 1
            break;
        }
        default: {
            break;
        }
    }
    //water//liters
    var liters = parseFloat(weight * 0.035).toFixed(1)
    document.querySelector('#liters').innerHTML = liters + " L"
    //water//bottles
    var bottles = parseInt(liters / 0.5)
    document.querySelector('#bottles').innerHTML = bottles
    //water//cups
	var cups = parseInt(liters / 0.31)
    document.querySelector('#cups').innerHTML = cups
    //IMC
    var imc = (weight / ((height / 100) * (height / 100)) ).toFixed(1)
    document.querySelector('#imc').innerHTML = imc + " kg/m²"
    //ideal weight
    var idealWeightM = ( height - 100) * 0.90
    var idealWeightF = ( height - 100) * 0.85
    switch (true) {
        case (document.querySelector('#Check1').required == true): {
            document.querySelector('#ideal_weight').innerHTML = idealWeightM.toFixed(1) + " kg"
            break;
        }
        case (document.querySelector('#Check1').required == false): {
            document.querySelector('#ideal_weight').innerHTML = idealWeightF.toFixed(1) + " kg"
            break;
        }
        default: {
            break;
        }
    }
    //resume
    switch (true) {
        //<18 male
        case (age < 18 && male == 1): {
            switch (true) {
                case (imc < 16.5) : {
                    document.querySelector('#final_result').innerHTML = "Low weight"
                    break;
                }
                case (imc < 22.5) : {
                    document.querySelector('#final_result').innerHTML = "Normal weight"
                    break;
                }
                case (imc < 27) : {
                    document.querySelector('#final_result').innerHTML = "Overweight"
                    break;
                }
                case (imc >= 27) : {
                    document.querySelector('#final_result').innerHTML = "Obesity"
                    break;
                }
                default: {
                    break;
                }
            } 
            break;
        }
        //<18 female
        case (age < 18 && female == 1): {
            switch (true) {
                case (imc < 16.2) : {
                    document.querySelector('#final_result').innerHTML = "Low weight"
                    break;
                }
                case (imc < 22.4) : {
                    document.querySelector('#final_result').innerHTML = "Normal weight"
                    break;
                }
                case (imc < 27.2) : {
                    document.querySelector('#final_result').innerHTML = "Overweight"
                    break;
                }
                case (imc >= 27.2) : {
                    document.querySelector('#final_result').innerHTML = "Obesity"
                    break;
                }
                default: {
                    break;
                }
            } 
            break;
        }
        //>18
        case (age >=18 ): {
            switch (true) {
                case (imc < 16) : {
                    document.querySelector('#final_result').innerHTML = "very serious low weight"
                    break;
                }
                case (imc <= 16.99) : {
                    document.querySelector('#final_result').innerHTML = "severe low weight"
                    break;
                }
                case (imc <= 18.49) : {
                    document.querySelector('#final_result').innerHTML = "Low weight"
                    break;
                }
                case (imc <= 24.99) : {
                    document.querySelector('#final_result').innerHTML = "Normal weight"
                    break;
                }
                case (imc <= 29.99) : {
                    document.querySelector('#final_result').innerHTML = "Overweight"
                    break;
                }
                case (imc <= 34.99) : {
                    document.querySelector('#final_result').innerHTML = "Grade I obesity"
                    break;
                }
                case (imc <= 39.99) : {
                    document.querySelector('#final_result').innerHTML = "Grade II obesity"
                    break;
                }
                case (imc > 40) : {
                    document.querySelector('#final_result').innerHTML = "Grade III obesity"
                    break;
                }
                default: {
                    break;
                }
            } 
            break;
        }
        //>65 female
        case (age > 65 && female == 1): {
            switch (true) {
                case (imc < 21.9) : {
                    document.querySelector('#final_result').innerHTML = "Low weight"
                    break;
                }
                case (imc <= 27) : {
                    document.querySelector('#final_result').innerHTML = "Normal weight"
                    break;
                }
                case (imc <= 32) : {
                    document.querySelector('#final_result').innerHTML = "Overweight"
                    break;
                }
                case (imc <= 37) : {
                    document.querySelector('#final_result').innerHTML = "Grade I obesity"
                    break;
                }
                case (imc <= 41.9) : {
                    document.querySelector('#final_result').innerHTML = "Grade II obesity"
                    break;
                }
                case (imc > 42) : {
                    document.querySelector('#final_result').innerHTML = "Grade III obesity"
                    break;
                }
                default: {
                    break;
                }
            } 
            break;
        }
        //>65 male
        case (age > 65 && male == 1): {
            switch (true) {
                case (imc < 21.9) : {
                    document.querySelector('#final_result').innerHTML = "Low weight"
                    break;
                }
                case (imc <= 27) : {
                    document.querySelector('#final_result').innerHTML = "Normal weight"
                    break;
                }
                case (imc <= 30) : {
                    document.querySelector('#final_result').innerHTML = "Overweight"
                    break;
                }
                case (imc <= 35) : {
                    document.querySelector('#final_result').innerHTML = "Grade I obesity"
                    break;
                }
                case (imc <= 39.9) : {
                    document.querySelector('#final_result').innerHTML = "Grade II obesity"
                    break;
                }
                case (imc > 40) : {
                    document.querySelector('#final_result').innerHTML = "Grade III obesity"
                    break;
                }
                default: {
                    break;
                }
            } 
            break;
        }
        default: {
            break;
        }
    }
}
