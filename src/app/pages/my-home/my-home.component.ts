import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyPortfolioComponent } from '../../components/my-portfolio/my-portfolio.component';
import { MyCtaComponent } from '../../components/my-cta/my-cta.component';

@Component({
  selector: 'my-home',
  standalone: true,
  imports: [RouterOutlet, MyPortfolioComponent, MyCtaComponent],
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.css'
})
export class MyHomeComponent {

}
