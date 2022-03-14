import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  database:any = {
    1000:{email: 'aswin@gmail.com',password: '1000',firstName:'aswin',lastName:"Kumar"},
    2000:{email: 'sreehari@gmail.com',password: '2000',firstName:'sree',lastName:"hari"},
    3000:{email: 'ameen@gmail.com',password: '3000',firstName:'mohammed',lastName:"ameen"}
  }

  
  constructor() { }
}
