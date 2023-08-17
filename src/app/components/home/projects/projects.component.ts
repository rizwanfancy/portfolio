import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class projectsComponent implements OnInit {

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
      Title: "Cis Infinity",
      Description: "CIS Infinity is Vendor based (Utilities) billing management system, which is utilized in Canada, North America",
      demoLink: "https://cisv5dev.infinitycis.com/",
      imgs: [
        "assets/Projects/CisInfinity.png",
      ],
      Technologies: [
        "Vuejs",
        ".Net Core",
        "DevExpress",
        "SQL"
      ],
    },
    {
      Title: "NewQuantum",
      Description: `NewQuantum “Fintech as a Service provider”, offering financial advisers and their clients smart 
      technology, unrivalled support and exceptional service for a modern, efficient way to manage client 
      investment portfolios`,
      demoLink: 'https://dev-app.newquantum.com/',
      imgs: [
        "assets/Projects/NewQuantum-App.png",
        "assets/Projects/NQ_Client_Portal.png"
      ],
      Technologies: [
        "Angular",
        ".Net Core",
        "DevExpress",
        "React",
        "SQL",
        "Entity Framework",
        "Dapper"
      ],
    },
    {
      Title: "Splendid Accounts",
      Description: `Splendid Accounts offers an online accounting and inventory management solution in Pakistan, 
      specifically designed for small and medium-sized businesses`,
      demoLink: 'https://app.splendidaccounts.com/',
      imgs: [
        "assets/Projects/Splendid_Acconts-App.png"
      ],
      Technologies: [
        "Angular",
        ".Net Core",
        "SQL",
        "Entity Framework",
      ],
    },
    {
      Title: "ShipKardo",
      Description: `Order managment application which takes the order from the connected stores and push it delivery partner so they can pick and drop order without any manual piece of work.`,
      demoLink: "https://www.shipkardo.pk/",
      imgs: [
        "assets/Projects/ShipKardo.png"
      ],
      Technologies: [
        "Angular",
        "TypeScript",
        "Nodejs",
        "ExpressJs",
        "MongoDb"
      ]
    },
    {
      Title: "Eduman / Edap",
      Description: `Empowering Schools in Karachi, this project revolutionizes education management. It unifies 
      academics, fees, parents' engagement, HR, and introduces seamless online classes through ZOOM & 
      JITSI integration`,
      demoLink: "http://edap.com.pk/",
      imgs: [
        "assets/Projects/Eduman.png",
        "assets/Projects/Edap-Home.png"
      ],
      Technologies: [
        "Angular",
        "TypeScript",
        ".net Core",
        "SAS",
        "SQL",
        "Telerik"
      ]
    },
    {
      Title: "Driving License",
      Description: `Complete microservice web-based architecture along with web and mobile frontends for public and 
      internal staffs. Replaced the old offline system with centralized database system, now people of Sindh 
      can issue, renew their driving licenses from anywhere and any branch of Sindh. It consists of 
      integrations with various companies like NADRA, Jazz and TCS.`,
      demoLink: "https://dls.gos.pk/",
      imgs: [
        "assets/Projects/DLS-Application.png",
        "assets/Projects/DLS_Portal.png"
      ],
      Technologies: [
        "DotNet",
        "Windows Form",
        "SQL",
        "Telerik"
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
