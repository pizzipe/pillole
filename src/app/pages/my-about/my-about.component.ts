import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCtaComponent } from '../../components/my-cta/my-cta.component';
import { SanityService } from '../../services/sanity.service';
import { About } from '../../models/about';

@Component({
  selector: 'my-about',
  standalone: true,
  imports: [RouterOutlet, MyCtaComponent],
  templateUrl: './my-about.component.html',
  styleUrl: './my-about.component.css'
})
export class MyAboutComponent implements OnInit {

  about!: About;


  constructor(private sanityService: SanityService ) { }


//   imageUrl(source: any) {
//     return this.sanityService.urlFor(source);
//   }

  ngOnInit(): void {
    this.getAbout();
  }

  async getAbout(): Promise<About>  {
    this.about = await this.sanityService.getAbout();
    return this.about;
  }
}
