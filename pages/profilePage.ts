import {Page} from 'playwright';
import {Link} from "../components/link";
import {BasePage} from "./basePage";

export class ProfilePage extends BasePage{
    readonly tocList;
    readonly navBarList;
    public page: Page;

    constructor(page: Page) {
        super(page);
        this.tocList = new Link(page, 'div.feed-toggle ul.nav-pills li.nav-item a.nav-link', 'Feed toggle');
        this.navBarList = new Link(page,'ul.navbar-nav li.nav-item a.nav-link', 'Navigation bar')
    }

}