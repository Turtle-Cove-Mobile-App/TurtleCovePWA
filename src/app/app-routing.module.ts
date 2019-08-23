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
  { path: "info", loadChildren: () => import('./pages/info/info.module').then(m => m.InfoPageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
