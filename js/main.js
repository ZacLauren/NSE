function showMainMenu() {
    document.getElementById("main-menu").style.display = "block";
    document.getElementById("character-creation").style.display = "none";  
    document.getElementById("game").style.display = "none";
  }
  
  document.getElementById("start").addEventListener("click", function() {
    showCharacterCreation();
  })
  
  function init() {
    showMainMenu();
  }
  
  init();
  