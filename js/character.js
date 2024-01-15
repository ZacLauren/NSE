function showCharacterCreation() {
    document.getElementById("main-menu").style.display = "none";  
    document.getElementById('character-creation').innerHTML = 
      '<include src="character.html"></include>';  
    document.getElementById("game").style.display = "none";
  }
  
  document.getElementById("create").addEventListener("click", function() {
    // Save character details
    // Show game screen    
  })
  
  function readFormData(form) {
    const data = {};
    for (let element of form.elements) {
      data[element.name] = element.value;  
    }
    return data;
  }
  
  document.getElementById('character-form').addEventListener('submit', e => {
    e.preventDefault();  
    const form = e.target;  
    const character = readFormData(form);
    
    // Store character in localStorage
    localStorage.setItem('character', JSON.stringify(character));
    
    // Redirect to game
    window.location = 'game.html';
  })
  
  showCharacterCreation();
  