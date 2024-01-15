function showMap(locations) {
    const html = template(`
      {% for location in locations %}
        ... 
      {% endfor %}
    `, { locations })
  
    document.getElementById('map').innerHTML = html;
    updateMap();
  }  
  
  function updateMap() {
    const location = getSavedLocation();  
    document
      .querySelector(`.location[data-name="${location}"]`)
      .classList.add('current');
  }
  
  function onLocationChange() {
    showMap(getLocations());
  }
  
  showMap(getLocations());
  // Load map images
const tree = new Image();
tree.src = 'assets/tree.png';

const rock = new Image();  
rock.src = 'assets/rock.png';

const water = new Image();
water.src = 'assets/water.png';

const cave = new Image();  
cave.src = 'assets/cave.png';

const house = new Image();
house.src = 'assets/house.png';

// Use map images  
function drawMap() {
  context.drawImage(tree, x, y);
  context.drawImage(rock, x + 20, y);  
  context.drawImage(water, x + 40, y);
  context.drawImage(cave, x + 60, y);
  context.drawImage(house, x + 80, y);
}
function draw() {
    // ...
    drawMap(50,50);
  }