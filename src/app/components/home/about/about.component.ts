import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  paragraphs: string[] =
    [
      `Accomplished <span class='underline'> Full Stack Developer </span> with over <span class='underline'> 8 years </span> of crafting digital solutions. Proficient in <span class='underline'> VueJs, Angular, React, JavaScript, TypeScript, HTML/CSS, .Net Core, NodeJs, and ExpressJs. </span> 🚀`,
      `🔧 Skilled in designing APIs, managing deployments, and working with UI kits like Aggrid, Devexpress, Bootstrap, and Material UI. Experienced in collaboration tools like GitHub, Gitlab, and Jira. 🛠️`,
      `🎯 Recognized for leading teams to technical and managerial success. Known for optimizing code performance and introducing innovative features. 🌟`,
      `🛠️ Projects include enhancing utility systems, developing fintech solutions, creating accounting and inventory platforms, facilitating online donations, and improving education management tools. 💡`
    ]
  skills: string[] =
    [
      '.Net Core',
      'Nodejs',
      'Angular',
      'VueJs',
      'React',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
      'Linq',
      'ExpressJs',
      'SQL',
      'MongoDb',
      'Entity Framework',
      'Dapper/Telerik'
    ]

  otherSkills: string[] =
    [
      'REST Development',
      'Deployment',
      'IIS',
      'Redis',
      'Aggrid',
      'Devexpress Ui Kit',
      'Bootstrap',
      'Material',
      'Github',
      'Gitlab',
      'Azure',
      'Jira',
    ]
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
