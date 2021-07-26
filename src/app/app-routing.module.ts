import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { CategoriasComponent } from "./views/admin/categorias/categorias.component";

// admin views
import { PedidosComponent } from "./views/admin/pedidos/pedidos.component";
import { ProdutosComponent } from "./views/admin/produtos/produtos.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { AuthGuard } from './guards/auth-guard.service';
import { CoresComponent } from "./views/admin/configuracao/cores/cores.component";
import { ImagensComponent } from "./views/admin/configuracao/imagens/imagens.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "produtos", component: ProdutosComponent },
      { path: "categorias", component: CategoriasComponent },
      { path: "pedidos", component: PedidosComponent },
      { path: "cores", component: CoresComponent },
      { path: "imagens", component: ImagensComponent },
      { path: "", redirectTo: "pedidos", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "",redirectTo: "auth/login",pathMatch: "full"  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
