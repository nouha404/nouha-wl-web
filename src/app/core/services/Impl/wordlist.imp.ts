import { Observable } from "rxjs";
import {WorldlistModel } from "../../models/worldlist.model";
import { WordlistService } from "../wordlist";
import { environment } from "../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class WordlistImp implements WordlistService {

  private API_URL = `${environment.API_URL}`
  constructor(private http:HttpClient) {}

  createInformation(createInformation: WorldlistModel[]): Observable<any> {
    return this.http.post<WorldlistModel[]>(`${this.API_URL}/informations/`,createInformation);
  }
  findAll(): Observable<WorldlistModel[]> {
    return this.http.get<WorldlistModel[]>(`${this.API_URL}/informations/`);
  }

  getWorldList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/generate/`);
  }



}
