import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from './shared/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class IdentidadeServiceService {
  urlDominio: string;

  constructor(private apiService: ApiService) {
    this.urlDominio = 'https://localhost:5001'
}

  public recuperarPessoas(): Observable<any> {
    return this.apiService
        .get(`${this.urlDominio}/api/Pessoa/pessoas`)
        .pipe(
            map((res: any) => res.data),
            catchError((error) => throwError(error))
        )
}
}
