import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'my-navigation',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './my-navigation.component.html',
  styleUrl: './my-navigation.component.css'
})
export class MyNavigationComponent {

}
