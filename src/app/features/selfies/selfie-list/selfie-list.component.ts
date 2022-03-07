import { SelfieService } from './../../../shared/services/selfies/selfie.service';
import { LoggerService } from './../../../shared/services/logger/logger.service';
import { Component, Input, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {
  
  selfies !: Selfie[];

  @Input()
  set filtre(valeur: string){
    console.log('Selfie-list', valeur);
  }

  constructor(private loggerService: LoggerService, private selfieService: SelfieService) {

   }

  ngOnInit(): void {
    this.selfies = this.selfieService.getAll();
  }

}
