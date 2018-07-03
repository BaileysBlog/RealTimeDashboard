import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { StatisticsService } from '../Services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
        return [
          { title: 'Connected Clients', cols: 1, rows: 1 },
          { title: 'Cpu Usage', cols: 1, rows: 1 },
          { title: 'Memory Usage', cols: 1, rows: 1 },
          { title: 'Database Information', cols: 1, rows: 1 }
        ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private statsApi: StatisticsService)
  {
    
  }
}
