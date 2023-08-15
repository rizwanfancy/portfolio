import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProyectsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;

  projects = [
    {
      Title: "2x School",
      Description: "A Next Generation School Management System application made from scratch with auth module, <span class='underline'>configurable graphics</span>, <span class='underline'>configurable alarms</span>, and <span class='underline'>user management</span>. It also has feedback form logic for parameter configuration.",
      imgs: [
        "assets/images/school/image1.png",
        "assets/images/school/image2.png"
      ],
      Technologies: [
        "Angular",
        "SASS",
        "Angular Material",
        "RxJS"
      ]
    },
    {
      Title: "Best Buy Mall",
      Description: "Best Buy Mall is Online Shopping Mall where you can buy your groceries and household products from your favourite local stores. It has <span class='underline'>online chat, </span, <span class='underline'> &nbsp;order history</span>, <span class='underline'>notification system on number and mail</span>, <span class='underline'>auth</span>, and <span class='underline'>stripe integration for secure payments.</span>",
      imgs: [
        "assets/images/bbm/image1.png",
        "assets/images/bbm/image2.png"
      ],
      Technologies: [
        "Angular",
        "SASS",
        "Material",
        "RxJS",
        "ExpressJS"
      ]
    },
    {
      Title: " Mazhr",
      Description: " Mazhr is a Finnish Intelligent Potential and Talent Management company. that help organizations to build better and more efficient teams by matching their  <span class='underline'>Talent</span> and <span class='underline'>Potentials</span>. It has various installations made from scratch with auth module, <span class='underline'>configurable graphics</span>, <span class='underline'>configurable alarms</span>, <span class='underline'>user management</span>, and <span class='underline'>geolocation with openlayers.</span>",
      imgs: [
        "assets/images/mazhr/image1.png"
      ],
      Technologies: [
        "React",
        "SASS",
        "Material",
        "Babel",
        "NodeJS"
      ]
    },
    {
      Title: "Needle",
      Description: "Needle Music is a pioneer in the digital music industry as it allows users to create and manage their first and only Audiobiography. It built with the <span class='underline'>Spotify SDK</span> Integration.",
      imgs: [
        "assets/images/mazhr/needle.png"
      ],
      demoLink: "https://profile.needlemusic.co/bub",
      Technologies: [
        "React",
        "ChartJS",
        "SASS",
        "NodeJS",
        "Python"
      ]
    }
  ]
  constructor(
  ) { }

  ngOnInit(): void {



  }

  debug() {

    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

}
