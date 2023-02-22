import {Page} from 'playwright';
import {LoginPage} from './loginPage';

export class MainPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://qa-task.backbasecloud.com');
    }

    async openSignIn() {
        await this.page.click('//a[@href="/login"]');
        return new LoginPage(this.page)
    }
}