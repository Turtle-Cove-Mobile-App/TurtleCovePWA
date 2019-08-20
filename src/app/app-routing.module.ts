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
            loadChildren: "./pages/home/home.module#HomePageModule"
          }
        ]
      },
      {
        path: "info",
        children: [
          {
            path: "",
            loadChildren: "./pages/info/info.module#InfoPageModule"
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
  { path: "home", loadChildren: "./pages/home/home.module#HomePageModule" },
  { path: "info", loadChildren: "./pages/info/info.module#InfoPageModule" }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
