export class Validators {
  static required(value) {
    return {
      isValid: value && value.trim(),
      errorText: 'Поле обязательно для заполнения',
    }
  }

  static minLength(length) {
    return (value) => {
      return {
        isValid: value.length >= length,
        errorText: `Минимальное кол-во символов -- ${length}`,
      }
    }
  }
}
