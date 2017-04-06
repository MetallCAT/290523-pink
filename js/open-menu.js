var navigation = document.querySelector(".main-nav");
var toggle = document.querySelector(".header__toggle");

navigation.classList.remove("main-nav--nojs");

toggle.addEventListener("click", function(event) {
  if (navigation.classList.contains("main-nav--closed")) {
    navigation.classList.remove("main-nav--closed");
    navigation.classList.add("main-nav--opened");
  } else {
    navigation.classList.add("main-nav--closed");
    navigation.classList.remove("main-nav--opened");
  }    
});
