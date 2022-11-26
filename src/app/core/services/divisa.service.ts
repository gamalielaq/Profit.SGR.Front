import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Divisa } from '../models/divisa.model';
const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DivisaService {
  menu = [];

  constructor(
    private http: HttpClient
  ) { 

  }

  listDivisa(): Observable<Divisa[]>  {
    return this.http.get<Divisa[]>(`${baseUrl}/divisa/listar`);
  }

}
