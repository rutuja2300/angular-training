import { Routes } from '@angular/router';
import { RatingComponent } from './about/rating/rating.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { FeedbackComponent } from './about/feedback/feedback.component';

export const routes: Routes = [
  //   {
  //     path: '',
  //     component: HomeComponent,
  //   },
  //   {
  //     path: 'about',
  //     component: AboutComponent,
  //     children: [
  //       {
  //         path: 'rating',
  //         component: AboutComponent,
  //       },
  //       {
  //         path: 'feedback',
  //         component: FeedbackComponent,
  //       },
  //     ],
  //   },

  // lazy loading
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
    children: [
      {
        path: 'rating',
        loadComponent: () =>
          import('./about/rating/rating.component').then(
            (m) => m.RatingComponent
          ),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./about/feedback/feedback.component').then(
            (m) => m.FeedbackComponent
          ),
      },
    ],
  },
];
