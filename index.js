//Main function: "costFunction()"
function costFunction() { //Getting the input values.
    var myBill = document.getElementById("bill").value;
    var myTip = document.getElementById("tip").value;
    var myPeople = document.getElementById("people").value;
    var array = [myBill, myTip, myPeople];

    function resultsFunction() {
        //Tip per person.
        var tipNumb = ((myBill / 100) * myTip) / myPeople;
        document.getElementById("tip-per-person").innerHTML = tipNumb + " $";
        //Total per person.
        var totalNumb = (myBill / myPeople) + tipNumb;
        document.getElementById("total-per-person").innerHTML = (totalNumb + " $")
    };

    array.forEach(function (element) {

        array[2] > 0 ? resultsFunction() : (document.getElementById("tip-per-person").innerHTML) = "0 $";
    });
};