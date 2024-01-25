import {greet} from './greet'

describe('greet', () => {
    it('it should include the name in the message  ', () => {
          
        expect (greet('Frank')).toContain('Frank');
    });

    it('it should not inlcude the name in the message   ', () => {
        expect(greet('Frank')).not.toContain('Frank'); 
    });
}); 