
import { menuData } from "../menuData.js";
import { renderMenu } from "./menu.js";

document.getElementById("search-input").addEventListener("input", event => {
  const query = event.target.value.toLowerCase();
  const filteredData = menuData.filter(item =>
    item.name.toLowerCase().includes(query)
  );

  const menuContainer = document.getElementById("menu");
  menuContainer.innerHTML = ""; // Limpia el menú actual
  renderMenu(filteredData);
});
