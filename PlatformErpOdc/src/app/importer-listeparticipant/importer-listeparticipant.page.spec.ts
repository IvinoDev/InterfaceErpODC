import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImporterListeparticipantPage } from './importer-listeparticipant.page';

describe('ImporterListeparticipantPage', () => {
  let component: ImporterListeparticipantPage;
  let fixture: ComponentFixture<ImporterListeparticipantPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImporterListeparticipantPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImporterListeparticipantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
