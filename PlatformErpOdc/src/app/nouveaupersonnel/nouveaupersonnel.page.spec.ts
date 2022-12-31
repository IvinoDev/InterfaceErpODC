import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NouveaupersonnelPage } from './nouveaupersonnel.page';

describe('NouveaupersonnelPage', () => {
  let component: NouveaupersonnelPage;
  let fixture: ComponentFixture<NouveaupersonnelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveaupersonnelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NouveaupersonnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
