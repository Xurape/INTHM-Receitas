import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipes } from '../recipes';

@Component({
  selector: 'app-receitas-detalhe',
  templateUrl: './receitas-detalhe.page.html',
  styleUrls: ['./receitas-detalhe.page.scss'],
})
export class ReceitasDetalhePage implements OnInit {
  public recipe_id: any;
  public recipe: any;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.recipe_id = this.route.snapshot.paramMap.get('id');

    recipes.map((recipe) => {
      if (recipe.id === this.recipe_id)
        this.recipe = recipe;
    }, this.recipe);
  }
}
