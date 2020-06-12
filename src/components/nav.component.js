import { Component } from '../core/component'

export class NavComponent extends Component {
  constructor(id, tabs) {
    super(id)
    this.tabs = tabs
  }

  init() {
    this.$el.addEventListener('click', tabSwitchHandler.bind(this))
  }
}

function tabSwitchHandler(event) {
  const { classList } = event.target
  event.preventDefault()

  if (classList.contains('tab')) {
    const switchers = Array.from(document.querySelectorAll('.tab'))
    const activeTab = this.tabs.find(
      (tab) => event.target.dataset.name === tab.name
    )

    switchers.forEach((item) => item.classList.remove('active'))
    classList.add('active')

    this.tabs.forEach((tab) => tab.component.hide())
    activeTab.component.show()
  }
}
