import drop from 'lodash/drop';
import { findItemById, filterArrayByItemId } from '../items';

describe('Array items utils', () => {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ];

  describe('findItemById', () => {
    it('should find item by id', () => {
      expect(findItemById(data, 1)).toEqual(data[0]);
    });

    it('should return null if id not exist', () => {
      expect(findItemById(data, 5)).toBeUndefined();
    });

    it('should return null on empty array', () => {
      expect(findItemById(data, 5)).toBeUndefined();
    });
  });

  describe('filterArrayByItemId', () => {
    it('should filter array item by id', () => {
      expect(filterArrayByItemId(data, 1)).toEqual(drop(data));
    });

    it('should return original array if id not exist', () => {
      expect(filterArrayByItemId(data, 5)).toEqual(data);
    });
  });
});