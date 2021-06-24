import { customElement, html, LitElement } from 'lit-element';
import { translate } from '@stefanholzapfel/lit-translate';
import { sharedStyles } from '../../../../../styles/shared.styles';
import { styles } from './main.styles';

@customElement('lit-main')
export class Main extends LitElement {
    static get styles() {
        return [
            sharedStyles,
            styles
        ];
    }
    
    protected render() {
        return html`
            <div>
                ${ translate('pages.main.welcome') }
            </div>
    `;
    }
}
