import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesactiverpersonnelPage } from './desactiverpersonnel.page';

describe('DesactiverpersonnelPage', () => {
  let component: DesactiverpersonnelPage;
  let fixture: ComponentFixture<DesactiverpersonnelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactiverpersonnelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesactiverpersonnelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
