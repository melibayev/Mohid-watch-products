function openNavbar() {
    // document.getElementById("navbar-responsive").style.left = "0";
    document.getElementById("navbar-responsive").style.bottom = "0";
  }
  function closeNavbar() {
    // document.getElementById("navbar-responsive").style.left = "-100%";
    document.getElementById("navbar-responsive").style.bottom = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})