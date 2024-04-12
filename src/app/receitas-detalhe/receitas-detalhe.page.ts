import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receitas-detalhe',
  templateUrl: './receitas-detalhe.page.html',
  styleUrls: ['./receitas-detalhe.page.scss'],
})
export class ReceitasDetalhePage implements OnInit {
  public recipe_id: any;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.recipe_id = this.route.snapshot.paramMap.get('id');
  }
}
