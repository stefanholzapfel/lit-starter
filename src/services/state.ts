import {Language} from './translation.service';

import {LitElementStateService} from '@stefanholzapfel/lit-state';

export interface State {
    app: {
        mobile: boolean;
        language: Language;
        previousRoute: string;
        currentRoute: string;
    }
}

export let globalStateService: LitElementStateService<State>;

export function setGlobalState(_globalStateService: LitElementStateService<State>) {
    globalStateService = _globalStateService;
}
