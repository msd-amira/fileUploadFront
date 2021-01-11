import { Component, OnInit } from '@angular/core';
import { FilesApiService } from '../files-api.service';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css']
})
export class ListFilesComponent implements OnInit {

  listFiles: any[] = new Array();
  now: any;
  dateSearch : any;

  constructor(private apiService: FilesApiService) { }

  async ngOnInit(): Promise<any> {

    this.now = Date.now();
    console.log(this.now);

    this.apiService.getFiles().subscribe(
      async (res: any) => {
        console.log(res);
        this.listFiles = await res;
      },
      async (err: any) => {
        console.log(err);
      }
    )
  }

  viewFile(name: any) {
    console.log(name);
    this.apiService.getFile(name);

  }

  async searchFile() : Promise<any>{
    let newList : any[] = new Array();
    console.log(this.dateSearch);
   this.apiService.getFiles().subscribe(
      async (res: any) => {
        this.listFiles = await res;
      
    this.listFiles.forEach( async file => {
      
      let dateSearch = await this.dateSearch.split("-");

      let date =new Date( parseInt(file.datePost));
      let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
      let month = months[date.getMonth()];
      let year = date.getFullYear();
      console.log('file');
      
      console.log(year +'=='+ dateSearch[0] );
      console.log(month +'=='+ dateSearch[1]);
      
      
      if (year == dateSearch[0] && month == dateSearch[1]){
        newList.push(file);
      }
    });
    this.listFiles =  newList;
  });
  }

}
