import '@testing-library/jest-dom';
import { vi, beforeAll, afterAll } from 'vitest';

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock localStorage with actual storage behavior
const localStorageMock = {
  _data: {} as Record<string, string>,
  getItem: vi.fn((key: string) => {
    return localStorageMock._data[key] || null;
  }),
  setItem: vi.fn((key: string, value: string) => {
    localStorageMock._data[key] = value;
  }),
  removeItem: vi.fn((key: string) => {
    delete localStorageMock._data[key];
  }),
  clear: vi.fn(() => {
    localStorageMock._data = {};
  }),
  length: 0,
  key: vi.fn(),
};
global.localStorage = localStorageMock as Storage;

// Mock sessionStorage with actual storage behavior
const sessionStorageMock = {
  _data: {} as Record<string, string>,
  getItem: vi.fn((key: string) => {
    return sessionStorageMock._data[key] || null;
  }),
  setItem: vi.fn((key: string, value: string) => {
    sessionStorageMock._data[key] = value;
  }),
  removeItem: vi.fn((key: string) => {
    delete sessionStorageMock._data[key];
  }),
  clear: vi.fn(() => {
    sessionStorageMock._data = {};
  }),
  length: 0,
  key: vi.fn(),
};
global.sessionStorage = sessionStorageMock as Storage;

// Suppress console errors in tests unless explicitly needed
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
}); 