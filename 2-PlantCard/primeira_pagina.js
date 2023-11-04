document.addEventListener("DOMContentLoaded", function () {
    
    const buttonArrow = document.getElementById("button_arrow");
    const buttonX = document.getElementById("button_x");
    const conteudo = document.querySelector(".menus");
    const buttonSetaImage = document.querySelector(".button_seta");
    const buttonSairImage = document.querySelector(".button_sair");


    buttonArrow.addEventListener("click", function () {
        conteudo.style.display = "block";
        buttonSetaImage.src = "ShareX.png";
        buttonX.style.display = "block";
        buttonArrow.style.display = "none";
    });

    buttonX.addEventListener("click", function () {
        conteudo.style.display = "none";
        buttonSetaImage.src = "share.png";
        buttonArrow.style.display = "block";
        buttonX.style.display = "none";
    });
})

