export type GreetingStyle = 'casual' | 'formal';

export function greet(name: string, style?: GreetingStyle): string {
  if (name.trim().length === 0) {
    throw new TypeError('Name must not be empty.');
  }

  switch (style) {
    case undefined:
      return `Hello, ${name}!`;
    case 'casual':
      return `Hey, ${name}!`;
    case 'formal':
      return `Good day, ${name}.`;
    default:
      throw new TypeError('Unsupported greeting style.');
  }
}
