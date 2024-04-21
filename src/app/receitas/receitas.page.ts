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

  public actionSheetButtons = [
    {
      text: 'Mais fáceis primeiro',
      data: {
        filter: 'easyFirst'
      },
    },
    {
      text: 'Entradas primeiro',
      data: {
        filter: 'startersFirst'
      },
    },
    {
      text: 'Pratos principais primeiro',
      data: {
        filter: 'mainCoursesFirst'
      },
    },
    {
      text: 'Sobremesas primeiro',
      data: {
        filter: 'dessertsFirst'
      },
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.recipes = recipes;
  }

  public filterRecipes(event: any) {
    if(event == null)
      return this.recipes;

    switch(event.type) {
      case 'ionInput':
        const searchTerm = event.target.value.toLowerCase();
    
        this.recipes = recipes.filter((recipe: any) => {
          return recipe.name.toLowerCase().includes(searchTerm);
        });
        break;
      case 'didDismiss':
        const filter = event.detail.data.filter;

        switch(filter) {
          case 'easyFirst':
            let categories = ["fácil", "média", "difícil"];
            this.recipes = this.recipes.sort((a: any, b: any) => categories.indexOf(a.difficulty) - categories.indexOf(b.difficulty));
        
            break;
          case 'startersFirst':
            this.recipes.sort((a: any, b: any) => (a.category === "entradas" ? -1 : 1));
            break;
          case 'mainCoursesFirst':
            this.recipes.sort((a: any, b: any) => {
              if (a.category.includes("prato principal")) {
                return -1;
              } else {
                return 1;
              }
            });
            break;
          case 'dessertsFirst':
            this.recipes.sort((a: any, b: any) => (a.category === "sobremesa" ? -1 : 1));
            break;
        }
        break;
    }
  }

  public goToReceita(id: number) {
    this.router.navigateByUrl(`/receitas/${id}`);
  }
}