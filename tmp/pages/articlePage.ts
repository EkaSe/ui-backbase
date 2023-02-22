import {Page} from 'playwright';
import {LoginPage} from './loginPage';
import {Input} from "../components/input";
import {Button} from "../components/button";
import {Text} from "../components/text";
import {ProfilePage} from "./profilePage";
import {Component} from "../components/component";

export class ArticlePage {
    private page: Page;
    title;
    edit;
    article;
    delete;

    constructor(page: Page) {
        this.page = page;
        this.title = new Text(page, 'div > h1', 'Article Title')
        this.article = new Text(page, 'div > p', 'Article Description')
        this.edit = new Button(page, '//div[@class="article-actions"]//a[contains(@href,"editor")]', 'Edit Article')
        this.delete = new Button(page, '//div[@class="article-actions"]//span/button', 'Delete Article')

    }
    //
    // async publishArticle(title: string, description: string, article: string) {
    //     await this.title.fill(title);
    //     await this.description.fill(description);
    //     await this.article.fill(article)
    //     await this.publish.click()
    //     return new ArticlePage(this.page)
    // }
}