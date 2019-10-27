import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()
  public pageName: string = '';

  constructor() { }

  ngOnInit() {}

}
