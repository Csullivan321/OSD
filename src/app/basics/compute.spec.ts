import { compute } from "./compute";

describe ('compute', () => {
    it('should return 0 if the input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0); 
    });

    it('should return input+1 if the input is postive ', () =>{
        const result = compute(1);
        expect(result).toBe(2);  
    
    })

    //fail
    it('should return input+1 if the input is postive ', () =>{
        const result = compute(1);
       expect(result).not.toBe(2);  
    
  })
});