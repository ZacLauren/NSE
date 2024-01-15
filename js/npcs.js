class NPC {
    constructor({ image, x, y, width, height, name, dialogue, queue }) {
      this.image = new Image();
      this.image.src = image;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.name = name;      
      this.dialogue = dialogue;   
      this.queue = queue;      
    }
    
    update() {
      // Update NPC state
    }
    
    collide(player) {
      const distance = Math.hypot(this.x - player.x, this.y - player.y); 
      if (distance < this.width + player.width) {
        // Collision!
      }  
    }
    
    draw() {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);  
    }
    
    showDialogue() {
      // Show dialogue UI
    }
    
    interact(character) {
      if (this.dialogue) {
        this.showDialogue();
      }
    }
  }
  
  class QuestGiver extends NPC {    
    update() {
      if (this.collide(player)) {
        this.showDialogue();
      }
    }
  }
  
  class Enemy extends NPC {    
    update() {
      const dx = player.x - this.x;
      const dy = player.y - this.y;
      this.x += dx * 0.1; 
      this.y += dy * 0.1; 
    }   
  }
  class QuestGiver extends NPC {  
    constructor(config) {
      super(config);
      this.quests = config.quests;
    }
    
    giveQuest(quest) {
      // Give quest to player
    }
  }
  
  function randomName() {
    const names = ['John', 'Jane', 'Mary', 'Bob', 'Alice'];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  const questGiver1 = new QuestGiver({
    image: 'assets/quest_giver.png',
    x: 100,
    y: 100,
    name: randomName(),
    quests: [/* list of quests */]
  });
  
  const questGiver2 = new QuestGiver({
    image: 'assets/quest_giver2.png',
    x: 300,
    y: 300, 
    name: randomName(),
    quests: [/* list of quests */]
  });
  class QuestGiver extends NPC {
    constructor(config) {
      super(config);
      this.items = config.items;  
    }
    
    sell(item) {
      if (player.gold >= item.price) {
        player.inventory.push(item);
        player.gold -= item.price;
      }  
    }
  }
  