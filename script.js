function blurfn1(){
    var x = document.getElementById("Name");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }
} 

function blurfn2(){
    var x = document.getElementById("Username");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }
} 

function blurfn3(){
    var x = document.getElementById("Password");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }
} 

function blurfn4(){
    var x = document.getElementById("Email");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }
} 

function blurfn5(){
    var x = document.getElementById("Address");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }
} 

function blurfn6(){
    var x = document.getElementById("Gender");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }
} 

function blurfn7(){
    var x = document.getElementById("Interests");
    if (x.value == "")
    {
        x.style.border = "2px solid red";
    }
} 

function focfn11(){
    document.getElementById("Name").style.border = "2px solid green";
}

function focfn22(){
    document.getElementById("Username").style.border = "2px solid green";
}

function focfn33(){
    document.getElementById("Password").style.border = "2px solid green";
}

function focfn44(){
    document.getElementById("Email").style.border = "2px solid green";
}

function focfn55(){
    document.getElementById("Address").style.border = "2px solid green";
}

function focfn66(){
    document.getElementById("Gender").style.border = "2px solid green";
}

function focfn77(){
    document.getElementById("Interests").style.border = "2px solid green";
}


function clearinfo(){
    document.getElementById(submitform).innerHTML = "";
}

function inputform(){
    var login = document.querySelectorAll("input, select, textarea");
    var info = document.getElementById("submitform");

    event.preventDefault();

    for (var x=0; x<login.length; x++){
        info.innerHTML = info.innerHTML + login[x].name + ": " + login[x].value + "<br>";
    }
}