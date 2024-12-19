
import { menuDatas } from "../data/menuData.js";

export function renderMenu() {
  const menuContainer = document.getElementById("menu");
  const categories = [...new Set(menuData.map(item => item.category))];

  categories.forEach(category => {
    const categorySection = document.createElement("section");
    categorySection.id = category.toLowerCase();
    categorySection.innerHTML = `<h2>${category}</h2>`;
    
    const itemList = document.createElement("ul");
    menuData
      .filter(item => item.category === category)
      .forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        itemList.appendChild(listItem);
      });

    categorySection.appendChild(itemList);
    menuContainer.appendChild(categorySection);
  });
}
