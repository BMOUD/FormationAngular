import { LoggerService } from './shared/services/logger/logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie a Wookie';
  logoAffiche = true;
  searchValue !: string;

  constructor(private loggerService: LoggerService){}

  rechercherSelfie(valeur: any){
    this.searchValue = valeur
  }
  
  
}

