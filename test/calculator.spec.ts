import Calculator from './../src/calculator.js'
import { expect } from 'chai';
import {describe} from 'mocha';



describe('Test calculator Class',() => {
     it('This must return sum',() => {
        //arrange
        const calc = new Calculator();
        //act
        const result = calc.add(1,9);
        //assert
        expect(result).to.equal(10);

     });
     it('This must return substraction',() => {
      //arrange
      const calc = new Calculator();
      //act
      const result = calc.sub(9,1);
      //assert
      expect(result).to.equal(8);
   });
   it('This must return multiply',() => {
      //arrange
      const calc = new Calculator();
      //act
      const result = calc.mul(1,9);
      //assert
      expect(result).to.equal(9);

   });
   it('This must return divison',() => {
      //arrange
      const calc = new Calculator();
      //act
      const result = calc.div(9,3);
      //assert
      expect(result).to.equal(3);

   });
   it('This must throw a error while divide by zero',() => {
      const calc = new Calculator();
      expect(() => calc.div(10,0)).to.throw('can not divide by zero');
   })
})
//same directory str as src 
//test suite made bymethod describe(name,flat arrow function!)
//test cases by it method


    //3A method for test cases 
    //Arrange , Act ,Assertion
    //Arrange create an instance of our class
    //import calculator 