import { UserService } from "../../services/user.service.js";
import { UserComponentStyle } from "./user-style.component.js";

class UsersComponent {
  constructor() {
    UserComponentStyle.setStyle();
    this.users = [];
    this.userService = new UserService();
    this.setUsers().then(() => {
      this.updateUsersTable();
    });
  }

  setUsers() {
    return this.userService.users.then(users => {
      this.users = users;
    });
  }

  updateUsersTable() {
    document.querySelector(".users-table").innerHTML = `
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Fone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${this.users
              .map(user => {
                return `
            <tr>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.website}</td>
              <td>${user.phone}</td>
              <td>
                <button onClick="$app.user.remover(${user.id})">X</button>
              </td>
            </tr>
            `;
              })
              .join("")}
          </tbody>
        </table>
    `;
  }

  adicionar() {
    const user = {
      id: "101",
      name: "joao",
      email: "joao@gmail.com",
      website: "joao.com",
      phone: "11955448877"
    };

    this.users.push(user);
    this.updateUsersTable();
  }

  remover(userId) {
    this.users = this.users.filter(user => user.id !== userId);
    this.userService.delete(userId).then(res => this.updateUsersTable());
  }
}

export default UsersComponent;
