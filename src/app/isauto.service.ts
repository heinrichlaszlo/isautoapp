import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Isauto} from "./isauto";
import {ismenetlevel} from "./ismenetlevel";

@Injectable({
  providedIn: 'root'
})
export class IsautoService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

    public getAutos(): Observable<Isauto[]> {
    return this.http.get<Isauto[]>(`${this.apiServerUrl}/isauto/all`)
    }
  public updateISautoAr(id: number): Observable<Isauto> {
    return this.http.put<Isauto>(`${this.apiServerUrl}/isauto/updateOsszAr/${id}`, {
      responseType: 'text',
      observe: 'response'
    });
  }
  public updateISautoKm(id: number): Observable<Isauto> {
    return this.http.put<Isauto>(`${this.apiServerUrl}/isauto/updateOsszKm/${id}`, {
      responseType: 'text',
      observe: 'response'
    });
  }
}
