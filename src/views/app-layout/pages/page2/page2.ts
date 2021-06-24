import { css, customElement, html, LitElement } from 'lit-element';
import { translate } from '@stefanholzapfel/lit-translate';
import { sharedStyles } from '../../../../../styles/shared.styles';

@customElement('lit-page2')
export class Page2 extends LitElement {
    static get styles() {
        return [
            sharedStyles,
            // language=CSS
            css``
        ];
    }
    
    protected render() {
        return html`
            <div>
                ${ translate('pages.page2.text') }
            </div>
        `;
    }
}
