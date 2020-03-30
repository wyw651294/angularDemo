import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movie',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../movie/movie.module').then(m => m.MoviePageModule)
          }
        ]
      },
      {
        path: 'introduce',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../introduce/introduce.module').then(m => m.IntroducePageModule)
          }
        ]
      },
      {
        path: 'instructions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../instructions/instructions.module').then(m => m.InstructionsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/movie',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/movie',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
