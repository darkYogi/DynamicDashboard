import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'dd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  
  title = 'Dynamic Dashboard';
  logo = '../assets/logo.png';

  constructor(){}

  ngAfterViewInit(): void {}
}
