//Removes "0" value from input field before user enters input.
function removeZeroInputBillFunction() {
    document.getElementById("bill").value = "";
    $("#bill").clickout;
};

function removeZeroInputTipFunction() {
    document.getElementById("tip").value = "";
};

function removeZeroInputPeopleFunction() {
    document.getElementById("people").value = "";
};
//Main function: "costFunction()"
function costFunction() { //Getting the input values.
    var myBill = document.getElementById("bill").value;
    var myTip = document.getElementById("tip").value;
    var myPeople = document.getElementById("people").value;
    var array = [myBill, myTip, myPeople];

    function resultsFunction() { //Display results.
        var tipPercentage = ((myBill / 100) * myTip)
        //Tip per person.
        var tipNumb = tipPercentage / myPeople;
        document.getElementById("tip-per-person").innerHTML = Math.round(tipNumb) + " $";

        //Total per person.
        var totalNumb = (myBill / myPeople) + tipNumb;
        document.getElementById("total-per-person").innerHTML = Math.round(totalNumb) + " $";
    };

    array.forEach(function (element) { //Display "0 $" unless all fields are filled.

        array[2] > 0 ? resultsFunction() : (document.getElementById("tip-per-person").innerHTML) = "0 $";
    });
};