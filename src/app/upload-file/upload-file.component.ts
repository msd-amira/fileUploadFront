import { Component, OnInit } from '@angular/core';
import { FilesApiService } from '../files-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  filesLink: any;
  dateUpload: any;
  files : any;

  constructor(private apiService: FilesApiService) { }

  async ngOnInit(): Promise<any> {
    this.dateUpload = null;
    this.files = null;
  }

  async selectFiles(event: any): Promise<any> {
    //var files = await event.target.files, i = 0, j = files.length, file, reader;
    this.filesLink = await event.target.files;
    console.log(this.filesLink);

  }

  async uploadFiles(): Promise<any> {

    const formData = new FormData();
    // console.log(this.filesLink);
    for (var i = 0; i < this.filesLink.length; i++) {
      formData.append('files', this.filesLink[i]);
    }
    if (this.dateUpload) {
      let dateUp = Date.parse(this.dateUpload).toString()
      formData.append('date', dateUp);
    } else {
      formData.append('date', Date.now().toString());
    }
    //formData.append('files',this.filesLink);
    console.log(formData);

    this.apiService.postFiles(formData).subscribe(async (res: any) => {
      console.log(res);
    });
    await this.ngOnInit();
      await Swal.fire(
        'File Upload !',
        'File uploaded successfully!',
        'success'
      )

  }

}
