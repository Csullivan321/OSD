import {GetCurrencies} from "./getCurrencies"

describe('getCurrencies', () => {
    it('should contain USD, GBP, and EUR', () => {
      expect (GetCurrencies).toContain('USD');
      expect(GetCurrencies).toContain('GBP');
      expect(GetCurrencies).toContain('EUR');
    });

    it('should not contain CAD', () => {
        expect(GetCurrencies).not.toContain('CAD');
      });
      
  
} )