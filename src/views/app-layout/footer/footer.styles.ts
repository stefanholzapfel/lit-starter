import { css } from 'lit-element';

// language=CSS
export const styles = css`
    :host {
        display: flex;
        width: 100%;
        height: 100%;
        background-color: white;
        align-items: center;
        justify-content: start;
    }
    
    span {
        padding-left: calc(var(--default-padding) / 2);
    }
`;
