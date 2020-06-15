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
        return validators.every(
          (validator) => validator(this.form[controlName].value).isValid
        )
      }
    )

    return flags.every((flag) => flag)
  }

  showErrors() {
    Object.entries(this.controls).forEach(([controlName, validators]) => {
      const formControl = this.form[controlName]

      this.clearErrors(formControl)

      validators.forEach((validator) => {
        if (!validator(formControl.value).isValid) {
          formControl.classList.add('invalid')
          formControl.insertAdjacentHTML(
            'afterend',
            `<small class="validation-error" style="display: block">${
              validator(formControl.value).errorText
            }</small>`
          )
        }
      })
    })
  }

  clearErrors($control) {
    const parent = $control.closest('.form-control')
    const errorsCollection = parent.querySelectorAll('.validation-error')

    $control.classList.remove('invalid')

    errorsCollection.forEach((error) => error.remove())
  }

  clearForm() {
    Object.keys(this.controls).forEach((controlName) => {
      this.form[controlName].value = ''
    })
  }
}
