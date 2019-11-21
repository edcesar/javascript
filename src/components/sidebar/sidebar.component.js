import { SidebarStyleComponent } from "./sidebar-style.component.js";

class SidebarComponent {
  constructor() {
    SidebarStyleComponent.setStyle();
    this.setSidebar();
  }

  setSidebar() {
    document.querySelector(".sidebar-container").innerHTML = `
      <div class="sidebar">
        <input type="text">
        <button onClick="$app.user.adicionar()">Criar novo usuario</button>
      </div>
    `;
  }
}

export default SidebarComponent;
