import assert from 'node:assert/strict';
import test from 'node:test';
import { greet } from '../src/index.ts';

test('greets a person by name', () => {
  assert.equal(greet('world'), 'Hello, world!');
  assert.equal(greet('Ada'), 'Hello, Ada!');
});
