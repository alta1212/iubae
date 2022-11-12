import { Component, OnInit } from '@angular/core';
import { GuardsService } from './guards/guards.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'bae';
  login=false;
  constructor(public GuardsService: GuardsService) { }

  ngOnInit() { 
    if(location.pathname=='/'||location.pathname=='/khumphaibae')
    this.login=true
  
  }
}
