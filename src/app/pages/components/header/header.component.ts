import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public session: Boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public initSession () {
    this.session = true;
    this.router.navigate(["/session"]);
  }

  public finishSession () {
    this.session = false;
    this.router.navigate(["/Web-SGR"]);
  }

}
