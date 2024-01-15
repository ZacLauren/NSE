class Currency {
    constructor(icon, amount) {
    this.icon = icon;
    this.amount = amount;
    }
    
    updateAmount(amount) {
    this.amount += amount;
    }
    }
    
    class Item {
    constructor(name, cost) {
    this.name = name;
    this.cost = cost;
    this.effects = [];
    }
    
    buy() {
    this.applyEffects();
    }
    
    use() {
    this.applyEffects();
    
    }
    
    applyEffects() {
    this.effects.forEach(effect => effect.apply());
    
    }
    
    addEffect(effect) {
    this.effects.push(effect);
    }
    }
    
    class Effect {
    constructor(type, magnitude) {
    this.type = type;
    
    this.magnitude = magnitude;
    
    }
    
    apply() {
    switch(this.type) {
    case 'heal': heal(this.magnitude); break;
    case 'damage': damage(this.magnitude); break;
    }
    }
    
    }
    
    function heal(amount) {
    stats.health.value = Math.min(stats.health.value + amount, stats.health.max);
    }
    
    const stats = {
    health: {
    name: 'Health',
    value: 100,
    max: 100
    
    }
    }
    
    const coins = {
    gold: new Currency('gold', 0),
    diamond: new Currency('diamond', 0)
    };
    
    function payCost(item) {
    // Loop through coin types and deduct amounts
    }