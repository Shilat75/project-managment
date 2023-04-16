import { expect } from "chai";

import (expect)

describe('Arrays' , () => {

  describe('#sort' , () => {
        it('Sorting names array ' , () => {
           var names = ['Dani' , 'Moshe' , 'Adam'];
           expect(names.sort()).to.be.eql(['Adam' , 'Dani' , 'Moshe']);
        })
  })
})
