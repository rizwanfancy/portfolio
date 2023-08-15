import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  active = 0
  jobs: any[] = [
    {
      Tab: "Emblem",
      Title: "Fullstack developer",
      Date: "March 2022 - Present",
      Description: [
        "Developed and maintained a web-based application using Angular, Node.js, and MongoDB, resulting in improved user experience and increased performance.",
        "Designed and implemented RESTful APIs to support multiple applications, using Node.js and Express.",
        "Built a real-time chat application using WebSockets and Node.js, increasing communication and collaboration among team members.",
        "Implementation of continuous integration and daily backups.",
        "Leading a team of 4 people in the development of a E-commerce platform made in React, Node, and MySQL.",
        "Planning meetings in reports."
      ]
    },

    {
      Tab: "BCM",
      Title: "Frontend developer",
      Date: "October 2020 - Feburary 2022",
      Description: [
        "Developed and maintained web applications using Angular and React.",
        "Implementation CI / CD in AWS. Refactoring and optimizing application load times.",
        "Coding of API requests with RxJS.",
        "Creation of modules with complex reactive forms",
        "Improved website performance by optimizing images and implementing caching techniques.",
        "Collaborated with designers and back-end developers to create responsive and user-friendly web experiences"
      ]
    },
    {
      Tab: "Freelancer",
      Title: "Independent",
      Date: "March 2020 - Present",
      Description: [
        "Implementing continuous improvements, working on frontend and backend.",
        "Creating platforms with Angular, Nodejs, ExpressJS, WordPress programmed with functional, reactive, and object-oriented programming paradigms.",
        "Automation of processes with data structures.",
        "Design layout with SASS, Bootstrap, Materialize, Prime Faces, etc."
      ]
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
