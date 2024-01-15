class Quest {
    constructor({ type, details }) {
      this.type = type;
      this.details = details;
      this.currentStage = 0;
    }
    
    nextStage() {
      this.currentStage++; 
    }
    
    isComplete() {
      return this.currentStage === this.details.stages.length;
    }
  }
  
  class KillQuest extends Quest {
    constructor({ details }) {
      super({ type: 'kill', details }); 
    }
    
    isComplete() {
      return this.details.killCount >= this.details.target;  
    }
  }
  
  class CollectionQuest extends Quest {
    constructor({ details }) {
      super({ type: 'collection', details });
    }
    
    isComplete() {
      return this.details.collected >= this.details.target;
    }
  }
  
  class DeliveryQuest extends Quest {
    constructor({ details }) {
      super({ type: 'delivery', details });  
    }
  }
  