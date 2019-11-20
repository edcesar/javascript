import { UserService } from "../../services/user.service.js";
import { UserComponentStyle } from "./user-component.style.js";

class UsersComponent {
  constructor() {
    this.userService = new UserService();
    UserComponentStyle.setStyle();
    this.setUsersTable();
  }

  setUsersTable() {
    this.users.then(users => {
      document.querySelector("#app").innerHTML = users;
    });
  }

  get users() {
    return this.userService.users.then(users => {
      return `
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Fone</th>
            </tr>
          </thead>
          <tbody>
            ${users
              .map(user => {
                return `
            <tr>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.website}</td>
              <td>${user.phone}</td>
            </tr>
            `;
              })
              .join("")}
          </tbody>
        </table>
    `;
    });
  }
}

export default UsersComponent;
