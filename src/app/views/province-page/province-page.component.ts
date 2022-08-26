import { Component, OnInit } from '@angular/core';
import { Province } from 'src/app/model/province.interface';
import { ProvinceService } from 'src/app/service/province.service';


@Component({
  selector: 'app-province-page',
  templateUrl: './province-page.component.html',
  styleUrls: ['./province-page.component.scss']
})
export class ProvincePageComponent implements OnInit {

  constructor(private provinceService: ProvinceService) { }

  ngOnInit(): void {
    this.provinceService.getProvinces().subscribe((data) => {
      this.provinceData = data;
    })
  }

  provinceData: Province[] = [];

}
