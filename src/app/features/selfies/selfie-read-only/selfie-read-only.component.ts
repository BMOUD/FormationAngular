import { Selfie } from 'src/app/models/selfie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selfie-read-only',
  templateUrl: './selfie-read-only.component.html',
  styleUrls: ['./selfie-read-only.component.css']
})
export class SelfieReadOnlyComponent implements OnInit {
  @Input()
  public selfie!: Selfie

  constructor() { }

  ngOnInit(): void {
  }

}
