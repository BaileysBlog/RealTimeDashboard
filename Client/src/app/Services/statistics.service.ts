import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService
{


  private _Connection: HubConnection;
  private _ClientUpdate= new BehaviorSubject<number>(0);
  private _ConnectionReady: boolean = false;

  public OnClientUpdate: Observable<number>;

  constructor(private http: HttpClient)
  {

    this.ConfigureEvents();

    this._Connection = new HubConnectionBuilder()
      .withUrl('http://localhost:5000/main')
      .build();

    this._Connection.start().then(() =>
    {

      this._ConnectionReady = true;

      //Begin listening for events!
      this._Connection.on("ClientUpdate", (clients: number) =>
      {
        this._ClientUpdate.next(clients);
      });

      this.RefreshClientCount();
      
    }, (err) =>
    {
      //Announce connection error
    });
  }

  public IsConnectionReady(): boolean
  { 
    return this._ConnectionReady;
  }

  public RefreshClientCount(): void
  {
    if (this.IsConnectionReady())
    { 
      this._Connection.invoke("GetClients");
    }  
  }

  private ConfigureEvents(): void
  { 
    this.OnClientUpdate = this._ClientUpdate.asObservable();
  }

  public GetClients(): Observable<any>
  { 
    return this.http.get('http://localhost:5000/api/client');
  }


}
