import { TestBed } from '@angular/core/testing';

import { CartResolverService } from './cart-resolver.service';

describe('CartResolverService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CartResolverService = TestBed.get(CartResolverService);
        expect(service).toBeTruthy();
    });
});