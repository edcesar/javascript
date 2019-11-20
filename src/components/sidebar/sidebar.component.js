import { SidebarStyleComponent } from "./sidebar-style.component.js";

class SidebarComponent {
  constructor() {
    SidebarStyleComponent.setStyle();
    this.setSidebar();
  }

  setSidebar() {
    document.querySelector(".sidebar-container").innerHTML = `
      <div class="sidebar">
      </div>
    `;
  }
}

export default SidebarComponent;
