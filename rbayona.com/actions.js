var resume = document.getElementById("resume");


function resFunct(){
    document.getElementById("resume").style.textAlign = 'right';

};

topButton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

let toggleNavStaus = false;

let toggleNav = function() {
  let getSidebar = document.querySelector(".sideBar");
  let getSidebarUl = document.querySelector(".asideLinks");
  let getSideLinks = document.querySelectorAll(".asideLinks a");

  if (toggleNavStaus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "50%";
    getSidebarUl.style.opacity = "1";

    let arrayLength = getSideLinks.length;
    for(let i = 0; i < arrayLength; i++){
      getSideLinks[i].style.opacity = "1";
    }

    toggleNavStaus = true;

  }


  else if (toggleNavStaus === true) {
    getSidebar.style.width = "0%";
    getSidebarUl.style.opacity = "0";

    let arrayLength = getSideLinks.length;
    for(let i = 0; i < arrayLength; i++){
      getSideLinks[i].style.opacity = "0";
    }

    getSidebarUl.style.visibility = "hidden";

    toggleNavStaus = false;
  }



};

