import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportingfiltrepartPage } from './reportingfiltrepart.page';

describe('ReportingfiltrepartPage', () => {
  let component: ReportingfiltrepartPage;
  let fixture: ComponentFixture<ReportingfiltrepartPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingfiltrepartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportingfiltrepartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
