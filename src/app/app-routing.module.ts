import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ListFilesComponent } from './list-files/list-files.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  {path : '', 
  component : LayoutComponent,
  children : [
    {path : '', component : UploadFileComponent },
    {path : 'listFiles', component : ListFilesComponent },
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
