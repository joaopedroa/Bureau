import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Pessoa } from '../_models/pessoa';

@Injectable()
export class PessoaService {

  constructor() { }

  getAll(): Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      const ret: Array<Pessoa> = [
        {
          nome: 'Alexandre',
          inicador: 1,
          data: new Date(),
          key: 'dasdasdasdasd'
        },
        {
          nome: 'Aldebaran',
          inicador: 2,
          data: new Date(),
          key: 'dfdsffretrew'
        }];
        resolve(ret);
    });
    return promise;
  }

}
