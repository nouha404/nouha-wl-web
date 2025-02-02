import { Observable } from "rxjs";
import {WorldlistModel } from "../models/worldlist.model";

export interface WordlistService {
  createInformation(createInformation:WorldlistModel[]): Observable<any>;
  findAll(): Observable<WorldlistModel[]>;
  getWorldList(): Observable<string[]>;

  setFormSubmitted(status: boolean): void;
  isFormSubmitted(): boolean;
  downloadTxtFile(data : string[]):void;
}
