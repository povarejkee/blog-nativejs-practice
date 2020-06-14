import { Component } from '../core/component'
import { Form } from '../core/form'
import { Validators } from '../core/validators'

export class CreateComponent extends Component {
  constructor(id) {
    super(id)
    //this.form = null
  }

  init() {
    this.form = new Form(this.$el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)],
      type: [],
    })

    this.$el.addEventListener('submit', submitHandler.bind(this))
  }
}

function submitHandler(event) {
  event.preventDefault()

  if (this.form.isValid()) {
    const data = {
      ...this.form.values(),
    }

    console.log(data)
  } else {
    console.warn('form is invalid!')
  }
}
