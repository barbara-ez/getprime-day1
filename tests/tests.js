(function() {
  'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var myApp = require('../app/getPrime.js');

  describe('Prime numbers in a List: ', function () {

    describe('Return the list of prime numbers in the list that follows[]', function () {

      it('should return [2,3,5,7,11] for 11', function () {
        expect(myApp.getPrime(20)).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
      });

      it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127] for 130', function () {
        expect(myApp.getPrime(130)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127]);
      });

      it('should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199] for 200', function () {
        expect(myApp.getPrime(200)).to.eql( [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]);
      });

    });

    describe('Return the list of prime numbers in the list', function () {

      it("should return 'no value' for null", function() {
      expect(myApp.getPrime(null)).to.equal('no value');
      });

      it("should return 'no value' for undefined", function() {
        expect(myApp.getPrime(undefined)).to.equal('no value');
      });

    });

  });

})();