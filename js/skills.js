// skills.js

class FireballSkill {
    // Skill implementation
  }
  
  class HealingSkill {
    // Skill implementation
  }
  
  class BattleCrySkill {
    // Skill implementation
  }
  
  // Other skill classes
  
  function getSkillForLevel(level) {
    switch(level) {
      case 5: return new FireballSkill();
      case 10: return new HealingSkill();  
      case 15: return new BattleCrySkill();
      // etc...  
    }
  }
  