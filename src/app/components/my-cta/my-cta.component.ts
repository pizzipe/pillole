import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'my-cta',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './my-cta.component.html',
  styleUrl: './my-cta.component.css'
})
export class MyCtaComponent {
  @Input() text: string = '';
  @Input() href: string = '';
  @Input() linkText: string = '';
}
