document.getElementById("Calculate-btn").addEventListener("click", function () {

    const food = document.getElementById("food-cost").value;
    const rent = document.getElementById("rent-cost").value;
    const Clothes = document.getElementById("Clothes-cost").value;



    const total = parseFloat(food) + parseFloat(rent) + parseFloat(Clothes)


    let expenses = document.getElementById("total-expenses")
    expenses.innerText = total

    const income = document.getElementById("income").value;
    const balance = document.getElementById("balance")
    balance.innerText = income - total



})