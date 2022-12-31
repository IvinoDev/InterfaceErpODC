import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListePersonnelEntitePage } from './liste-personnel-entite.page';

describe('ListePersonnelEntitePage', () => {
  let component: ListePersonnelEntitePage;
  let fixture: ComponentFixture<ListePersonnelEntitePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePersonnelEntitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListePersonnelEntitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
