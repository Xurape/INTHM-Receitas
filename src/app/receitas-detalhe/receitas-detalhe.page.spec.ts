import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitasDetalhePage } from './receitas-detalhe.page';

describe('ReceitasDetalhePage', () => {
  let component: ReceitasDetalhePage;
  let fixture: ComponentFixture<ReceitasDetalhePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitasDetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
