import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../Services/statistics.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients = [];

  constructor(public statsApi: StatisticsService)
  {
    this.statsApi.OnClientUpdate.subscribe(_ =>
    {
      this.LoadClients();
    });
  }

  private LoadClients(): void
  { 
    this.statsApi.GetClients().subscribe(data =>
    {
      this.clients = data;
    });
  }

  ngOnInit() 
  {
    this.LoadClients();
  }

}
