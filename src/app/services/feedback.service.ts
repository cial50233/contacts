import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private feedbacks = [] as any;

  constructor() { }

  createFeedback(feedback: any){

    this.feedbacks = [feedback, ...this.feedbacks];
    console.log(this.feedbacks);
  }
}
