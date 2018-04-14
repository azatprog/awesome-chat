import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  contacts: User[];
  messages: Message[];
  newMessage: string;
  constructor(private utilService: UtilService) {
    this.contacts = utilService.getContacts();
    this.messages = this.utilService.messages;
  }

  ngOnInit() {
  }

  identify = (inx, item) => inx;

  sendMsg() {
    this.utilService.sendMsg(this.newMessage);
    this.newMessage = '';
  }
}
