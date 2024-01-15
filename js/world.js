function showWorld() {
    document.getElementById('world').innerHTML = 
      '<include src="world.html"></include>'
  }
  
  showWorld();
  
  document.addEventListener('click', e => {
    const name = e.target.dataset.name;  
    showLocation(name);
  })
  
  function showLocation(name) {
    fetch('locations/' + name + '.html')
      .then(res => res.text())    
      .then(html => {
        const template = document.getElementById('location');      
        const clone = template.content.cloneNode(true);      
        clone.querySelector('.location-name').textContent = name;
        clone.querySelector('.npcs').innerHTML = html;
        document.getElementById('world')
          .innerHTML = '';      
        document.getElementById('world')
          .appendChild(clone);      
        saveLocation(name);      
      })
  }
  
  function travel() {  
    const location = this.parentNode.dataset.name;  
    showLocation(location);
  }
  
  document.querySelector('.travel')  
    .addEventListener('click', travel)
  
    function getLocations() {
        return [
          { name: 'town', class: 'explored' },  
          { name: 'forest', class: 'hidden' }, 
          { name: 'cave', class: 'explored' }  
        ]
      }
      