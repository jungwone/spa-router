export default class Component {
  _target;
  _state;
  _props;

  constructor(target, props) {
    this._target = target;
    this._props = props;
    this.setup();
    this.setEvent();
    this.render();
  }

  // 초기 실행
  setup() {}

  // 마운트 되었을 때 실행
  mounted() {}

  // View(html)을 만듬
  getTemplate() {
    return "";
  }

  // 렌더링
  render() {
    this._target.innerHTML = this.getTemplate();
    this.mounted();
  }

  // addEvent 메서드를 이용하여 이벤트 설정
  setEvent() {}

  // 새로운 state 설정
  setState(newState) {
    this._state = { ...this._state, ...newState };
    this.render();
  }

  // 이벤트 등록
  addEvent(eventType, selector, callback) {
    this._target.addEventListener(eventType, (event) => {
      if (selector) {
        callback(event);
      }
    });
  }
}
