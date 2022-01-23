import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  constructor(private fs: FeedbackService) { }

  ngOnInit(): void {
  }

  addFeedback(form: { value: any; }){
    console.log(form.value);
    this.fs.createFeedback(form.value);
  }

}
