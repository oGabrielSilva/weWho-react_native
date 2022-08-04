class Strings {
  private constructor() {}

  public static APP_NAME = 'weWho';
  public static EN = {
    buttons: {
      signUp: 'Sign up',
      signIn: 'Sign in',
    },
    placeholders: {
      password: 'Password',
    },
  };

  public static PT = {
    buttons: {
      signUp: 'Cadastrar',
      signIn: 'Entrar',
    },
    placeholders: {
      password: 'Senha',
    },
  };

  public static getInstance() {
    return this.EN;
  }
}

export default Strings;
