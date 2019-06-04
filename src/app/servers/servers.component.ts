import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedNewServer = false;
  serverCreationStatus = "The server was not created.";
  serverName = "";
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];

  constructor() { 

    setTimeout( () => {
      this.allowedNewServer = true;
    } ,2000);

  }

  ngOnInit() {
  }

  onCreationServer()
  {
    this.serverCreated = true;
    this.serverCreationStatus = "The server was created."
    this.servers.push(this.serverName);
    console.log(this.serverName);
  }

  onUpdateServerName(event)
  {
    console.log(event);
    console.log(event.target.value);
    this.serverName = event.target.value;
  }

}
