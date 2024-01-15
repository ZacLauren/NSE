class QuestGiver extends NPC {
  
    constructor({ 
      quests = [],
      goldReward = 0, 
      itemRewards = [],
      xpReward = 0  
    }) {
      super();
      this.quests = quests;
      this.goldReward = goldReward;
      this.itemRewards = itemRewards;
      this.xpReward = xpReward;  
    }
    
    giveQuest({ title, description }) {
      this.showQuestDialogue(title);
      console.log(description);  
    }
    
    showQuestDialogue(title) {
      console.log(this.questDialogues[title][quest.currentStage]);
    }
    
    reward(quest) {
      switch(quest.type) {
        case 'kill': 
          this.rewardKillQuest(quest);
          break;
        case 'collection':
          this.rewardCollectionQuest(quest);
          break;  
        case 'delivery':
          this.rewardDeliveryQuest(quest);
          break;
      }  
    }
    
    rewardKillQuest() {
      player.gold += this.goldReward;
      player.xp += this.xpReward;
    }
    
    // ...
  }
  class QuestGiver {
    rewardPlayer({ 
      xpReward, 
      goldReward,
      itemReward  
    }) {
      player.xp += xpReward;  
      player.gold += goldReward; 
      player.inventory.add(itemReward);
      player.checkLevelUp();   
    }
  }
    