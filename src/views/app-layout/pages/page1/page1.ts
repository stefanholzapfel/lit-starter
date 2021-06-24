import { css, customElement, html, LitElement } from 'lit-element';
import { translate } from '@stefanholzapfel/lit-translate';

import { sharedStyles } from '../../../../../styles/shared.styles';

@customElement('lit-page1')
export class Page1 extends LitElement {
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
                ${ translate('pages.page1.text') }
            </div>
        `;
    }
}
