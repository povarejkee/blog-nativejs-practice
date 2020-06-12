import { Component } from '../core/component'

export class HeaderComponent extends Component {
  constructor(id) {
    super(id)
  }

  init() {
    if (localStorage.getItem('started')) this.hide()

    const btn = this.$el.querySelector('.js-start')
    btn.addEventListener('click', startBtnHandler.bind(this))
  }
}

function startBtnHandler() {
  this.hide()
  localStorage.setItem('started', JSON.stringify(true))
}
