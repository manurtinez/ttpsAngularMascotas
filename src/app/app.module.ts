import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { QRCodeModule } from 'angular2-qrcode';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { AltaDuenoComponent } from './alta-dueno/alta-dueno.component';
import { AltaVeterinarioComponent } from './alta-veterinario/alta-veterinario.component';
import { EditarDuenoComponent } from './editar-dueno/editar-dueno.component';
import { HabilitarVeterinariosComponent } from './habilitar-veterinarios/habilitar-veterinarios.component';
import { HistorialEventosComponent } from './historial-eventos/historial-eventos.component';
import { ModificarMascotaComponent } from './modificar-mascota/modificar-mascota.component';
import { HistorialUnaMascotaComponent } from './historial-una-mascota/historial-una-mascota.component';
import { MascotasVetPendientesComponent } from './mascotas-vet-pendientes/mascotas-vet-pendientes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    AltaDuenoComponent,
    AltaVeterinarioComponent,
    EditarDuenoComponent,
    HabilitarVeterinariosComponent,
    HistorialEventosComponent,
    ModificarMascotaComponent,
    HistorialUnaMascotaComponent,
    MascotasVetPendientesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QRCodeModule,
    NgbModule
  ],
  providers: [HttpClientModule,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
