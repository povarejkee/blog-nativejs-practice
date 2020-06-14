// todo сделать обработку ошибок в форме

export class Form {
  constructor(form, controls) {
    this.form = form
    this.controls = controls
  }

  values() {
    const values = {}

    Object.keys(this.controls).forEach((controlName) => {
      values[controlName] = this.form[controlName].value
    })

    return values
  }

  isValid() {
    const flags = Object.entries(this.controls).map(
      ([controlName, validators]) => {
        return validators.every((validator) =>
          validator(this.form[controlName].value)
        )
      }
    )

    return flags.every((flag) => flag)
  }
}
