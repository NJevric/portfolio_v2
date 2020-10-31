window.onload=function(){

  // div circle nav

  let objCircleNav = {
    klasa : "active",
    home : "home",
    about : "aboutt",
    work : "workk",
    contact : "contactt",
    arrow : "arrow"
  };
  
 
  window.addEventListener('scroll',function(){

    let scroll = window.scrollY;
    
    let scrollNav = () => {
      if(scroll>50){

      }
    }

    let scrollArrow = () => {

      let domArrow =  document.getElementById(objCircleNav.arrow);

      if(scroll>150){
        domArrow = domArrow.style.display='block';
      }
      else{
        domArrow =  domArrow.style.display='none';
      }
      return domArrow;
    }
    
    let scrollPageNav = () => {
      if(scroll<900){
        $(`#${objCircleNav.home}`).addClass(objCircleNav.klasa);
        $(`#${objCircleNav.about}`).removeClass(objCircleNav.klasa);
      }
      if(scroll<1800 && scroll >= 900){
        $(`#${objCircleNav.home}`).removeClass(objCircleNav.klasa);
        $(`#${objCircleNav.about}`).addClass(objCircleNav.klasa);
        $(`#${objCircleNav.work}`).removeClass(objCircleNav.klasa);
      }
      if(scroll<2700 && scroll >= 1800){
        $(`#${objCircleNav.about}`).removeClass(objCircleNav.klasa);
        $(`#${objCircleNav.work}`).addClass(objCircleNav.klasa);
        $(`#${objCircleNav.contact}`).removeClass(objCircleNav.klasa);
      }
      if(scroll<3600 && scroll >= 2700){
        $(`#${objCircleNav.work}`).removeClass(objCircleNav.klasa);
        $(`#${objCircleNav.contact}`).addClass(objCircleNav.klasa);
      }
    }
   
    scrollPageNav();
    scrollArrow();
  })
//   $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if(scroll<900){
//       $(`#${objCircleNav.idHome}`).addClass(objCircleNav.klasa);
//       $(`#${objCircleNav.idAbout}`).removeClass(objCircleNav.klasa);
//     }
//     if(scroll<1800 && scroll >= 900){
//       $(`#${objCircleNav.idHome}`).removeClass(objCircleNav.klasa);
//       $(`#${objCircleNav.idAbout}`).addClass(objCircleNav.klasa);
//       $(`#${objCircleNav.idWork}`).removeClass(objCircleNav.klasa);
//     }
//     if(scroll<2700 && scroll >= 1800){
//       $(`#${objCircleNav.idAbout}`).removeClass(objCircleNav.klasa);
//       $(`#${objCircleNav.idWork}`).addClass(objCircleNav.klasa);
//       $(`#${objCircleNav.idContact}`).removeClass(objCircleNav.klasa);
//     }
//     if(scroll<3600 && scroll >= 2700){
//       $(`#${objCircleNav.idWork}`).removeClass(objCircleNav.klasa);
//       $(`#${objCircleNav.idContact}`).addClass(objCircleNav.klasa);
//     }
    
// });


  //end div circle nav
  
}

    
    

