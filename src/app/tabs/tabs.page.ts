import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  current_tab = "inicio";

  constructor() {}

   public setCurrentTab(ev: any){
    this.current_tab = ev.tab;
  }

}
