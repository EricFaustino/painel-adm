import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views

// auth views
import { LoginComponent } from "./views/auth/login/login.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";


// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { IndexNavbarComponent } from "./components/navbars/index-navbar/index-navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ProdutosComponent } from "./views/admin/produtos/produtos.component";
import { CategoriasComponent } from "./views/admin/categorias/categorias.component";
import { PedidosComponent } from "./views/admin/pedidos/pedidos.component";

//Color picker
import { ColorPickerModule } from 'ngx-color-picker';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/storage";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';


//Guard
import { AuthGuard } from "./guards/auth-guard.service";
import { AuthService } from "./guards/verificador";
import { CoresComponent } from './views/admin/configuracao/cores/cores.component';
import { ImagensComponent } from './views/admin/configuracao/imagens/imagens.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    HeaderStatsComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    IndexNavbarComponent,
    AdminComponent,
    AuthComponent,
    LoginComponent,
    IndexComponent,
    ProdutosComponent,
    CategoriasComponent,
    PedidosComponent,
    CoresComponent,
    ImagensComponent
    
  ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, 
    FormsModule, 
    AngularFireStorageModule, 
    ColorPickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
