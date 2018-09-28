import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaPage } from './pessoa.page';

describe('PessoaPage', () => {
  let component: PessoaPage;
  let fixture: ComponentFixture<PessoaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
