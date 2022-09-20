import Component from "./Component.js";

export default class UserPage extends Component {
  getTemplate() {
    const { users } = this._props;
    users.sort();

    return `
        <div style="text-align: center">
            <h1>세미나 참여자</h1>
            <ul class='users'>
              ${users.map((user) => `<li>${user}</li>`).join("")}
            </ul>
        </div>
      `;
  }
}
