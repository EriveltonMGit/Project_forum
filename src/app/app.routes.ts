import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { AndroidComponent } from './android/android.component';
import { AppleComponent } from './apple/apple.component';
import { WindowsComponent } from './windows/windows.component';
// import { ContentComponent } from './content/content.component';



export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona a rota padrão inicial
    { path: 'login', component:LoginComponent},
    { path: 'cadastro', component: CadastroComponent },
    { path: 'home', component: HomeComponent },
    { path: 'android', component: AndroidComponent  },
    { path: 'apple', component: AppleComponent },
    { path: 'windows', component: WindowsComponent },
    // { path: 'content', component: ContentComponent },
    

   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }