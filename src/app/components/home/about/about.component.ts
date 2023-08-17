import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  paragraphs: string[] = [`Experienced Full Stack Developer with a demonstrated history of <span class='underline'> 8+ years </span> in the software development industry. Skilled in a variety of technologies including <span class='underline'> VueJs, Angular, React, JavaScript, TypeScript, and .Net Core </span>. Proficient in both front-end and back-end development, with a strong focus on performance enhancement and code optimization. I have successfully led teams to achieve technical and management goals, delivering innovative solutions that have a positive impact. My expertise spans across API development, deployment, and utilizing various UI kits such as <span class='underline'> Aggrid, Devexpress, Bootstrap, and Material UI </span>. I am well-versed in version control systems like Github and Gitlab, as well as project management tools like Jira. Always eager to learn new technologies and continuously improve existing code.`]
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
