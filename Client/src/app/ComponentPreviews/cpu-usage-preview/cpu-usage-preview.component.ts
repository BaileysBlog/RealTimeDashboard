import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../../Services/statistics.service';

@Component({
  selector: 'cpu-usage-preview',
  templateUrl: './cpu-usage-preview.component.html',
  styleUrls: ['./cpu-usage-preview.component.css']
})
export class CpuUsagePreviewComponent implements OnInit {

  constructor(public statsApi: StatisticsService) { }

  ngOnInit() {
  }

}
