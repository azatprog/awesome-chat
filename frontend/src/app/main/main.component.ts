import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { UtilService } from '../services/util.service';
import { User } from '../model/user.model';
import { Message } from '../model/message.model';
import { AuthenticationService } from '../services/authentication.service';
import { Me } from '../model/me.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  contacts: User[];
  messages: Message[];
  newMessage: string;
  me: Me;
  constructor(private utilService: UtilService, private authService: AuthenticationService) {
    this.me = authService.me;
    console.log(this.me);
    this.contacts = utilService.contacts;
    console.log(this.contacts);
    this.messages = this.utilService.messages;
  }

    ngOnInit() {
        this.scrollToBottom();
    }

    logout() {
      this.authService.logout();
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) { console.log(err); }
    }

  identify = (inx, item) => inx;

  sendMsg() {
    this.utilService.sendMsg(this.newMessage, this.me.email);
    this.newMessage = '';
  }
}
