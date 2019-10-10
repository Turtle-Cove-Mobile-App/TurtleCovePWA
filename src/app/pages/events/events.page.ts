import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  private apiKey = 'AIzaSyDxJFgb7IlKXSGritDAsMtmbWZ7P4rLfqU';

  private events;

  constructor() { }

  ngOnInit() {
    this.getEvents();
  }

  async getEvents() {

    await fetch('https://www.googleapis.com/calendar/v3/calendars/ok6j0uq2hpfl5u2883mn0poeh8%40group.calendar.google.com/events?key=' + this.apiKey)
    .then(res => res.json().then(resJson => this.events = resJson));

    console.log(this.events);
  }

}
