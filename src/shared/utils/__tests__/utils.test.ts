import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  cn,
  formatDate,
  formatDateTime,
  formatCurrency,
  getStatusColor,
  truncateText,
  capitalizeFirst,
  formatFileSize,
  storage,
  isValidEmail,
  isEmpty,
  debounce,
  groupBy,
  sortBy,
  generateId,
} from '../utils';

describe('cn (className utility)', () => {
  it('combines class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    const condition = true;
    const hidden = false;
    expect(cn('base', condition && 'conditional', hidden && 'hidden')).toBe('base conditional');
  });

  it('handles arrays and objects', () => {
    expect(cn(['class1', 'class2'], { class3: true, class4: false })).toBe('class1 class2 class3');
  });

  it('handles empty values', () => {
    expect(cn('base', null, undefined, '')).toBe('base');
  });

  it('merges conflicting Tailwind classes', () => {
    expect(cn('p-4 p-6')).toBe('p-6');
    expect(cn('text-red-500 text-blue-500')).toBe('text-blue-500');
  });
});

describe('formatDate', () => {
  it('formats date string correctly', () => {
    const dateString = '2024-01-15T10:30:00.000Z';
    expect(formatDate(dateString)).toBe('Jan 15, 2024');
  });

  it('formats Date object correctly', () => {
    const date = new Date('2024-01-15T10:30:00.000Z');
    expect(formatDate(date)).toBe('Jan 15, 2024');
  });

  it('handles different date formats', () => {
    expect(formatDate('2024-12-25')).toBe('Dec 25, 2024');
    expect(formatDate('2024-06-01')).toBe('Jun 1, 2024');
  });
});

describe('formatDateTime', () => {
  it('formats date and time correctly', () => {
    const dateString = '2024-01-15T14:30:00.000Z';
    expect(formatDateTime(dateString)).toBe('Jan 15, 2024, 02:30 PM');
  });

  it('formats Date object with time', () => {
    const date = new Date('2024-01-15T14:30:00.000Z');
    expect(formatDateTime(date)).toBe('Jan 15, 2024, 02:30 PM');
  });

  it('handles different time formats', () => {
    expect(formatDateTime('2024-01-15T09:05:00.000Z')).toBe('Jan 15, 2024, 09:05 AM');
    expect(formatDateTime('2024-01-15T23:45:00.000Z')).toBe('Jan 15, 2024, 11:45 PM');
  });
});

describe('formatCurrency', () => {
  it('formats currency correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
    expect(formatCurrency(1000)).toBe('$1,000.00');
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('handles negative values', () => {
    expect(formatCurrency(-1234.56)).toBe('-$1,234.56');
  });

  it('handles large numbers', () => {
    expect(formatCurrency(1234567.89)).toBe('$1,234,567.89');
  });
});

describe('getStatusColor', () => {
  it('returns correct colors for known statuses', () => {
    expect(getStatusColor('pending')).toBe('bg-yellow-100 text-yellow-800 border-yellow-200');
    expect(getStatusColor('approved')).toBe('bg-green-100 text-green-800 border-green-200');
    expect(getStatusColor('rejected')).toBe('bg-red-100 text-red-800 border-red-200');
    expect(getStatusColor('in_progress')).toBe('bg-blue-100 text-blue-800 border-blue-200');
    expect(getStatusColor('completed')).toBe('bg-gray-100 text-gray-800 border-gray-200');
  });

  it('returns default color for unknown status', () => {
    expect(getStatusColor('unknown')).toBe('bg-gray-100 text-gray-800 border-gray-200');
  });

  it('handles case sensitivity', () => {
    expect(getStatusColor('PENDING')).toBe('bg-gray-100 text-gray-800 border-gray-200');
  });
});

describe('truncateText', () => {
  it('truncates text longer than max length', () => {
    expect(truncateText('This is a very long text that needs to be truncated', 20)).toBe('This is a very long...');
  });

  it('returns original text if shorter than max length', () => {
    expect(truncateText('Short text', 20)).toBe('Short text');
  });

  it('returns original text if equal to max length', () => {
    expect(truncateText('Exactly ten', 11)).toBe('Exactly ten');
  });

  it('handles empty string', () => {
    expect(truncateText('', 10)).toBe('');
  });
});

describe('capitalizeFirst', () => {
  it('capitalizes first letter', () => {
    expect(capitalizeFirst('hello')).toBe('Hello');
    expect(capitalizeFirst('world')).toBe('World');
  });

  it('handles already capitalized text', () => {
    expect(capitalizeFirst('Hello')).toBe('Hello');
  });

  it('handles empty string', () => {
    expect(capitalizeFirst('')).toBe('');
  });

  it('handles single character', () => {
    expect(capitalizeFirst('a')).toBe('A');
  });
});

describe('formatFileSize', () => {
  it('formats bytes correctly', () => {
    expect(formatFileSize(0)).toBe('0 Bytes');
    expect(formatFileSize(1024)).toBe('1 KB');
    expect(formatFileSize(1048576)).toBe('1 MB');
    expect(formatFileSize(1073741824)).toBe('1 GB');
  });

  it('formats decimal sizes correctly', () => {
    expect(formatFileSize(1536)).toBe('1.5 KB');
    expect(formatFileSize(1572864)).toBe('1.5 MB');
  });

  it('handles large file sizes', () => {
    expect(formatFileSize(1099511627776)).toBe('1 TB');
  });
});

describe('storage utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  describe('storage.get', () => {
    it('retrieves stored data correctly', () => {
      localStorage.setItem('test-key', JSON.stringify({ data: 'test' }));
      expect(storage.get('test-key')).toEqual({ data: 'test' });
    });

    it('returns null for non-existent key', () => {
      expect(storage.get('non-existent')).toBeNull();
    });

    it('returns null for invalid JSON', () => {
      localStorage.setItem('invalid-json', 'invalid json');
      expect(storage.get('invalid-json')).toBeNull();
    });

    it('handles storage errors gracefully', () => {
      // Mock localStorage.getItem to throw an error
      const originalGetItem = localStorage.getItem;
      localStorage.getItem = vi.fn().mockImplementation(() => {
        throw new Error('Storage error');
      });

      expect(storage.get('test-key')).toBeNull();

      localStorage.getItem = originalGetItem;
    });
  });

  describe('storage.set', () => {
    it('stores data correctly', () => {
      const testData = { name: 'test', value: 123 };
      storage.set('test-key', testData);
      expect(localStorage.getItem('test-key')).toBe(JSON.stringify(testData));
    });

    it('handles storage errors gracefully', () => {
      // Mock localStorage.setItem to throw an error
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = vi.fn().mockImplementation(() => {
        throw new Error('Storage error');
      });

      expect(() => storage.set('test-key', 'test')).not.toThrow();

      localStorage.setItem = originalSetItem;
    });
  });

  describe('storage.remove', () => {
    it('removes data correctly', () => {
      localStorage.setItem('test-key', 'test');
      storage.remove('test-key');
      expect(localStorage.getItem('test-key')).toBeNull();
    });

    it('handles storage errors gracefully', () => {
      // Mock localStorage.removeItem to throw an error
      const originalRemoveItem = localStorage.removeItem;
      localStorage.removeItem = vi.fn().mockImplementation(() => {
        throw new Error('Storage error');
      });

      expect(() => storage.remove('test-key')).not.toThrow();

      localStorage.removeItem = originalRemoveItem;
    });
  });
});

describe('isValidEmail', () => {
  it('validates correct email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
    expect(isValidEmail('user+tag@example.org')).toBe(true);
  });

  it('rejects invalid email addresses', () => {
    expect(isValidEmail('invalid-email')).toBe(false);
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  it('handles edge cases', () => {
    expect(isValidEmail('test@example')).toBe(false);
    expect(isValidEmail('test.example.com')).toBe(false);
  });
});

describe('isEmpty', () => {
  it('identifies empty values correctly', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty('')).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
  });

  it('identifies non-empty values correctly', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  it('handles special cases', () => {
    expect(isEmpty('   ')).toBe(false); // whitespace is not empty
    expect(isEmpty(0)).toBe(false); // zero is not empty
  });
});

describe('debounce', () => {
  it('debounces function calls', async () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 100);

    debouncedFn('test1');
    debouncedFn('test2');
    debouncedFn('test3');

    expect(mockFn).not.toHaveBeenCalled();

    await new Promise(resolve => setTimeout(resolve, 150));

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('test3');
  });

  it('handles multiple debounced calls', async () => {
    const mockFn = vi.fn();
    const debouncedFn = debounce(mockFn, 50);

    debouncedFn('call1');
    await new Promise(resolve => setTimeout(resolve, 100));
    debouncedFn('call2');
    await new Promise(resolve => setTimeout(resolve, 100));

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenNthCalledWith(1, 'call1');
    expect(mockFn).toHaveBeenNthCalledWith(2, 'call2');
  });
});

describe('groupBy', () => {
  it('groups array by key correctly', () => {
    const data = [
      { id: 1, category: 'A', value: 10 },
      { id: 2, category: 'B', value: 20 },
      { id: 3, category: 'A', value: 30 },
      { id: 4, category: 'C', value: 40 },
    ];

    const result = groupBy(data, 'category');

    expect(result).toEqual({
      A: [
        { id: 1, category: 'A', value: 10 },
        { id: 3, category: 'A', value: 30 },
      ],
      B: [{ id: 2, category: 'B', value: 20 }],
      C: [{ id: 4, category: 'C', value: 40 }],
    });
  });

  it('handles empty array', () => {
    expect(groupBy([], 'key')).toEqual({});
  });

  it('handles missing keys', () => {
    const data = [
      { id: 1, category: 'A' },
      { id: 2 },
      { id: 3, category: 'B' },
    ];

    const result = groupBy(data, 'category');
    expect(result['undefined']).toEqual([{ id: 2 }]);
  });
});

describe('sortBy', () => {
  it('sorts array in ascending order', () => {
    const data = [
      { id: 3, name: 'Charlie' },
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];

    const result = sortBy(data, 'id');
    expect(result).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]);
  });

  it('sorts array in descending order', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Charlie' },
      { id: 2, name: 'Bob' },
    ];

    const result = sortBy(data, 'id', 'desc');
    expect(result).toEqual([
      { id: 3, name: 'Charlie' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alice' },
    ]);
  });

  it('sorts strings correctly', () => {
    const data = [
      { id: 1, name: 'Charlie' },
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' },
    ];

    const result = sortBy(data, 'name');
    expect(result).toEqual([
      { id: 2, name: 'Alice' },
      { id: 3, name: 'Bob' },
      { id: 1, name: 'Charlie' },
    ]);
  });

  it('handles empty array', () => {
    expect(sortBy([], 'id')).toEqual([]);
  });

  it('handles single item array', () => {
    const data = [{ id: 1, name: 'Alice' }];
    expect(sortBy(data, 'id')).toEqual(data);
  });
});

describe('generateId', () => {
  it('generates unique IDs', () => {
    const id1 = generateId();
    const id2 = generateId();

    expect(id1).toBeDefined();
    expect(id2).toBeDefined();
    expect(id1).not.toBe(id2);
  });

  it('generates string IDs', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });

  it('generates different IDs on each call', () => {
    const ids = new Set();
    for (let i = 0; i < 100; i++) {
      ids.add(generateId());
    }
    expect(ids.size).toBe(100);
  });
}); 