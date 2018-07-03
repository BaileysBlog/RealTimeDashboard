import { Component } from '@angular/core';
import { StatisticsService } from './Services/statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private statsApi: StatisticsService)
  { 
    
  }
}
