import { Component, OnInit } from "@angular/core";
import { PluginsService } from 'src/app/services/plugins-service/plugins.service';

@Component({
  selector: "tc-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(private plugins: PluginsService) {}

  ngOnInit() {}

  openUrl(url: string) {
    this.plugins.openUrl(url);
  }

  logLocation() {
    console.log(this.plugins.location);
  }
}
