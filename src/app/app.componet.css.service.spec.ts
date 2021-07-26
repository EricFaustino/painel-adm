import { TestBed } from '@angular/core/testing';

import { App.Componet.CssService } from './app.componet.css.service';

describe('App.Componet.CssService', () => {
  let service: App.Componet.CssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.Componet.CssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
