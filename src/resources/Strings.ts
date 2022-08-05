class Strings {
  private constructor() {}

  public static APP_NAME = 'weWho';
  public static EN = {
    buttons: {
      signUp: 'Sign up',
      signIn: 'Sign in',
      forgotPassword: 'Forgot password?',
      remember: 'Remember',
    },
    placeholders: {
      password: 'Password',
    },
  };

  public static PT = {
    buttons: {
      signUp: 'Cadastrar',
      signIn: 'Entrar',
      forgotPassword: 'Esqueceu a senha?',
      remember: 'Lembrar',
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
