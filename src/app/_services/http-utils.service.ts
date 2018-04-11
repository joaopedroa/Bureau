import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpUtilsService {
  constructor(private http: Http) {}

  get(url, authToken: String): Promise<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    if (authToken !== '') {
      headers.append('Authorization',  `Bearer ${authToken}`);
    }
    const options = new RequestOptions({ headers: headers });
    const promise = new Promise<any>((resolve, reject) => {
      this.http
        .get(url, options)
        .toPromise()
        .then(
          res => {
            // Success
            resolve(res.json());
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }

  post(url, body: any, authToken: String) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    if (authToken !== '') {
      headers.append('Authorization',  `Bearer ${authToken}`);
    }
    const options = new RequestOptions({ headers: headers });
    const promise = new Promise<any>((resolve, reject) => {
      this.http
        .post(url, body, options)
        .toPromise()
        .then(
          res => {
            // Success
            resolve(res.json());
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
