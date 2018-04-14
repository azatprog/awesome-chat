import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { AppSettings } from '../app.settings';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usercreds } from '../model/usercreds.model';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ng-socket-io';
import { Message } from '../model/message.model';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class UtilService {

  contacts: User[];
  apiRoot: string = AppSettings.API_ROOT;
  messages: Message[] = [];

  constructor(private http: HttpClient, private socket: Socket) {

    console.log('client socket..');
    socket.emit('join', { my: 'data' });
    // this.messages = this.getAllMessages();
    socket.on('loadMessages', messages => {
      console.log(messages);
      messages.forEach(m => {
        this.messages.push(m);
      });
      // this.messages = messages;
    });

    socket.on('loadContacts', contacts => {
      console.log(contacts);
      this.contacts = contacts;
      // contacts.forEach(c => {
      //   this.contacts.push(c);
      // });
    });

    socket.on('receiveMessage', (data: Message) => {
        this.messages.push(data);
    });
  }

  sendMsg(msg: string, me: string) {
    this.socket.emit('sendMessage', { sender: me, text: msg });
  }

  // getContacts() {
  //   this.contacts = [
  //     { id: 1, username: 'user1', password: 'pass1', lastMsg: 'lastMsg1', img: 'http://emilcarlsson.se/assets/louislitt.png' },
  //     { id: 2, username: 'user2', password: 'pass2', lastMsg: 'lastMsg2', img: 'http://emilcarlsson.se/assets/harveyspecter.png' },
  //     { id: 3, username: 'user3', password: 'pass3', lastMsg: 'lastMsg3', img: 'http://emilcarlsson.se/assets/rachelzane.png' },
  //     { id: 4, username: 'user4', password: 'pass4', lastMsg: 'lastMsg4', img: 'http://emilcarlsson.se/assets/donnapaulsen.png' }
  //   ];
  //   return this.contacts;
  // }

  getChatContent(id: number) {

  }

  login(user: Usercreds) {
    const apiUrl = `${this.apiRoot}/login`;
    console.log(apiUrl);
    console.log(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return new Promise((resolve, reject) => {
      // const apiUrl = this.apiRoot + '/' + path;
      console.log(apiUrl);
      this.http['post'](apiUrl, JSON.stringify(user))
              .toPromise()
              .then(
                  res => {
                      resolve(res);
                  },
                  err => {
                      reject(err);
                  }
              );
          });
    // this.http.post(apiUrl, user, { headers })
    //   .map(res => {
    //     console.log(res);
    //     return res;
    //   });
  }

}
