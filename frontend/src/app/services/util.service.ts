import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable()
export class UtilService {

  contacts: User[];

  constructor() { }

  getContacts() {
    this.contacts = [
      { id: 1, username: 'user1', password: 'pass1', lastMsg: 'lastMsg1', img: 'http://emilcarlsson.se/assets/louislitt.png' },
      { id: 2, username: 'user2', password: 'pass2', lastMsg: 'lastMsg2', img: 'http://emilcarlsson.se/assets/harveyspecter.png' },
      { id: 3, username: 'user3', password: 'pass3', lastMsg: 'lastMsg3', img: 'http://emilcarlsson.se/assets/rachelzane.png' },
      { id: 4, username: 'user4', password: 'pass4', lastMsg: 'lastMsg4', img: 'http://emilcarlsson.se/assets/donnapaulsen.png' }
    ];
    return this.contacts;
  }

  getChatContent(id: number) {

  }

}
