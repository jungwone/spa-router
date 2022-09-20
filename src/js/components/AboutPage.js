import Component from "../components/Component.js";

export default class AboutPage extends Component {
  getTemplate() {
    return `
        <div style="text-align: center">
            <h1>About</h1>
            <p>에너지엑스의 모든 것</p>
        </div>
      `;
  }
}
