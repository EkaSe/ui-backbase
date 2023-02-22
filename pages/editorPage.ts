import {Page} from 'playwright';
import {LoginPage} from './loginPage';
import {Input} from "../components/input";
import {Button} from "../components/button";
import {ProfilePage} from "./profilePage";
import {ArticlePage} from "./articlePage";

export class EditorPage {
    private page: Page;
    private title;
    private description;
    private article;
    private publish;

    constructor(page: Page) {
        this.page = page;
        this.title = new Input(page, '//input[@formcontrolname="title"]', 'Article Title')
        this.description = new Input(page, '//input[@formcontrolname="description"]', 'Article Description')
        this.article = new Input(page, '//textarea[@formcontrolname="body"]', 'Article Body')
        this.publish = new Button(page, '//button[@type="button"]', 'Publish Article')

    }

    async publishArticle(title: string, description: string, article: string) {
        await this.title.fill(title);
        await this.description.fill(description);
        await this.article.fill(article)
        await this.publish.click()
        return new ArticlePage(this.page)
    }
}