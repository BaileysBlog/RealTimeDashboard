import { Component } from '@angular/core';
import { StatisticsService } from './Services/statistics.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private statsApi: StatisticsService, private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer)
  { 
    this.matIconRegistry.addSvgIcon(
      "apple-ios",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/apple-ios.svg")
    );
  }
}
