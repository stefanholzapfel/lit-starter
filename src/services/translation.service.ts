import {Interpolations, Strings, TranslateService} from '@stefanholzapfel/lit-translate';

export class TranslationService {
    public static async init(language: Language): Promise<TranslationService> {
        if (!TranslationService.initialized) {
            TranslateService.init(async lang => (await fetch('/translations/' + lang + '.json' )).json());
            await TranslationService.use(language);
            TranslationService.initialized = true;
            return TranslationService;
        } else {
            console.log('Already initialized TranslateService!');
        }
    }
    
    private static initialized = false;
    
    private static selectedLanguage;

    public static currentLanguage(): Language {
        return TranslationService.selectedLanguage;
    }

    public static async use(language: Language): Promise<Strings> {
        this.selectedLanguage = language;
        return await TranslateService.use(language);
    }
    
    public static translate(translationString: string, interpolations?: Interpolations) {
        return TranslateService.translate(translationString, interpolations);
    }
}

export type Language =
    'en-EN' |
    'de-DE';
