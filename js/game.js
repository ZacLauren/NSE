function showGame() {
  document.getElementById("main-menu").style.display = "none";
  
  document.getElementById("character-creation").style.display = "none";
  
  document.getElementById("game").style.display = "block";
  }
  
  function initGame() {
  // Load character from localStorage
  showGame();
  
  }
  
  function encounterMonster() {
  // ...
  }
  
  function encounterBoss() {
  // ...
  
  }
  
  document.getElementById("continue").addEventListener("click", function() {
  encounterMonster();
  
  })
  
  function showStore() {
  // ...
  
  }
  
  function saveGame() {
  // ...
  }
  
  function loadGame() {
  // ...
  }
  
  // economy.js
  class Currency {
  constructor(icon, amount) {
  // ...
  }
  
  updateAmount(amount) {
  // ...
  
  }
  }
  
  class Item {
  constructor(name, cost) {
  // ...
  }
  }
  
  const coins = {
  gold: new Coin('gold', 0),
  diamond: new Coin('diamond', 0)
  
  }
  
  // game.js
  import { coins, Item } from './economy.js';
  
  const healthPotion = new Item('Health Potion');
  coins.gold.updateAmount(50);
  // Load images
const goblinImage = new Image();
goblinImage.src = 'assets/goblin.png';

const mageImage = new Image();  
mageImage.src = 'assets/mage.png';

// Use images
function draw() {
  context.drawImage(goblinImage, x, y);
}
for (let quest of player.quests) {
  if (quest.isComplete()) {
    questGiver.reward(quest);
    player.quests.splice(player.quests.indexOf(quest), 1);
  }
}
if (quest.isComplete()) {
  // Reward player
} else {
  quest.nextStage();
}
