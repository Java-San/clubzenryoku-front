import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isXSmall: boolean = false;
  widthChange: any;

  constructor(
    public breakpointObserver: BreakpointObserver,
  ) {
    this.checkBreakpoints();
  }

  checkBreakpoints() {
    this.widthChange = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((state: BreakpointState) => {
        this.isXSmall = this.breakpointObserver.isMatched(Breakpoints.XSmall);
      });
  }

  ngOnInit(): void {

    console.log('is small', this.isXSmall)
  }

}
