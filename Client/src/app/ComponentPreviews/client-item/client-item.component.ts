import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../Models/client.model';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {


  @Input() Client: Client;


  public GetIconName(): string
  { 
    let osFamilyStripped = (this.Client.osFamily.replace(/[0-9]/g, '')).trim().toLowerCase();
    return osFamilyStripped;
  }

  constructor() { }

  ngOnInit()
  {

  }

}
