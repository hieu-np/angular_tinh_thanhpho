import { Component, OnInit, Input } from '@angular/core';
import { Province } from 'src/app/model/province.interface';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.scss'],
})
export class ProvinceComponent implements OnInit {
  @Input('provinceData') customers: Province[] = [];
  
  constructor() { /* TODO document why this constructor is empty */ }
  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  selected!: Province;
  
}
