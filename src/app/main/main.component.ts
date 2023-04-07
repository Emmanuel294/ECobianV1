import { Component, OnInit } from '@angular/core';
import { LinkT } from '../types/components/links.type';
import { ButtonT } from '../types/components/button.type';
import { PresentationT } from '../types/components/presentation.type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public navVarLinks: Array<LinkT> = [
    {
      link: 'About',
      href: '#',
      tooltip: 'About me'
    },
    {
      link: 'Experience',
      href: '#',
      tooltip: 'Experience'
    },
    {
      link: 'Contact',
      href: '#',
      tooltip: 'Contact me'
    }
  ];

  public navVarButtons: Array<ButtonT> = [
    {
      title: 'Resume',
      link: '#',
      tooltip: 'Download Resume'
    },
  ];

  public presentationContent: PresentationT = {
    presentation: 'Hi my name is',
    mainContent: 'Emmanuel Cobian.',
    content: `Innovative Software Engineer with a good track of software development with  different technologies, 
    Now working on providing different and innovative solutions  with web technologies.`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
