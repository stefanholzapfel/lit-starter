import { css } from 'lit-element';

// language=CSS
export const styles = css`
    :host {
        height: 100%;
        display: grid;
        grid-template-columns: 5rem auto 12rem;
        grid-auto-flow: column;
        grid-column-gap: 0.5rem;
    }
    
    .bold {
        font-weight: bold;
    }
    
    a {
        cursor: pointer;
    }
`;
