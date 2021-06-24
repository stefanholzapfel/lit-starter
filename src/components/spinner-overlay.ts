import './spinner';

import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('lit-spinner-overlay')
export class SpinnerOverlay extends LitElement {
    static get styles() {
        // language=CSS
        return css`
        :host {
            position: absolute;
            top: 0;
            left: 0;
            display: grid;
            place-items: center;
            width: 100%;
            height: 100%;    
            overflow: hidden;
        }
        .spinner-background {
            z-index: 0;
            position: absolute;
            top: 0;
            left: 0;
            background-color: grey;
            opacity: 0.5;
            width: 100%;
            height: 100%;
        }
        .spinner-container {
            position: relative;
            width: 40%;
        }
                
        .spinner-container:after {
            content: "";
            display: block;
            padding-bottom: 100%;
        }

        lit-spinner {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    `;
    }

    protected render() {
        return html`
          <div class="spinner-container">
            <lit-spinner>Loading...</lit-spinner>
          </div>
          <div class="spinner-background"></div>
    `;
    }
}
