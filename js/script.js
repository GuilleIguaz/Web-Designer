

function displayInitial(){
    // aparece main
    document.getElementById("callMain").style = "display: flex; flex-direction: column";
    //aparece contenedor 
    document.getElementById("callBigger").style = "display: block"; 
    // aparece footer
    document.getElementById("greenfoot").style = "display: flex";
    // aparece menu burguer
    document.getElementById("burguer").className = "visiblenav";
    // aparecen RRSS
    document.getElementById("side").className = "visible";

    document.getElementById("side2").className = "visible";

    document.getElementById("side3").className = "visible";

    document.getElementById("pic").className = "visiblepic";
  } 

  function showArrow(){
    document.getElementById("downarrow").style = "transform: translate(0, 25px); opacity: 1; z-index:1; transition: all 2s;";
  }

  function showArrowUp(){
    document.getElementById("downarrowup").style = "transform: translate(0, -45px); opacity: 1; z-index:1; transition: all 2s;";
  }

  function hideArrow(){
    document.getElementById("downarrow").style = "opacity: 0;";
    document.getElementById("downarrowup").style = "opacity: 0;";
  }
  // se repite función para el mismo elemento en diferente página
  function hideArrow2(){
    document.getElementById("downarrowup").style = "opacity: 0;";
  }

  function hideTel(){
    document.getElementById("uptel").style = "opacity: 0;";
  }

  function showTel(){
    document.getElementById("uptel").style = "transform: translate(0, -45px); opacity: 1; z-index:1; transition: all 2s;";
  }

  function hideMenu(){
    document.getElementById("links").className = "nav-links";
  }
  // menu https://www.youtube.com/watch?v=H4MkGzoACpQ
  const hamburguer = document.querySelector(".hamburguer");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

hamburguer.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});





  



  
  