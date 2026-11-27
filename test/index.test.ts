import assert from 'node:assert/strict';
import test from 'node:test';
import { greet } from '../src/index.ts';

test('greets a person by name', () => {
  assert.equal(greet('world'), 'Hello, world!');
  assert.equal(greet('Ada'), 'Hello, Ada!');
  assert.equal(greet('Ada', 'casual'), 'Hey, Ada!');
  assert.equal(greet('Ada', 'formal'), 'Good day, Ada.');
});

test('preserves the supplied name', () => {
  assert.equal(greet(' Ada ', 'casual'), 'Hey,  Ada !');
});

test('rejects empty or whitespace-only names', () => {
  assert.throws(() => greet(''), TypeError);
  assert.throws(() => greet(' \t\n '), TypeError);
});

test('rejects unsupported styles from untyped callers', () => {
  assert.throws(
    () => Reflect.apply(greet, undefined, ['Ada', 'unsupported']),
    TypeError,
  );
});
