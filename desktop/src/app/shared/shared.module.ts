import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        TranslateModule
    ],
    
})
export class SharedModule {
    static forRoot()/*: ModuleWithProviders*/ {
        return {
            ngModule: SharedModule,
            providers: [{
                provide: TranslateLoader,
                useFactory: (http: Http) => new TranslateStaticLoader(http, 'i18n', '.json'),
                deps: [Http]
            },
            TranslateService],
        };
    }
}
