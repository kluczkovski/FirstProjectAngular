import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: '../server/server.component.html' 
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'Off';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Off' : 'Online'; 
    }

    getStatusServer(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'Off' ? 'red' : 'green';
    }


}