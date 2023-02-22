import {Component} from './component';

export class Text extends Component {
    public get typeOf(): string {
        return 'text';
    }
}