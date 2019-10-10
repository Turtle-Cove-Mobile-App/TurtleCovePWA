import { InAppBrowserService } from './../../services/in-app-browser/in-app-browser.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "tc-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(private browser: InAppBrowserService) {}

  ngOnInit() {}

  openUrl(url: string) {
    this.browser.openUrl(url);
  }
}
