import { css } from 'lit';

// language=CSS
export const styles =
    css`
        :host {
            height: calc(100vh - 2rem);
            width: calc(100vw - 2rem);
            margin: var(--default-padding);
            display: grid;
            grid-template-rows: 4rem auto 2rem;
        }

        .router {
            height: 100vh;
            width: 100vw;
            overflow: hidden;
        }
        
        @media (max-width: 650px) {

        }
    `;
