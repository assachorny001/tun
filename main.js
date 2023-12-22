let header = document.querySelector("header");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if(btn.innerHTML == "Tun") {
        btn.innerHTML = "Kun"
        header.classList.add("tun");
        header.classList.remove("kun");
    } else {
        btn.innerHTML = "Tun";
        header.classList.add("kun");
        header.classList.remove("tun");
    }
    
});