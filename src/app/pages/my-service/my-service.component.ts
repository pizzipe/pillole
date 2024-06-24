import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCtaComponent } from '../../components/my-cta/my-cta.component';

@Component({
  selector: 'my-service',
  standalone: true,
  imports: [RouterOutlet, MyCtaComponent],
  templateUrl: './my-service.component.html',
  styleUrl: './my-service.component.css'
})
export class MyServiceComponent {

}
