import {MainPage} from '../pages/mainPage';
import {expect, test} from "@playwright/test";

let username = "ann-marov@yandex.ru"
let password = "P@ssw0rd"

test('Login', async ({page}) => {
    const mainPage = new MainPage(page);
    await mainPage.navigate();
    const loginPage = await mainPage.openSignIn();
    const profilePage = await loginPage.signIn(username, password)

    const editorPage = await profilePage.navbar.visitEditor()
    const articlePage = await editorPage.publishArticle('title', 'description', 'body');
    await articlePage.title.shouldHaveTexts(['title'])
    await articlePage.article.shouldHaveTexts(['body'])
    await articlePage.edit.shouldBeVisible()
    await articlePage.delete.shouldBeVisible()

});
