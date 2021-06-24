import {css, html, LitElement} from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-spinner')
export class Spinner extends LitElement {
    static get styles() {
        //language=CSS
        return css`
            :host {
                position: relative;
                top: 0;
                left: 0;
                display: grid;
                place-items: center;
                width: 100%;
                height: 100%;
            }

            .spinner,
            .spinner:after {
                z-index: 1;
                border-radius: 50%;
            }

            .spinner {
                position: relative;
                width: 85%;
                height: 85%;
                transform: rotateZ(360deg);
                animation: spin 1.1s infinite linear;
            }

            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `;
    }

    @property({ type: String })
    public thickness = '1.1';

    protected render() {
        return html`<div class="spinner" style=${ styleMap({
            borderTop: `${ this.thickness }em solid rgba(255, 255, 255, 0.2)`,
            borderRight: `${ this.thickness }em solid rgba(255, 255, 255, 0.2)`,
            borderBottom: `${ this.thickness }em solid rgba(255, 255, 255, 0.2)`,
            borderLeft: `${ this.thickness }em solid var(--color-primary)`
        })}></div>`;
    }
}
