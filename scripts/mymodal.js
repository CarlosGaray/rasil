let mymodalimg = document.querySelectorAll(".myModalImg");

mymodalimg.forEach((modal) => {
    modal.addEventListener("click", () => {
        let pecommerce = modal.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[1].textContent;
        let img = modal.parentElement.childNodes[1].getAttribute("src");
        let title = modal.parentElement.childNodes[3].childNodes[1].textContent;
        let description = modal.parentElement.childNodes[3].childNodes[3].textContent;
        let price = modal.parentElement.childNodes[3].childNodes[5].childNodes[1].childNodes[1].childNodes[1].textContent;
        myModal(pecommerce,img, title, description, price);
    });
});

let mymodaltitle = document.querySelectorAll(".myModalTitle");

mymodaltitle.forEach((modal) => {
    modal.addEventListener("click", () => {
        let pecommerce = modal.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[1].textContent;
        let img = modal.parentElement.parentElement.childNodes[1].getAttribute("src");
        let title = modal.parentElement.parentElement.childNodes[3].childNodes[1].textContent;
        let description = modal.parentElement.parentElement.childNodes[3].childNodes[3].textContent;
        let price = modal.parentElement.parentElement.childNodes[3].childNodes[5].childNodes[1].childNodes[1].childNodes[1].textContent;
        myModal(pecommerce, img, title, description, price);
    });
});

const myModal = (pecommerce, img, title, description, price) => {
    let modal = document.querySelector("#myModalView");
    const mySidenav = document.querySelector("#mySidenav");

    mySidenav.style.display = "none";

    let html = document.querySelector("html");
    html.style.overflow = "hidden";

    modal.innerHTML = `
    
        <div class="modal-content">
            <div class="modal-header">
                <h2>${pecommerce}</h2>
                <span class="close">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-article">
                    <img src="${img}" alt="...">
                </div>
                <div class="modal-aside">
                    <p class="title">${title}</p>
                    <p class="price">S/.<span>${price}</span></p>
                    <p>${description}</p>
                    <a href="#" class="btn btn-success to-buy"><i class="bi bi-whatsapp"></i><span class="ms-2">Comprar</span></a>
                </div>
            </div>
            <div class="modal-footer">
                <h3>Rasil E.I.R.L</h3>
            </div>
        </div>

    `

    let span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
        html.style.overflow = "auto";
        mySidenav.style.display = "block";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }

}