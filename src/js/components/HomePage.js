import Component from "../components/Component.js";

export default class HomePage extends Component {
  getTemplate() {
    return `
        <div style="text-align: center">
            <h1>홈</h1>
            <p>환영합니다 🤓</p>
        </div>
      `;
  }
}
