const mySidenav = document.querySelector("#mySidenav");
const openPoint = document.querySelector("#open");
const closePoint = document.querySelector("#close");
const main = document.querySelector("#main");
const openspan = document.querySelectorAll(".openspan");
const panel = document.querySelectorAll(".panel");
const acc = document.querySelectorAll(".accordion");
const rowCols4 = document.querySelector(".row-cols-4");
 
const mouseenter = () => {
  mySidenav.addEventListener("mouseenter", () => {
    mySidenav.style.width = "250px";

    if(openPoint.style.display === "") {
      openPoint.style.display = "inline";
    }

    openPoint.style.cursor = "pointer";
    openspan.forEach(item => {
      item.style.display = "inline";
    });

  });

}

const mouseleave = () => {

  const listLi = document.querySelectorAll(".list-li");

  
  mySidenav.style.width = "72px";
  main.style.marginLeft = "72px";
  closePoint.style.display = "";
  openPoint.style.display = "";

  openspan.forEach(item => {
    item.style.display = "none";
  });
  panel.forEach(item => {
    item.style.display = "none";
  });

  acc.forEach(button => {
    button.style.backgroundColor = "";
    button.style.color = "#444444";
  })

  listLi.forEach(list => {
    list.style.color = "#444444";
  });
}


let exists = false;
acc.forEach(item => {
    item.addEventListener("click", () => {
      let sibling = item.nextElementSibling;
      if (sibling.style.display === "block") {
        sibling.style.display = "none";
        exists = false;
        algo(exists);
      } else {
        sibling.style.display = "block";
        exists = true;
        algo(exists);
      }
    });
  }
);

const algo = (exists) => {
  if (exists) {
    const listLi = document.querySelectorAll(".list-li");

    listLi.forEach(list => {
      list.addEventListener("click", () => {
        if(list.style.backgroundColor == ""){
          listLi.forEach(item => {
            if ( item.style.color === "rgb(146, 137, 243)") {
              item.style.color = "rgb(68, 68, 68)"
            }
          });
          list.style.color = "rgb(146, 137, 243)"
        }
      });
    });
  }
}

acc.forEach((button) => {
    button.addEventListener("click", () => {
      if(button.style.backgroundColor == ""){
         button.style.backgroundColor = "#9289f3";
         button.style.color = "#ffffff";
      } else {
        button.style.backgroundColor = "";
        button.style.color = "#444444";
      }
    });
});

mouseenter();

openPoint.addEventListener("click", () => {

    mySidenav.style.width = "250px";
    main.style.marginLeft = "250px";
    closePoint.style.display = "inline";
    closePoint.style.cursor = "pointer";
    openPoint.style.display = "none";
});

closePoint.addEventListener("click", () => {

  mySidenav.style.width = "72px";
  main.style.marginLeft = "72px";
  closePoint.style.display = "";
  openPoint.style.display = "";

  openspan.forEach(item => {
    item.style.display = "none";
  });
  panel.forEach(item => {
    item.style.display = "none";
  });

});

main.addEventListener("mouseenter", () => {
  if((closePoint.style.display == "")){
    mouseleave();
  } 
});
