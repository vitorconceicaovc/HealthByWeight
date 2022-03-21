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
            document.querySelector('#gender_data').innerHTML = "F"
            break;
        }
        case (document.querySelector('#Check2').required == false): {
            document.querySelector('#gender_data').innerHTML = "M"
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


}
