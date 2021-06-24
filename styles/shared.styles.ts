import { css } from 'lit';

// language=CSS
export const sharedStyles =
    css`
        .bold {
            font-weight: bold;
        }
        
        a {
            cursor: pointer;
        }

        .grid-v-center {
            align-self: center;
        }
        
        .grid-h-right {
            justify-self: right;
        }

        .grid-h-center {
            justify-self: center;
        }
        
        .default-body {
            padding: var(--default-padding);
        }
    `;
