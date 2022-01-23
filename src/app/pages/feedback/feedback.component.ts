import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  addFeedback(form: { value: any; }){
    console.log(form.value);
  }

}
