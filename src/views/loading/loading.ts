import '../../components/spinner-overlay';

import {customElement, state} from 'lit/decorators.js';
import {until} from 'lit/directives/until.js';
import {TranslationService} from '../../services/translation.service';
import {styles} from './loading.styles';
import {RouterService} from '../../services/router.service';
import {installMediaQueryWatcher} from 'pwa-helpers/media-query';
import {globalStateService, setGlobalState, State} from '../../services/state';
import {LitElementStateService} from '@stefanholzapfel/lit-state';
import { registerSW } from 'virtual:pwa-register';
import {html, LitElement} from 'lit';
import {registerIconLibrary} from '@shoelace-style/shoelace';
import {AppConfig} from '../../../app.config';

@customElement('lit-loading')
export class Loading extends LitElement {

    @state()
    private initializing: Promise<any> = null;

    @state()
    private newVersion = false;

    private reloadServiceWorker: (reloadPage?: boolean) => Promise<void>;

    static get styles() {
        return [
            styles
        ];
    }

    protected render() {
        if (this.initializing) {
            return html`
                ${until(this.initializing.then( finished => {
                            return html`<lit-header></lit-header>`;
                        }), '') }
                <div slot="router" id="router-outlet"></div>
                ${until(this.initializing.then( finished => {
                            return html`<lit-footer></lit-footer>`;
                        }),
                        html`<lit-spinner-overlay></lit-spinner-overlay>`)}
            `;
        }
    }

    protected firstUpdated() {
        this.reloadServiceWorker = registerSW({
            onNeedRefresh: () => {
                this.newVersion = true;
                console.log("New version available!");
            },
            onOfflineReady: () => {
                console.log('Show offline prompt!');
            }
        });

        setGlobalState(
            new LitElementStateService<State>({
                app: {
                    mobile: false,
                    language: 'en-EN',
                    previousRoute: '/',
                    currentRoute: '/',
                }
            },
            {
                global: true
            })
        );
        installMediaQueryWatcher(
            `(max-width: 650px)`,
            mediaQueryMatches => globalStateService.set({
                app: {
                    mobile: mediaQueryMatches
                }
            })
        );
        registerIconLibrary('fa', {
            resolver: name => {
                const filename = name.replace(/^fa[rbs]-/, '');
                let folder = 'regular';
                if (name.substring(0, 4) === 'fas-') folder = 'solid';
                if (name.substring(0, 4) === 'fab-') folder = 'brands';
                return `${AppConfig.FONTAWESOME_URL}${folder}/${filename}.svg`;
            },
            mutator: svg => svg.setAttribute('fill', 'currentColor')
        });
        this.initializing = Promise.all([
            import('../app-layout/footer/footer'),
            import('../app-layout/header/header'),
            import('../app-layout/pages/main/main'),
            import('../app-layout/pages/page1/page1'),
            import('../app-layout/pages/page2/page2'),
            import('@shoelace-style/shoelace/dist/components/icon/icon.js'),
            TranslationService.init(globalStateService.state.app.language)
        ]).then(() => {
            const outlet = (this as any).shadowRoot.getElementById('router-outlet');
            RouterService.init(outlet);
        });
    }

    private installNewVersion() {
        this.reloadServiceWorker();
    }
}
