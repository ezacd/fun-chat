import { expect, browser } from '@wdio/globals';
import LoginPage from '../pageobjects/login.page';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open();

    await LoginPage.login('yaroslav.us2312@gmail.com', 'A4385d11!qwe');

    await browser.waitUntil(
      async () => {
        const cookie = await browser.getCookies(['token']);
        return cookie.length > 0;
      },
      {
        timeout: 10000,
        timeoutMsg:
          'Expected to see the "token" cookie, but it did not appear within 5 seconds.',
      },
    );
  });
});
