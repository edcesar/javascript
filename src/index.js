import HeaderComponent from "./components/header/header.component.js";
import SidebarStyleComponent from "./components/sidebar/sidebar.component.js";
import UserComponent from "./components/user/user.component.js";

window.$app = {
  header: new HeaderComponent(),
  sidebar: new SidebarStyleComponent(),
  user: new UserComponent()
};
