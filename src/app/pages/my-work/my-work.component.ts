import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyPortfolioComponent } from '../../components/my-portfolio/my-portfolio.component';
import { MyCtaComponent } from '../../components/my-cta/my-cta.component';

@Component({
  selector: 'my-work',
  standalone: true,
  imports: [RouterOutlet, MyPortfolioComponent, MyCtaComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.css'
})
export class MyWorkComponent {

}
