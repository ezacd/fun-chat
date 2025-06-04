import { $ } from '@wdio/globals';
import Page from './page';

class LoginPage extends Page {
  public get inputUsername() {
    return $('#loginFromInputEmail');
  }

  public get inputPassword() {
    return $('#loginFromInputPassword');
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('login');
  }
}

export default new LoginPage();
