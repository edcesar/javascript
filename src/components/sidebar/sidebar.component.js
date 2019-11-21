import { SidebarStyleComponent } from "./sidebar-style.component.js";

class SidebarComponent {
  constructor() {
    SidebarStyleComponent.setStyle();
    this.setSidebar();
  }

  setSidebar() {
    document.querySelector(".sidebar-container").innerHTML = `
      <div class="sidebar">
        <form id="formUser" onsubmit="return $app.sidebar.onFormUserSubmit(event)">
          <labe for="name">Name</label>
          <input type="text" id="name" name="name">

          <labe for="email">Email</label>
          <input type="text" id="email" name="email">

          <labe for="name">Website</label>
          <input type="text" id="website" name="website">

          <labe for="name">Fone</label>
          <input type="text" id="fone" name="fone">

          <button onClick="$app.user.adicionar()">Criar novo usuario</button>
        </form>
      </div>
    `;
  }

  onFormUserSubmit(event) {
    event.preventDefault();
    return false;
  }
}

export default SidebarComponent;
