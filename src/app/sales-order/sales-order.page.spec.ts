import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesOrderPage } from './sales-order.page';

describe('SalesOrderPage', () => {
  let component: SalesOrderPage;
  let fixture: ComponentFixture<SalesOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
