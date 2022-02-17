document.getElementById("Calculate-btn").addEventListener("click", function () {



    const food = document.getElementById("food-cost").value;
    const rent = document.getElementById("rent-cost").value;
    const clothes = document.getElementById("clothes-cost").value;

    if (!isNaN(food) && !isNaN(rent) && !isNaN(clothes) && food > 0 && rent > 0 && clothes > 0) {

        const total = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);

        document.getElementById("total-expenses").innerText = total;
        const income = document.getElementById("income").value;
        const balance = document.getElementById("balance").innerText = income - total;
        balance = "";
    }



    else {
        alert("Enter Type Number or Possitive Number")

    }




})