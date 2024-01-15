const items = [
    {
      name: 'Health Potion',
      price: 50,
      type: 'consumable',
      effects: ['Heals 50 HP']  
    },  
    {
      name: 'Mana Potion', 
      price: 100,
      type: 'consumable',
      effects: ['Restores 50 mana']
    },
    {
      name: 'Iron Sword',
      price: 100,  
      type: 'weapon', 
      stats: {
        damage: 10,  
        attackSpeed: 1.5      
      }
    },
    {
      name: 'Bronze Shield',
      price: 75,
      type: 'armor',
      stats: {
        defense: 15
      }  
    },
    {
      name: 'Wooden Staff',
      price: 150,
      type: 'weapon',
      stats: {
        damage: 25,
        attackSpeed: 1.2
      },
      requirements: {
        mana: 50
      }  
    },
    {
      name: 'Leather Boots',
      price: 200,
      type: 'armor',
      stats: {
        defense: 5,
        speed: 1.1      
      }
    }  
  ]
  