import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-footer',
  standalone: true,
  imports: [],
  templateUrl: './my-footer.component.html',
  styleUrl: './my-footer.component.css'
})
export class MyFooterComponent {

  @Input() backgroundColor: string = '';
}
