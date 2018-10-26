var modal = document.getElementById('myModal');

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function(){
    console.log("hello")
    modal.style.display = "block";
    console.log("hello")
    modalImg.src = this.src;
    console.log("hello")
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
  }