import { Injectable } from '@angular/core';
import { HttpUtilsService } from '../_services/http-utils.service';
import { User } from '../_models/user';

@Injectable()
export class UserServiceService {
  urlGet = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpUtilsService: HttpUtilsService) { }

  getAll(): Promise<Array<User>> {
    const promise = new Promise<Array<User>>((resolve, reject) => {
      this.httpUtilsService.get(this.urlGet, '')
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
    });
    return promise;
  }

}
