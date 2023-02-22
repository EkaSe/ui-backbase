import {Component} from './component';
import test from '@playwright/test';

export class Input extends Component {
    get typeOf(): string {
        return 'input';
    }

    async fill(value: string) {

        await test.step(`Filling ${this.typeOf} "${this.componentName}" to value "${value}"`, async () => {
            const locator = this.getLocator();
            await locator.fill(value);
        });
    }
}
