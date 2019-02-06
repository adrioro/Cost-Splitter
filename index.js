function tipFunction() {
    var myBill = document.getElementById("bill").value;
    var myTip = document.getElementById("tip").value;
    var myPeople = document.getElementById("people").value;
    var tipNumb = ((myBill / 100) * myTip) / myPeople; //Tip per person.
    document.getElementById("tip-per-person").innerHTML = tipNumb;
    //document.getElementById("tip-per-person").innerHTML = "hello";
};