import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePnj } from '../DTOs/create-pnj.dto';

@Injectable({
  providedIn: 'root'
})
export class PnjService {

  constructor(private http:HttpClient) { }


  createNewPnj(pnj:CreatePnj){
    this.http.post(`http://localhost:3000/character`,pnj)
  }
}
