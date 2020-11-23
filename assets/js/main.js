window.onload=function(){
  // document.querySelector('.navIco').style.color='#fff';
  // document.querySelector('#social a').style.color='#fff';
  loadAnimacija();
  navigacija();

  // VANTA.HALO({
  //   el: "#work",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: true,
  //   minHeight: 200.00,
  //   minWidth: 200.00,
  //   amplitudeFactor: 0.70,
  //   xOffset: -0.3,
  //   yOffset: -0.2,
  //   size: .9
   
  // })

  //   VANTA.HALO({
  //   el: "#header",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: true,
  //   minHeight: 200.00,
  //   minWidth: 200.00,
  //   amplitudeFactor: 0.70,
  //   xOffset: 0.1,
  //   yOffset: -0.1,
  //   size: 0.75
  // })
  VANTA.NET({
    el: "#header",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    points: 9.00,
    spacing: 12.00
  
  });
  VANTA.NET({
    el: "#work",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  });
  // VANTA.NET({
  //   el: "#tekst",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: false,
  //   minHeight: 200.00,
  //   minWidth: 200.00,
  //   scale: 1.00,
  //   scaleMobile: 1.00
  // });
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
        
        if(scroll< (bodyHeight()*0.23) ){
          $(`#${objCircleNav.home}`).addClass(objCircleNav.klasa);
          $(`#${objCircleNav.about}`).removeClass(objCircleNav.klasa);
        }
        if(scroll < (bodyHeight()*0.47) && scroll >= (bodyHeight()*0.23) ){
          $(`#${objCircleNav.home}`).removeClass(objCircleNav.klasa);
          $(`#${objCircleNav.about}`).addClass(objCircleNav.klasa);
          $(`#${objCircleNav.work}`).removeClass(objCircleNav.klasa);
        }
        if(scroll < (bodyHeight()*0.73) && scroll >= (bodyHeight()*0.47)){
          $(`#${objCircleNav.about}`).removeClass(objCircleNav.klasa);
          $(`#${objCircleNav.work}`).addClass(objCircleNav.klasa);
          $(`#${objCircleNav.contact}`).removeClass(objCircleNav.klasa);
        }
        if(scroll < bodyHeight() && scroll >= (bodyHeight()*0.73)){
          $(`#${objCircleNav.work}`).removeClass(objCircleNav.klasa);
          $(`#${objCircleNav.contact}`).addClass(objCircleNav.klasa);
        }

        let scrollNav = () => {

          let socials =  document.querySelectorAll('#social a');
          let pageLinks= document.querySelectorAll('.link');
        

          if(scroll> (bodyHeight()*0.25)){
            // document.querySelector('.navIco').style.color='#333';
          }
          if(scroll > (bodyHeight()*0.125)){
            for(let i of socials){
              i.style.color='#333';
            }
            for(let i of pageLinks){
              i.style.color='#333';
              
            }
           
          }
          else{
            // document.querySelector('.navIco').style.color='#fff';
            for(let i of socials){
              i.style.color='#fff';
            }
            for(let i of pageLinks){
              i.style.color='#fff';
              
            }
         
          }
        }
        scrollNav();
      }
      
     
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
    // const load = document.querySelectorAll('#loadSvg path');
    // console.log(load);
    // for(let i of load){
    //   console.log(`Path ${i} is ${i.getTotalLength()}`);
    // }

    let atribut = document.getElementById('loadAnimacija');
  
    let a = (i) => {
      console.log(i++);

      const maxVrednost = 100;
      if(i<maxVrednost){
        setTimeout(a,15,i);
      }
      atribut.setAttribute('value',i);
      document.querySelector('#procenat').innerHTML=`${i}%`;
    }
    a(0);

    // JS load animation
    setTimeout(function(){

      // document.getElementById('load').classList.remove('load');
      document.getElementById(objLoadAnimacija.social).style.visibility = objLoadAnimacija.cssProperty;
      document.getElementById(objLoadAnimacija.page).style.visibility = objLoadAnimacija.cssProperty;
      document.getElementById(objLoadAnimacija.header).style.visibility = objLoadAnimacija.cssProperty;
      document.getElementById(objLoadAnimacija.main).style.visibility = objLoadAnimacija.cssProperty;
     
      document.getElementById(objLoadAnimacija.main).style.visibility = objLoadAnimacija.cssProperty;  
      document.getElementById(objLoadAnimacija.footer).style.visibility = objLoadAnimacija.cssProperty;  
      document.getElementById('load').style.display = 'none';  

    },1800);
  }

  catch(err){
    console.log(err);
  }
  
}


//Nav

let navigacija = () => {
  document.querySelector('.navIco').addEventListener('click',function(e){
    e.preventDefault();
    console.log('kliknuto');
    document.querySelector('.small').classList.toggle('smallClick');
    document.querySelector('.navOpen').classList.toggle('navOpened');
    document.querySelector('.navTextResponsive').classList.toggle('clickText');
    document.querySelector('.navIco').classList.toggle('animacija');
    document.querySelector('.navIco').classList.toggle('animacijaNazad');
    // let ispisNavigacije = () => {
    //   let ispis = `<a class="" href="#about">About</a>
    //   <a class="" href="#work">Work</a>
    //   <a class="" href="#contact">Contact</a>`;
    //   return document.querySelector('.navTextResponsive').innerHTML=ispis;
    // }
    // ispisNavigacije();
    
  });
  
}

let projekti = () => {
  try{

  }
  catch(err){
    console.log(err.message);
  }
}

