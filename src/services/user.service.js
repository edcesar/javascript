export class UserService {
  get users() {
    return fetch("https://jsonplaceholder.typicode.com/users").then(users => {
      return users.json();
    });
  }

  remove(userId) {
    return fetch("https://jsonplaceholder.typicode.com/users/" + userId, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(res => console.log(res));
  }
}
