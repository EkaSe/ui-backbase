import {Page} from 'playwright';
import {Button} from './button';
import {Link} from './link';
import {EditorPage} from "../pages/editorPage";

export class Navbar {
    public readonly profileLink;
    public readonly homeLink;
    public readonly settingsLink;
    public readonly editorLink;
    public readonly searchButton;
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.profileLink = new Link(page, "//a[contains(@href,'/')]", 'Home');
        this.settingsLink = new Link(page, "//a[contains(@href,'/settings')]", 'Settings');
        this.editorLink = new Link(page, "//a[contains(@href,'/editor')]", 'Article Editor');
        this.profileLink = new Link(page, "///a[contains(@href,'/profile')]", 'Profile');

    }

    public visitHome(): void {
        this.homeLink.click();
    }

    public visitProfile(): void {
        this.profileLink.click()
    }


    async visitEditor()  {
        this.editorLink.click();
        return new EditorPage(this.page)
    }

    public visitSettings(): void {
        this.settingsLink.click()
    }

}