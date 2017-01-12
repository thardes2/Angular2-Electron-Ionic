import {Component, OnInit} from '@angular/core';
declare function mini();
declare function maxi();
declare function close();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  subscription = null;
  constructor() {
  }
  ngOnInit(): void {
  }

  public modalOpen()
  {

  }

  public close() {
  }

  public minimizeWindow() {
    mini();
  }
  public maximizeWindow() {
    maxi();
  }
  public closeWindow() {
    close();
  }
}
