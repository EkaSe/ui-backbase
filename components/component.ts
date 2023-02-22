import {Locator, Page} from 'playwright';
import test, {expect} from "@playwright/test";

export abstract class Component {
    protected readonly page: Page;
    protected readonly name: string;
    protected readonly locator: string;

    constructor(page: Page, locator: string, name: string) {
        this.page = page;
        this.name = name;
        this.locator = locator;
    }

    get typeOf(): string {
        return 'component';
    }

    get componentName(): string {
        if (!this.name) {
            throw Error('Provide "name" property to use "componentName"');
        }

        return this.name;
    }

    getLocator(): Locator {
        const locator = this.locator;
        return this.page.locator(locator);
    }

    async click(): Promise<void> {
        await test.step(
            `Clicking ${this.typeOf} with name "${this.name}"`, async () => {

                const locator = this.getLocator();
                await locator.click();
            });
    }

    async shouldBeVisible(): Promise<void> {
        await test.step(
            `Checking that ${this.typeOf} "${this.name}" is visible"`, async () => {

                const locator = this.getLocator();
                await expect(locator).toBeVisible();
            });
    }

    async shouldHaveTexts(text: Array<string>): Promise<void> {
        await test.step(
            `Checking that ${this.typeOf} "${this.name}" has text "${text}"`, async () => {
            }
        );
        const locator = this.getLocator();
        await expect(locator).toHaveText(text);
    }
}