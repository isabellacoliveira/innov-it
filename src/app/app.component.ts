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
  scrollToQuemSomosSection() {
    const teamSection = this.el.nativeElement.querySelector('#quem-somos-section');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToTopSection() {
    const teamSection = this.el.nativeElement.querySelector('#top-section');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToFaleConoscoSection() {
    const teamSection = this.el.nativeElement.querySelector('#fale-conosco-section');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }

    
  }
}
