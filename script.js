let select = document.getElementById("value");
let valute = document.getElementById("KZT");
let value = document.getElementById("numbers");
let kzt = document.getElementById("KZTvalue");
let usd = document.getElementById("USDvalue");
let eur = document.getElementById("EURvalue");
let a = 0;
let b = 0;
select.addEventListener("dblclick", function (event) {  // отловка событий
    event.preventDefault();
    if (select.value == 2) {// тенге
        a = value.value;
        b = value.value;
        a = a / 431; //продажа
        b = b / 509; // продажка
        a = Math.floor(a);
        a = a.toFixed(2);
        b = b.toFixed(3);
        usd.innerHTML = `${a}`;
        eur.innerHTML = `${b}`;
        kzt.innerHTML = "-";
    }
    else if (select.value == 3) { // евро
        b = value.value;
        b = b * 507; //покупка
        a = b / 431; //продажа
        a = a.toFixed(2);
        b = b.toFixed(2);
        kzt.innerHTML = `${b}`;
        usd.innerHTML = `${a}`;
        eur.innerHTML = "-";
    }
    else if (select.value == 1) { // доллар
        a = value.value;
        b = value.value;
        a = a * 429; //покупка
        b = a / 509; //продажа
        b = b.toFixed(2);
        a = a.toFixed(2);
        kzt.innerHTML = `${a}`;
        eur.innerHTML = `${b}`;
        usd.innerHTML = "-";
    }
});