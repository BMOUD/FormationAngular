import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {

  @ViewChild('zoneRecherche', {static:false})
  searchInput!:ElementRef;

  @Output()
  launchSearch:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  rechercher() {
    const searchValue = this.searchInput.nativeElement.value; 
    this.launchSearch.emit(searchValue);
  }

}
