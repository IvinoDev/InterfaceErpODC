import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupprimerpersonnelPage } from './supprimerpersonnel.page';

describe('SupprimerpersonnelPage', () => {
  let component: SupprimerpersonnelPage;
  let fixture: ComponentFixture<SupprimerpersonnelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupprimerpersonnelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupprimerpersonnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
