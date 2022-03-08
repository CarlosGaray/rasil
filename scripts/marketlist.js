fetch("./json/marketlist.json")
.then(response => response.json())
.then(data => {

    let mouseaccordion = document.querySelectorAll(".mouseaccordion");

    mouseaccordion.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            let nameSelect;
            let listLi = document.querySelectorAll(".list-li");
            
            nameSelect = button.childNodes[1].textContent.toLowerCase();
            
            let selectItemSidenav = data[`${nameSelect}`];

            listLi.forEach((item) => {
                item.addEventListener("click", () =>{
                    try {
                        let mt3 = document.querySelectorAll(".mt-3");
                        let pecommerce = document.querySelector(".p-ecommerce");
                        
                        pecommerce.textContent = `Categoría: ${nameSelect[0].toUpperCase()}${nameSelect.substring(1).toLowerCase()}`;

                        let nameSelectItem = item.childNodes[1].childNodes[2].textContent;
                        let arrayItem = selectItemSidenav[`${nameSelectItem}`];
                        
                        mt3.forEach((itemmt3) => {
                            itemmt3.style.display = "none";
                        });
                        
                        let responsive = document.querySelector(".responsive");
                        arrayItem.forEach((append) => {
                            responsive.insertAdjacentHTML("beforeend", `

                                <div class="mt-3">
                                    <div class="card border-0 shadow" style="width: 16rem;">
                                        <img src="${append.img_product}" class="card-img-top myModalImg" alt="...">
                                        <div class="card-body">
                                            <h6 class="card-title fw-bold myModalTitle">${append.name_product}</h6>
                                            <p class="card-text">${append.desc_product}</p>
                                            <div class="text-end row">
                                                <div class="col-5 mt-1">
                                                    <a class="text-decoration-none ">S/.<span class="ms-1">${append.prec_product}</span></a>
                                                </div>
                                                <div class="col-7">
                                                    <a href="https://api.whatsapp.com/send?phone=+51991329681&text=¡Hola%20Rasil,%20solicito%20información!" class="btn btn-success"><i class="bi bi-whatsapp"></i><span class="ms-2">Comprar</span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            `);
                        } );

                        let mymodalimg = document.querySelectorAll(".myModalImg");

                        mymodalimg.forEach((modal) => {
                            modal.addEventListener("click", () => {
                                let pecommerce = modal.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[1].textContent;
                                let img = modal.parentElement.childNodes[1].getAttribute("src");
                                let title = modal.parentElement.childNodes[3].childNodes[1].textContent;
                                let description = modal.parentElement.childNodes[3].childNodes[3].textContent;
                                let price = modal.parentElement.childNodes[3].childNodes[5].childNodes[1].childNodes[1].childNodes[1].textContent;
                                myModal(pecommerce, img, title, description, price);                 
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
                                            <p class="price">S/.<span class="ms-1">${price}</span></p>
                                            <p>${description}</p>
                                            <a href="https://api.whatsapp.com/send?phone=+51991329681&text=¡Hola%20Rasil,%20solicito%20información!" class="btn btn-success to-buy"><i class="bi bi-whatsapp"></i><span class="ms-2">Comprar</span></a>
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

                    } catch (error) {
                        console.error;
                    }
                });
            });
        });
    });

});