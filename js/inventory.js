function showInventory() {
  document.getElementById('sidebar').innerHTML = inventoryHTML;
}

function showItemDetail(itemName) {
  const item = getItemByName(itemName);  
  const clone = template.content.cloneNode(true);

  clone.querySelector('.name').textContent = item.name;  
  clone.querySelector('.description').textContent = item.description;
  clone.querySelector('img').src = item.image;

  document.body.appendChild(clone);
}

const template = document.getElementById('item-details');

document.getElementById('inventory').addEventListener('click', event => {
  const name = event.target.closest('.item').dataset.name;
  showItemDetail(name);
})
