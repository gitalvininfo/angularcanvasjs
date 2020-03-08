import { TestBed } from '@angular/core/testing';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';

import { GlobalService } from './global.service';

describe('GlobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  	imports: [SnotifyService]
  }));

  it('should be created', () => {
    const service: GlobalService = TestBed.get(GlobalService);
    expect(service).toBeTruthy();
  });
});
