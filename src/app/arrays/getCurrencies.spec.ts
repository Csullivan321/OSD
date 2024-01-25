import {GetCurrencies} from "./getCurrencies"

describe('getCurrencies', () => {
    it('should contain USD, GBP, and EUR', () => {
      const result = GetCurrencies();
      expect (result).toContain('USD');
      expect(result).toContain('GBP');
      expect(result).toContain('EUR');
    });

    it('should not contain CAD', () => {
        expect(GetCurrencies).not.toContain('CAD');
      });
      
  
} )