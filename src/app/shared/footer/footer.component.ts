import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
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
  }

}
