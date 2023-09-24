import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'innov-it';

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  scrollToTeamSection() {
    const teamSection = this.el.nativeElement.querySelector('#team-section');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
