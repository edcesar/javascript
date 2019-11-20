export class UserService {
  get users() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(users => {
      return users.json();
    });
  }
}
