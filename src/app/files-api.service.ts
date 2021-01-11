import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const URLNODE = 'http://localhost:3000/file';

@Injectable({
  providedIn: 'root'
})
export class FilesApiService {

  constructor(private http: HttpClient) { }

  postFiles(body : any){
    return this.http.post(URLNODE+'/post',body);
  }

  /* getFile(id : any){
    return this.http.get(URLNODE+'/getFile/'+id);
  } */

  getFiles(){
    return this.http.get(URLNODE+'/getFiles');
  }

  getFile(fileName: string): void {
    this.http.get('http://localhost:3000/files/'+fileName, { responseType: 'blob'}).subscribe(res => {
      window.open(window.URL.createObjectURL(res));
    });
  }
}
