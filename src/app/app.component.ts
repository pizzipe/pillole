import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNavigationComponent } from './components/my-navigation/my-navigation.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyNavigationComponent, MyFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pillole';
}
