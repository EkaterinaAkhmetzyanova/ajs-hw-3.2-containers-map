/* eslint-disable no-undef */
import ErrorRepository from '../ErrorRepository';

 test('check translation', () => {
     const errRep = new ErrorRepository();
     errRep.errRepSet(20, 'character name should include at least 6 letters');
     expect(errRep.translate(20)).toBe('character name should include at least 6 letters');
 });

 test('unknown code translation', () => {
    const errRep = new ErrorRepository();
    errRep.errRepSet(20, 'character name should include at least 6 letters');
    expect(errRep.translate(50)).toBe('Unknown error');
 });


