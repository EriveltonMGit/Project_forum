import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// imports
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppleComponent } from './apple/apple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    RouterOutlet,
    LoginComponent,
    CadastroComponent,
    AppleComponent ,
  
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ifooMe';
}
