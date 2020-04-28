import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  validUserName = false;
  serverCreationStatus = "No server created"
  serverName ='TestServer';
  userName = 'Enter Username here';
  serverCreated = false;
  servers=  ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;

    }, 2000);
  }



  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated =true;
    this.serverCreationStatus = "Server was created, name is " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any){
    this.serverName= (<HTMLInputElement>event.target).value;
  }

  checkUsername(event:any){
    if((<HTMLInputElement>event.target).value.length == 0){
      this.validUserName = false;
  }else this.validUserName = true;
  }

  resetUsername(){
    this.userName = '';
  }

}
