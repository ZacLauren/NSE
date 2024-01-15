class Player {
    constructor({ 
      gold = 0,  
      inventory = [] 
    }) {
      this.gold = gold;
      this.inventory = inventory;  
    }
  }
  
  class Player {
    constructor({  
      level = 1, 
      xp = 0,
      stats = {
        health: 100,
        mana: 100,
        attack: 10,
        defense: 10
      } 
    }) {
      this.level = level;
      this.xp = xp;
      this.stats = stats;  
    }
    
    levelUp() {
      this.level++;
      this.xp = 0;
      this.upgradeStats();  
    }
    
    upgradeStats() {
      // Increase stats based on level
    }
  }
  
  class Player {
    constructor({  
        stats = {
          health: 100,
          mana: 100, 
          attack: 10,
          defense: 10
        }   
      }) {
        this.level = 1;
        this.xp = 0;
        this.stats = stats;          
    }
    
    levelUp() {
      this.level++; 
      this.xp = 0;
      this.upgradeStats();
      this.learnSkill();
    }
    
    upgradeStats() {
      this.stats.health += this.level * 5;
      this.stats.attack += this.level;
      // etc...
    }
    learnSkill() {
        const SkillClass = getSkillForLevel(this.level);
        const skill = new SkillClass();  
        this.skills.push(skill);
    }
  }
  