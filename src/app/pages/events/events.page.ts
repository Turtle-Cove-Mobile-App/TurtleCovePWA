import { PluginsService } from '../../services/plugins-service/plugins.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tc-events",
  templateUrl: "./events.page.html",
  styleUrls: ["./events.page.scss"]
})
export class EventsPage implements OnInit {
  private apiKey = "AIzaSyDxJFgb7IlKXSGritDAsMtmbWZ7P4rLfqU";

  public events;

  constructor(private plugins: PluginsService) {}

  ngOnInit() {
    this.getEvents();
  }

  ISODateString(d) {
    function pad(n) {
      return n < 10 ? '0' + n : n;
    }
    return d.getUTCFullYear() + '-'
         + pad(d.getUTCMonth() + 1) + '-'
         + pad(d.getUTCDate()) + 'T'
         + pad(d.getUTCHours()) + ':'
         + pad(d.getUTCMinutes()) + ':'
         + pad(d.getUTCSeconds()) + 'Z';
  }

  async getEvents(refreshEvent?) {
    const date = new Date();
    await fetch(
      'https://www.googleapis.com/calendar/v3/calendars/ok6j0uq2hpfl5u2883mn0poeh8%40group.calendar.google.com/events?orderBy=startTime&singleEvents=true&timeMin=' +
        this.ISODateString(date) +
        '&key=' +
        this.apiKey
    ).then(res =>
      res.json().then(resJson => {
        this.events = resJson.items.map(item => {
          return {
            date: item.start.date,
            summary: item.summary,
            description: item.description || null,
            htmlLink: item.htmlLink
          };
        });
        // this.events.sort(( a, b ) => (new Date(a.date) as any) - (new Date(b.date) as any));
      })
    );

    if (refreshEvent) {
      refreshEvent.target.complete();
    }

    console.log(this.events);
  }

  openEvent(url) {
    this.plugins.openUrl(url);
  }
}
