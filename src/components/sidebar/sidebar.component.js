import { SidebarStyleComponent } from "./sidebar-style.component.js";

class SidebarComponent {
  constructor() {
    SidebarStyleComponent.setStyle();
    this.setSidebar();
  }

  get sidebar() {
    return `
      <div class="sidebar">
    
      
      </div>
    `;
  }

  setSidebar() {
    document.querySelector(".sidebar-container").innerHTML = this.sidebar;
  }
}

export default SidebarComponent;
