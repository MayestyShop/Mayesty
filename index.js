
function shopNow(){
    document.querySelector('.fc').scrollIntoView({
      behavior: "smooth"
    });
  }

  function fromproduct1(){
    document.querySelector('.product2-mobileh1').scrollIntoView({
      behavior: "smooth"
    })
  }

  function fromproduct2(){
    document.querySelector('.product3-mobileh1').scrollIntoView({
      behavior: "smooth"
    })
  }

  function fromproductLAST(){
    document.querySelector('#bestproducts').scrollIntoView({
      behavior: "smooth"
    }) 
  }



document.querySelector('.div-product1-img').addEventListener('click', function() {
  window.location.href = 'FighterHoodie';
});

document.querySelector('.div-product2-img').addEventListener('click', function() {
  window.location.href = 'UnderCoverHoodie';
});

document.querySelector('.div-product3-img').addEventListener('click', function() {
  window.location.href = 'RelentlessHoodie';
});

document.querySelector('#Header1').addEventListener('click', function() {
  window.location.href = 'index';
});

document.querySelector('#Header2').addEventListener('click', function() {
  window.location.href = 'shop';
});

document.querySelector('#Header3').addEventListener('click', function() {
  window.location.href = 'collections';
});

document.querySelector('#Header4').addEventListener('click', function() {
  window.location.href = 'support';
});


/*
shopopacity = 0;
function shop(){
    shoploading = setInterval(shop, 8)
    shopopacity += 0.02;
    document.querySelector('#procent').style.display = "none";
    document.querySelector('#loadingscreen').style.marginTop = 0 + "vw";
    document.querySelector('#loadingscreen').style.display = "block";
    document.querySelector('#loadingscreen').style.position = "absolute";
    document.querySelector('html').style.overflowY = "hidden";
    window.scrollTo(0, 0);
    document.querySelector('#loadingscreen').style.opacity = shopopacity ;
    window.open('shop', "_self");
    if (shopopacity >80){
        clearInterval(shoploading);
        window.open('shop', "_self");
    };

}
*/