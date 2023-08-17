import { Component } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rizwan-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {
  }
  ngOnInit(): void {
    this.titleService.setTitle("Rizwan Anwer | Full-Stack Developer");
    this.metaService.addTags([
      {
        name: 'keywords', content:
          `Frontend, 
      MEAN Stack Developer , 
      MERN Stack Development, 
      Full-Stack Developer, 
      Software Engineer, 
      Software developer` },
      {
        name: 'description', content: `I'm an experienced software engineer well-versed in both MEAN and MERN stacks, which means I really understand web development. I have experience on front-end Framework/Library like Angular, Vue.js, and React, as well as back-end technologies like C#, Node.js, and Express.` },
    ]);

    AOS.init();
  }
}
