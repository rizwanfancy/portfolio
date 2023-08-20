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
        "Designed and implemented RESTful APIs to support multiple applications, using .Net Core",
        `Attend Daily Scrum meeting to discuss the daily Task and provide solution to developer`,
        `Help other developers to achive their daily basis task.`
      ]
    },

    {
      Tab: "iSplendid",
      Title: "Senior Software Developer",
      Date: "October 2020 - May 2022",
      Description: [
        `Handle multiple projects and lead the teams`,
        "Developed and maintained web applications using Angular, React.",
        `Designed and implemented RESTful APIs to support multiple applications, using .Net Core, Nodejs`,
        `Mentor junior developers and provide my feedback for their career.`
      ]
    },
    {
      Tab: "Info Access (Ixs)",
      Title: "Software Developer",
      Date: "September 2014 - Oct 2020",
      Description: [
        `Handle multiple projects and lead the teams`,
        `Provide Client support for their technical query`,
        `Assist team about their query and provide solution`,
        `Task management`,
        "Developed and maintained web applications using Angular.",
      ]
    }
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
