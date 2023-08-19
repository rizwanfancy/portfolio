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
      Tab: "Contour Software Pvt Ltd.",
      Title: "Senior Software Developer",
      Date: "May 2022 - Present",
      Description: [
        "Developed and maintained a web-based application using Vuejs, .Net Core, and SQL, resulting in improved user experience and increased performance.",
      ]
    },

    {
      Tab: "iSplendid",
      Title: "Senior Software Developer",
      Date: "October 2020 - May 2022",
      Description: [
        "Developed and maintained web applications using Angular and React.",
      ]
    },
    {
      Tab: "Info Access (Ixs)",
      Title: "Software Developer",
      Date: "September 2014 - Oct 2020",
      Description: [
        "Developed and maintained a web-based application using Vuejs, .Net Core, and SQL, resulting in improved user experience and increased performance.",
      ]
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
