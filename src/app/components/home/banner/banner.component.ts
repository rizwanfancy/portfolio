import { Component, OnInit, AfterViewInit } from '@angular/core';

import { trigger, state, style, animate, transition, stagger, query } from "@angular/animations"

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  public description: string = `Experienced Full Stack Developer with <span class='underline'> 8+ years </span> 
  in software development. Proficient in <span class='underline'> VueJs, Angular, React, JavaScript, 
  TypeScript, and .Net Core </span> . Skilled in front-end, back-end, performance optimization, 
  and team leadership. Expertise in API development, UI kits like Aggrid, Devexpress, Bootstrap, Material UI. Familiar with Github, Gitlab, Jira. Dedicated to learning and improving code.`
  constructor(
  ) { }

  ngOnInit(): void {
  }


}
