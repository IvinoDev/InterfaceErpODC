import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ProfilPage } from './profil.page';

describe('ProfilPage', () => {
  let component: ProfilPage;
  let fixture: ComponentFixture<ProfilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilPage);
// ========
// import { DetailtiragePage } from './detailtirage.page';

// describe('DetailtiragePage', () => {
//   let component: DetailtiragePage;
//   let fixture: ComponentFixture<DetailtiragePage>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DetailtiragePage ],
//       imports: [IonicModule.forRoot()]
//     }).compileComponents();

//     fixture = TestBed.createComponent(DetailtiragePage);
// >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/detailtirage/detailtirage.page.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
