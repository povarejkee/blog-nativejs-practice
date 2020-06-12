export class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }

  values() {
    const values = {}

    Object.keys(this.controls).forEach((control) => {
      values[control] = this.form[control].value
    })

    return values
  }
}
