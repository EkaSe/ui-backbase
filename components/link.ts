import {Component} from './component';

export class Link extends Component {
    public get typeOf(): string {
        return 'link';
    }
}