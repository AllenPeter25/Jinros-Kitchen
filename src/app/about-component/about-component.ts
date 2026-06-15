import {AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-about-component',
  imports: [
    CommonModule
  ],
  templateUrl: './about-component.html',
  styleUrl: './about-component.less',
  standalone: true
})
export class AboutComponent implements AfterViewInit{

  @ViewChild("experience")
  experienceIcon!: TemplateRef<unknown>

  @ViewChild("certified")
  certifiedIcon!: TemplateRef<unknown>

  cardData: {
    title?: string,
    description?: string,
    icon?: TemplateRef<unknown>
  }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cardData = [{
      title: "5 Years",
      description: "of Culinary Experience",
      icon: this.experienceIcon
    },
      {
        title: "FSSAI",
        description: "Certified Cloud Kitchen",
        icon: this.certifiedIcon
      }]

    this.cdr.detectChanges();
  }
}
