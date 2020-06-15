import { Component } from '../core/component'
import { Form } from '../core/form'
import { Validators } from '../core/validators'
import { postsService } from '../posts.service'

export class CreateComponent extends Component {
  constructor(id) {
    super(id)
    //this.form = null
  }

  init() {
    this.form = new Form(this.$el, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)],
    })

    this.$el.addEventListener('submit', submitHandler.bind(this))
  }
}

async function submitHandler(event) {
  event.preventDefault()

  if (this.form.isValid()) {
    const data = {
      type: this.$el.type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.values(),
    }

    await postsService.addPost(data)

    alert('Пост создан')

    this.form.clearForm()

    Object.keys(this.form.controls).forEach((control) => {
      this.form.clearErrors(this.$el[control])
    })
  } else {
    this.form.showErrors()

    console.warn('form is invalid!')
  }
}
