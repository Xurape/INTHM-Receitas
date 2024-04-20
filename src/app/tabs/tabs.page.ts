import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  current_tab = "inicio";

  constructor(private router: Router) {}

  public setCurrentTab(ev: any){
    this.current_tab = ev.tab;
  }

  public redirect(route: string){
  this.router.navigateByUrl(`/app/${route}`);
  }
}
