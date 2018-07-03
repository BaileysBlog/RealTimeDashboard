import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../Services/statistics.service';
import { Client } from '../Models/client.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];

  constructor(public statsApi: StatisticsService)
  {
    this.statsApi.OnClientUpdate.pipe(switchMap(x => { return this.statsApi.GetClients() })).subscribe(x =>
    {
      this.LoadClients(x);
    });
  }

  private LoadClients(clients:Client[] = null): void
  { 
    if (clients != null)
    { 
      this.clients = clients;
    } else
    { 
      this.statsApi.GetClients().subscribe(data =>
      {
        this.clients = data;
      });
    }
  }

  ngOnInit() 
  {
    this.LoadClients();
  }

}
