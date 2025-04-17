// In main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';

// Only register in browser context
const platformId = inject(PLATFORM_ID);
if (isPlatformBrowser(platformId)) {
  import('swiper/element/bundle').then(({ register }) => {
    register();
  });
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
