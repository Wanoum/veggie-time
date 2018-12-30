import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  isSubmitted = false;

  contact: Contact = {
    email: "",
    content: ""
  }

  constructor() { }

  ngOnInit() { }
}
