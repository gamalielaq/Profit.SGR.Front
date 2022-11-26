import { Component, OnInit } from '@angular/core';
import { Divisa } from 'src/app/core/models/divisa.model';
import { DivisaService } from 'src/app/core/services/divisa.service';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.scss']
})
export class DivisaComponent implements OnInit {

  public divisas: Divisa[] = [];

  constructor(
    private _divisaService: DivisaService
  ) { }

  ngOnInit(): void {
    this.listDivisas();
  }

  private listDivisas() {
    this._divisaService.listDivisa().subscribe((response) => {
      this.divisas = response;
    });
  }

}