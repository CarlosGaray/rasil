let listproductos = document.querySelector("#listproductos");
let listservicios = document.querySelector("#listservicios");
let listdestacados = document.querySelector("#listdestacados");
let listproyectos = document.querySelector("#listproyectos");

fetch("./json/sidenavlist.json")
.then(response => response.json())
.then(data => {
    
    data[0].productos.forEach(listItem0 => {
              
        listproductos.insertAdjacentHTML("beforeend", `
            <li class="list-li">
                <div class="partlist">
                <i class="bi bi-record"></i><span class="openpoint">${listItem0}</span>
                </div>
            </li>
        `);
    });

    data[1].servicios.forEach(listItem1 => {
        
        listservicios.insertAdjacentHTML("beforeend", `
            <li class="list-li">
                <div class="partlist">
                <i class="bi bi-record"></i><span class="openpoint">${listItem1}</span>
                </div>
            </li>
        `);
    });

    data[2].destacados.forEach(listItem2 => {
        
        listdestacados.insertAdjacentHTML("beforeend", `
            <li class="list-li">
                <div class="partlist">
                <i class="bi bi-record"></i><span class="openpoint">${listItem2}</span>
                </div>
            </li>
        `);
    });

    data[3].proyectos.forEach(listItem3 => {
        
        listproyectos.insertAdjacentHTML("beforeend", `
            <li class="list-li">
                <div class="partlist">
                <i class="bi bi-record"></i><span class="openpoint">${listItem3}</span>
                </div>
            </li>
        `);
    });
});





