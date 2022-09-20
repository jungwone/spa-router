import Component from "./Component.js";

export default class NotFoundPage extends Component {
  constructor(target) {
    super(target);
  }

  getTemplate() {
    return `
        <div style="text-align: center">
            <h1>404</h1>
            <p>잘못 찾아오셨습니다.</p>
        </div>
      `;
  }
}
