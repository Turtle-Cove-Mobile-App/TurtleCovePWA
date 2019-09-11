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
        path: "info",
        children: [
          {
            path: "",
            loadChildren: () => import('./pages/info/info.module').then(m => m.InfoPageModule)
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
  { path: "home", loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: "info", loadChildren: () => import('./pages/info/info.module').then(m => m.InfoPageModule) },
  { path: 'tc-tour', loadChildren: './pages/tc-tour/tc-tour.module#TcTourPageModule' },
  { path: 'gw-tour', loadChildren: './pages/gw-tour/gw-tour.module#GwTourPageModule' },
  { path: 'checklist', loadChildren: './pages/checklist/checklist.module#ChecklistPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
