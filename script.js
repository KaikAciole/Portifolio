function eventCard1Over(){
    let x = document.getElementById("img-card-1");
    let y = document.getElementById("text-card-1"); 
    x.style.display = "none"
    y.style.display = "block"
}

function eventCard1Out(){
    let x = document.getElementById("img-card-1");
    let y = document.getElementById("text-card-1"); 
    x.style.display = "flex";
    y.style.display = "none";
}

function eventCard2Over(){
    let x = document.getElementById("img-card-2");   
    let y = document.getElementById("text-card-2");
    x.style.display = "none";
    y.style.display = "block";
}

function eventCard2Out(){
    let x = document.getElementById("img-card-2");
    let y = document.getElementById("text-card-2");
    x.style.display = "flex";
    y.style.display = "none";
}

function eventCard3Over(){
    let x = document.getElementById("img-card-3");
    let y = document.getElementById("text-card-3");
    x.style.display = "none";
    y.style.display = "block"
}

function eventCard3Out(){
    let x = document.getElementById("img-card-3");
    let y = document.getElementById("text-card-3");
    x.style.display = "flex";
    y.style.display = "none";
}

function eventCard4Over(){
    let x = document.getElementById("img-card-4");
    let y = document.getElementById("text-card-4");
    x.style.display = "none";
    y.style.display = "block";
}

function eventCard4Out(){
    let x = document.getElementById("img-card-4");
    let y = document.getElementById("text-card-4");
    x.style.display = "flex";
    y.style.display = "none";
}

function eventLink(){
    let x = document.getElementById("curriculo");
    x.style.color = "gray";
}

function eventVerMais(){
    let x = document.getElementsByClassName("unview");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    btn1.style.display = "none";
    btn2.style.display = "flex"
    for(let item of x){
        item.style.display = "flex"
    }
}

function eventSee(){
    let x = document.getElementsByClassName("nVer");

    let y = document.getElementById("buttom1");
    let z = document.getElementById("buttom2");
    y.style.display = "none";
    z.style.display = "flex";

    for(let item of x){
        item.style.display = "flex"
    }
}

function eventVerMenos(){
    let x = document.getElementsByClassName("unview");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    btn1.style.display = "flex";
    btn2.style.display = "none"
    for(let item of x){
        item.style.display = "none"
    }
}

function eventNoSee(){
    let x = document.getElementsByClassName("nVer");

    let y = document.getElementById("buttom1");
    let z = document.getElementById("buttom2");
    y.style.display = "flex";
    z.style.display = "none";

    for(let item of x){
        item.style.display = "none"
    }
}

function eventChecked2(){
    let x = document.getElementById("l2");
    x.style.backgroundColor = "white";
}