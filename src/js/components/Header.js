import Component from "../components/Component.js";

export default class Header extends Component {
  getTemplate() {
    const pathname = this._props.path;

    return `
    <a href="/" class='${pathname === "/" ? "active" : ""}'>Home</a>
    <a href="/about" class='${pathname === "/about" ? "active" : ""}'>About</a>
    <a href="/users" class='${pathname === "/users" ? "active" : ""}'>Users</a>
      `;
  }
}
