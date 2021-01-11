import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HttpClientModule } from '@angular/common/http' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UploadFileComponent } from './upload-file/upload-file.component';
import { LayoutComponent } from './layout/layout.component';
import { ListFilesComponent } from './list-files/list-files.component';
import { FilesApiService } from './files-api.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    LayoutComponent,
    ListFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [FilesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
