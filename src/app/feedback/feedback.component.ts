import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  username: string;
  feedback: string;
  constructor() {
    this.username = '';
    this.feedback = '';
  }

  ngOnInit(): void {}
  onSubmit() {
    alert('Thanks for the feedback');
    console.log(this.username, this.feedback);
  }
}
