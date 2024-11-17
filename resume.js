let address = document.querySelector("#b1");
let address2 = document.querySelector("#b2");
let address3 = document.querySelector("#b3");
let addressVisible=false;
let visible=false;
let visibles=false;
address.addEventListener("click",function(){
    if(addressVisible){
        address.innerText="Click for Address";
        address.style.color= "white";
        address.style.backgroundColor= "#4CAF50";
    }
    else{
        address.innerText ="Pehowa,Kurukshetra";
         address.style.color= "yellow";
         address.style.backgroundColor= "#f44336";
    }
addressVisible = ! addressVisible;
}
);

address2.addEventListener("click",function(){
    if(visible){
        address2.innerText="Click for Mail";
        address2.style.color= "white";
        address2.style.backgroundColor= "#4CAF50";
    }
    else{
        address2.innerText ="jasreen033@gmail.com";
         address2.style.color= "yellow";
         address2.style.backgroundColor= "#f44336";
    }
visible = ! visible;
}
);

address3.addEventListener("click",function(){
    if(visibles){
        address3.innerText="Click for Number";
        address3.style.color= "white";
        address3.style.backgroundColor= "#4CAF50";
    }
    else{
        address3.innerText ="74968-49239";
         address3.style.color= "yellow";
         address3.style.backgroundColor= "#f44336";
    }
visibles = ! visibles;
}
);