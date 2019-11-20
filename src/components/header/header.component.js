import { HeaderStyleComponent } from "./header-style.component.js";

class HeaderComponent {
  constructor() {
    HeaderStyleComponent.setStyle();
    this.setHeader();
  }

  setHeader() {
    document.querySelector(".header-container").innerHTML = `
    <header>
      <h1>Javacript vanilha</h1>
    </header>  
    `;
  }
}

export default HeaderComponent;
