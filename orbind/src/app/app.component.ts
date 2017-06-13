import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orbind';

searchValue:string = '';

getMeData(){
  let currentDate = new Date();
  var data = currentDate.getFullYear();
   var strTime = data - 2017;
    return strTime + ' years old app';
} 

  clearSearch() {
   window.location.reload();
  }
    
};


