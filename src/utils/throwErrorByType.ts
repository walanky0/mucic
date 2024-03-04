type ErrorsType = 'not-authorized' | 'not-found' | 'not-current-login-or-pass';

function throwErrorByType(type?: ErrorsType): unknown {
  switch (type) {
    case 'not-authorized':
      return new Error('Вы не авторизованны');
    case 'not-found':
      return new Error('Мы ничего не смогли найти');
    case 'not-current-login-or-pass':
      return new Error('Неверный логин или пароль');
  }

  return new Error('Упс... что-то пошло не так');
}

export { throwErrorByType };
