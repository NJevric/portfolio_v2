window.onload=function(){
  loadAnimacija();

}

window.onscroll = function(){
    scrollAnimacija();
}

let scrollAnimacija = () => {

    let scroll = window.scrollY;
  
    try{
  
      let objCircleNav = {
        klasa : "active",
        home : "home",
        about : "aboutt",
        work : "workk",
        contact : "contactt",
        // arrow : "arrow",
       
      };
  
      let scrollNav = () => {
        if(scroll>50){
    
        }
      }
      // let scrollArrow = () => {
  
      //   let domArrow =  document.getElementById(objCircleNav.arrow);
    
      //   if(scroll>150){
      //     domArrow = domArrow.style.display='block';
      //   }
      //   else{
      //     domArrow =  domArrow.style.display='none';
      //   }
      //   return domArrow;
      // }
      let scrollPageNav = () => {
        
        const bodyHeight = () => {
          const body = document.body,
          html = document.documentElement;
      
          const height = Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight );
          
          return height;
        }
        
        if(scroll< (bodyHeight()*0.25) ){
          $(`#${objCircleNav.home}`).addClass(objCircleNav.klasa);
          $(`#${objCircleNav.about}`).removeClass(objCircleNav.klasa);
        }
        if(scroll < (bodyHeight()*0.5) && scroll >= (bodyHeight()*0.25) ){
          $(`#${objCircleNav.home}`).removeClass(objCircleNav.klasa);
          $(`#${objCircleNav.about}`).addClass(objCircleNav.klasa);
          $(`#${objCircleNav.work}`).removeClass(objCircleNav.klasa);
        }
        if(scroll < (bodyHeight()*0.75) && scroll >= (bodyHeight()*0.5)){
          $(`#${objCircleNav.about}`).removeClass(objCircleNav.klasa);
          $(`#${objCircleNav.work}`).addClass(objCircleNav.klasa);
          $(`#${objCircleNav.contact}`).removeClass(objCircleNav.klasa);
        }
        if(scroll < bodyHeight() && scroll >= (bodyHeight()*0.75)){
          $(`#${objCircleNav.work}`).removeClass(objCircleNav.klasa);
          $(`#${objCircleNav.contact}`).addClass(objCircleNav.klasa);
        }
      }

      scrollNav();
      // scrollArrow();
      scrollPageNav();
    }
    catch(err){
      console.log(err);
    }
  }


let loadAnimacija = function(){
  
  try{
    
    let objLoadAnimacija = {
      cssProperty : 'visible',
      page: 'page',
      social: 'social',
      header: 'header',
      main: 'main',
      footer: 'footer',
     
    }

    // pronadji path za stroke-dasharray
    const load = document.querySelectorAll('#loadSvg path');
    console.log(load);
    for(let i of load){
      console.log(`Path ${i} is ${i.getTotalLength()}`);
    }

    // JS load animation
    setTimeout(function(){

      document.getElementById('loadSvg').classList.remove('load');
      document.getElementById(objLoadAnimacija.social).style.visibility = objLoadAnimacija.cssProperty;
      document.getElementById(objLoadAnimacija.page).style.visibility = objLoadAnimacija.cssProperty;
      document.getElementById(objLoadAnimacija.header).style.visibility = objLoadAnimacija.cssProperty;
      document.getElementById(objLoadAnimacija.main).style.visibility = objLoadAnimacija.cssProperty;
     
      document.getElementById(objLoadAnimacija.main).style.visibility = objLoadAnimacija.cssProperty;  
      document.getElementById(objLoadAnimacija.footer).style.visibility = objLoadAnimacija.cssProperty;  
      document.getElementById('load').style.display = 'none';  

    },3200);
  }

  catch(err){
    console.log(err);
  }
  
}

//Nav

