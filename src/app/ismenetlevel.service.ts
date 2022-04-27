import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ismenetlevel} from "./ismenetlevel";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IsmenetlevelService {
  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) {
  }

  public getISmenetlevelek(): Observable<ismenetlevel[]> {
    return this.http.get<ismenetlevel[]>(`${this.apiServerUrl}/ismenetlevel/all`)
  }

  public addISmenetlevel(ismenetlevel: ismenetlevel): Observable<ismenetlevel> {
    return this.http.post<ismenetlevel>(`${this.apiServerUrl}/ismenetlevel/add`, ismenetlevel);
  }

  public updateISmenetlevel(ismenetlevel: ismenetlevel): Observable<ismenetlevel> {
    return this.http.put<ismenetlevel>(`${this.apiServerUrl}/ismenetlevel/update`, ismenetlevel);
  }

  public deleteISmenetlevel(sorszam: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/ismenetlevel/delete/${sorszam}`,
    {responseType: 'text' as 'json'});
  }

  public updateISmenetlevelAr(sorszam: number): Observable<ismenetlevel> {
    return this.http.put<ismenetlevel>(`${this.apiServerUrl}/ismenetlevel/updatear/${sorszam}`, {
      responseType: 'text',
      observe: 'response'
    });
  }

  public getAllAr(aid: number): Observable<ismenetlevel> {
    return this.http.get<ismenetlevel>(`${this.apiServerUrl}/ismenetlevel/getAllAr/${aid}`);
  }


}
