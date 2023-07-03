import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { LoggingService } from './loging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.authService.autoLogin();
    this, this.loggingService.printLog(' Hello from AppComponent ngOnInit ');
  }
}
