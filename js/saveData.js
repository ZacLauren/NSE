const defaultSaveData = {
    name: "",
    class: "",  
    health: 100,
    coins: 0,
    inventory: []
  }
  
  function saveGame(saveData) {
    localStorage.setItem("saveData", JSON.stringify(saveData));
  }
  
  function loadGame() {
    const saveString = localStorage.getItem("saveData");
    return JSON.parse(saveString) || defaultSaveData;  
  }
  