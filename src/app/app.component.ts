import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss']
  styles: []
})
export class AppComponent {
  showTruth = false;
  log = [];


  onToggle(){
    this.showTruth = !this.showTruth;
    this.log.push(new Date());
  }
}
