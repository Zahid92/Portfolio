import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { Project } from './models/project';
import { Certificate } from './models/certificate';


@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})

export class ProjectsModule {
  Projects!: Project[];
  Certificates!: Certificate[];
  
 }
