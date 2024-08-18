import { Observable } from "rxjs";
import {WorldlistModel } from "../../models/worldlist.model";
import { WordlistService } from "../wordlist.service";
import { environment } from "../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class WordlistServiceImpl implements WordlistService {
  private formSubmitted = false;
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

  setFormSubmitted(status: boolean): void {
    this.formSubmitted = status;
  }

  isFormSubmitted(): boolean {
    return this.formSubmitted;
  }

  downloadTxtFile(data : string[]): void {
    const blob = new Blob([data.join('\n')], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wordlist'+Math.random().toFixed(5)+'.txt';
    a.click();
    window.URL.revokeObjectURL(url);
  }

}
