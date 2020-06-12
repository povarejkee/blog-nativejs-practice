import { Component } from '../core/component'
import { Form } from '../core/form'

export class CreateComponent extends Component {
  constructor(id) {
    super(id)
    //this.form = null
  }

  init() {
    this.form = new Form(this.$el, {
      title: [],
      fulltext: [],
      type: [],
    })

    this.$el.addEventListener('submit', submitHandler.bind(this))
  }
}

function submitHandler(event) {
  event.preventDefault()

  const data = {
    ...this.form.values(),
  }
  console.log(data)
}
