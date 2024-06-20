import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreFeatureModule, StoreModule, provideStore } from '@ngrx/store';
import { productReducer } from './Store/product/product.reducer';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideStore(),
    importProvidersFrom(StoreModule.forRoot({
        product: productReducer
    })),
    provideEffects()
],
};
