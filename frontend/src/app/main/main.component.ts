import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  contacts: User[];
  constructor(private utilService: UtilService) {
    this.contacts = utilService.getContacts();
  }

  ngOnInit() {
  }

  identify = (inx, item) => inx;
}
