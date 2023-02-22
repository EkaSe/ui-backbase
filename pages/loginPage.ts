import {Page} from 'playwright';
import {ProfilePage} from './profilePage';
import {Input} from "../components/input";
import {Button} from "../components/button";

export class LoginPage {
    private page: Page;
    private email_field;
    private password_field;
    private submit;

    constructor(page: Page) {
        this.page = page;
        this.email_field = new Input(page, '//input[@formcontrolname="email"]', 'Email')
        this.password_field = new Input(page, '//input[@formcontrolname="password"]', 'Password')
        this.submit = new Button(page, '//button[@type="submit"]', 'Submit')

    }

    async signIn(username: string, password: string) {
        await this.password_field.fill(password);
        await this.email_field.fill(username);
        await this.submit.click()
        return new ProfilePage(this.page)
    }
}