// Remove the invariant import and create our own implementation
export const invariant = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

// Option 1: Import entire module
import * as invariant from 'invariant';

// Option 2: Use dynamic import
const invariant = (await import('invariant')).default; 