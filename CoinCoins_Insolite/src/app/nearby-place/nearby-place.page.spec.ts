import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyPlacePage } from './nearby-place.page';

describe('NearbyPlacePage', () => {
  let component: NearbyPlacePage;
  let fixture: ComponentFixture<NearbyPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyPlacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
