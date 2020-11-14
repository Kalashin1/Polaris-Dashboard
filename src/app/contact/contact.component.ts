import { Component, OnInit } from '@angular/core';
import { ContactObj } from '../interface/contact-obj';
import { ContactService } from '../services/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactObj: ContactObj
  constructor(private contactService : ContactService) { }

  ngOnInit(): void {
    this.contactObj = { name : '', email : '', subject : '', message : ''}
  }

  sendMail(obj){
    this.contactService.sendMail(obj).subscribe( x => {
      console.log(x.message)
    })
  }

}
