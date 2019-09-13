import { Component, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";
const { Browser } = Plugins;

@Component({
  selector: "tc-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  openUrl(url: string) {
    Browser.open({ url });
  }
}
