/* add code here */
window.addEventListener("load", function() 
{
  
  var thumbs = document.getElementById("thumbnails");
  thumbs.addEventListener("click", function(e) {
    if (e.target.nodeName.toLowerCase() == 'img') {
      var clickedImageSource = e.target.src;
      var newSrc = clickedImageSource.replace("small", "medium");
      var featuredImage = document.querySelector("#featured img");
      featuredImage.src = newSrc;
      featuredImage.title = e.target.title;
    }
  });
  var featured = document.getElementById("featured");
    thumbs.addEventListener("mouseover", function(e) {
    var caption = document.querySelector("#featured figcaption");
    caption.style.transition = "opacity 1.5s";
    caption.style.opacity = 0.80;
    caption.innerHTML = document.querySelector("#featured img").title;
    var caption = document.querySelector("#featured figcaption");
    caption.style.transition = "opacity 1.5s";
    caption.style.opacity = 0;
  });/*
  var featured = document.getElementById("featured");
  featured.addEVentListner("mouseover", function(e)
  {
    var caption= document.getElementById("fig-caption");
    caption.classList.add("caption-hovered");
  });
 /* 
 featured.addEVentListner("mouseout", function(e)
  {
    var caption= document.getElementById("fig-caption");
    caption.classList.remove("caption-hovered");
  }*/

});


