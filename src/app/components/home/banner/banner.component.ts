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

  public description: string =`"I have <span class='underline'>3 years of experience</span> developing systems, interfaces, bots, and technological solutions to make the web a better place. I am dedicated to writing and refactoring clean, reusable, and scalable code in <span class='underline'>Angular, React, NodeJS and ExpressJS</span> and sometimes in <span class='underline'>Python</span> applying good practices and development standards."`
  constructor(
  ) { }

  ngOnInit(): void {
  }


}
