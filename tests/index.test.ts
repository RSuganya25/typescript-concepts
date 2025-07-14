// tests/index.test.ts
import { greet, mightThrowError, Person, Role, UserStatus } from '../src/index';

describe('Basic TypeScript functions and classes', () => {
  test('greet returns greeting string', () => {
    expect(greet('Tester')).toBe('Hello, Tester!');
  });

  test('Person describe method', () => {
    const person = new Person('TestName', 45);
    expect(person.describe()).toContain('TestName');
  });

  test('mightThrowError handles errors', () => {
    expect(mightThrowError(false)).toBe('Error caught: Something went wrong!');
    expect(mightThrowError(true)).toBe('All good!');
  });

  test('UserStatus getStatus returns formatted string', () => {
    const userStatus = new UserStatus('Alice', Role.Admin, 'active');
    expect(userStatus.getStatus()).toBe('Alice (Admin) is active');
  });
});
