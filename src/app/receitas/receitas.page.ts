import { Component, OnInit } from '@angular/core';
import { recipes } from '../recipes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.page.html',
  styleUrls: ['./receitas.page.scss'],
})
export class ReceitasPage implements OnInit {
  public recipes: any;

  constructor(private router: Router) { }
  
  ngOnInit() {
    this.recipes = recipes;
  }

  public getRecipes() {
    let categories = ["fácil", "médio", "difícil"];
    this.recipes = this.recipes.sort((a: any, b: any) => categories.indexOf(a.difficulty) - categories.indexOf(b.difficulty));

    return this.recipes;
  }

  public filterRecipes(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    this.recipes = recipes.filter((recipe: any) => {
      return recipe.name.toLowerCase().includes(searchTerm);
    });
  }

  public goToReceita(id: number) {
    this.router.navigateByUrl(`/receitas/${id}`);
  }
}
