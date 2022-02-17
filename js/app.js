document.getElementById("Calculate-btn").addEventListener("click", function () {



    const food = document.getElementById("food-cost").value;
    const rent = document.getElementById("rent-cost").value;
    const clothes = document.getElementById("clothes-cost").value;

    if (!isNaN(food) && !isNaN(rent) && !isNaN(clothes) && food > 0 && rent > 0 && clothes > 0) {

        const total = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);

        document.getElementById("total-expenses").innerText = total;
        const income = document.getElementById("income").value;
        const balance = document.getElementById("balance").innerText = income - total;

    }

    else {
        alert("Enter Type Number or Possitive Number")

    }


})
//   bounus part................................................................

document.getElementById("save-btn").addEventListener("click", function () {




    const income = document.getElementById("income").value;
    const saveInput = document.getElementById("save-input").value;

    const savingAmount = (income * saveInput) / 100;
    const saveTotal = document.getElementById("saving-amount").innerText = savingAmount

    const balance = document.getElementById("balance").innerText;

    const remainingBalance = document.getElementById("remaining-balance").innerText = parseFloat(balance) - parseFloat(saveTotal);









})



