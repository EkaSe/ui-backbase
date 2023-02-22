import allure from 'allure-commandline';
import {Component} from './component';

export class Button extends Component {
    public get typeOf(): string {
        return 'button';
    }

    public hover(): void {
        allure.step(
            `Hovering over ${this.typeOf} with name "${this.name}"`
        );
        const locator = this.getLocator();
        locator.hover();
    }

    public double_click(): void {
        allure.step(
            `Double clicking ${this.typeOf} with name "${this.name}"`
        );
        const locator = this.getLocator();
        locator.dblclick();
    }
}