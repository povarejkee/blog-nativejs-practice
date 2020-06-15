export class Component {
  constructor(id) {
    this.$el = document.getElementById(id)
    this.init()
  }

  init() {}
  /** пустой метод нужен, чтобы в потомках можно было определить
   * свой метод init, который должен быть вызван в конструкторе текущего класса.
   * В потомке переопределим метод init с нужной логикой, и тут в конструкторе
   * этот метод будет вызываться каждый раз при инициализации компонента */

  onHide() {}

  onShow() {}

  hide() {
    this.$el.classList.add('hide')
    this.onHide()
  }

  show() {
    this.$el.classList.remove('hide')
    this.onShow()
  }
}
