import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCtaComponent } from '../../components/my-cta/my-cta.component';

@Component({
  selector: 'my-about',
  standalone: true,
  imports: [RouterOutlet, MyCtaComponent],
  templateUrl: './my-about.component.html',
  styleUrl: './my-about.component.css'
})
export class MyAboutComponent {

}
