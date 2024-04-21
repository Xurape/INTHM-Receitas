import { Component, OnInit } from '@angular/core';
import packageJson from '../../../package.json';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
  // Obter a versão a partir da packge.json
  public version: string = packageJson.version;

  constructor() { }

  ngOnInit() {
  }
}
