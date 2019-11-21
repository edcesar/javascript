import { UserService } from "../../services/user.service.js";
import { UserComponentStyle } from "./user-style.component.js";

class UsersComponent {
  constructor() {
    UserComponentStyle.setStyle();
    this.users = [];
    this.userService = new UserService();
    this.setUsers().then(() => {
      this.setUsersTable();
    });
  }

  setUsers() {
    return this.userService.users.then(users => {
      this.users = users;
    });
  }

  setUsersTable() {
    console.log(this.users);
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

  remover(userId) {
    var removeIndex = this.users
      .map(function(item) {
        return item.id;
      })
      .indexOf(userId);

    this.users.splice(removeIndex, 1);

    this.userService.delete(userId).then(res => {
      console.log(res)
      this.setUsersTable();
    });
  }
}

export default UsersComponent;
