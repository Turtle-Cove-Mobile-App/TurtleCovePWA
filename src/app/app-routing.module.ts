import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./pages/tabs/tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: "gw-tour",
        children: [
          {
            path: "",
            loadChildren: () => import('./pages/gw-tour/gw-tour.module').then(m => m.GwTourPageModule)
          }
        ]
      },
      {
        path: "checklist",
        children: [
          {
            path: "",
            loadChildren: () => import('./pages/checklist/checklist.module').then(m => m.ChecklistPageModule)
          }
        ]
      },
      {
        path: "tc-tour",
        children: [
          {
            path: "",
            loadChildren: () => import('./pages/tc-tour/tc-tour.module').then(m => m.TcTourPageModule)
          }
        ]
      },
      {
        path: "gw-tour",
        children: [
          {
            path: "",
            loadChildren: () => import('./pages/gw-tour/gw-tour.module').then(m => m.GwTourPageModule)
          }
        ]
      },
      {
        path: "checklist",
        children: [
          {
            path: "",
            loadChildren: () => import('./pages/checklist/checklist.module').then(m => m.ChecklistPageModule)
          }
        ]
      },
      {
        path: "tc-tour",
        children: [
          {
            path: "",
            loadChildren: () => import('./pages/tc-tour/tc-tour.module').then(m => m.TcTourPageModule)
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full"
  },
  { path: 'info', loadChildren: './pages/info/info.module#InfoPageModule' },
  { path: 'events', loadChildren: './pages/events/events.module#EventsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
