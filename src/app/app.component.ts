import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
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
  footerColor: string = 'defaultColor';


  constructor(private router: Router) {}


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateFooterColor(event.urlAfterRedirects);
      }
    });
  }

  private updateFooterColor(url: string) {
    if (url === '/home' || url === '/about' || url === '/service' || url === '/work') {
      this.footerColor = 'white';
    } else {
      this.footerColor = '#f9f9f9';
    }
  }
}
