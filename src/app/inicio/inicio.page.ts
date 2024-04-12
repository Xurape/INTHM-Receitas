import { Component, OnInit } from '@angular/core';
import { recipes } from '../recipes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public local_recipes: any[] = [];

  constructor(private router: Router) { }

  public getFirstThreeReceipts() {
    recipes.map((recipe, index) => {
      if (index < 3) {
        this.local_recipes.push(recipe);
      }

      return;
    });

    console.log(this.local_recipes);

    return this.local_recipes;
  }

  public goToRecipe(id: string) {
    this.router.navigateByUrl(`/receitas/${id}`);
  }

  ngOnInit(): void {
      this.getFirstThreeReceipts();
  }
}
