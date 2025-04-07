const { generateMushuReply } = require('../utils/gemini');

jest.setTimeout(10000);

test('should reply to a simple prompt', async () => {
  const response = await generateMushuReply("Hello");
  expect(response).toBeDefined();
  expect(typeof response).toBe('string');
});

test('should handle empty input gracefully - part 1', async () => {
  const response = await generateMushuReply("");
  expect(response).toBeNull();
});

test('should handle empty input gracefully - part 2', async () => {
  const response = await generateMushuReply("   ");
  expect(response).toBeNull();
});

test('should handle emojis and gibberish gracefully', async () => {
  const response = await generateMushuReply("😩😩 idk$#@!??!!");
  expect(response).toBeDefined();
  expect(typeof response).toBe('string');
});

test('should respond to a long emotional message', async () => {
  const message = "I just feel like everything is falling apart, and I don't know how to keep up anymore. I’m trying my best, but it feels like it’s not enough.";
  const response = await generateMushuReply(message);
  expect(response).toBeDefined();
});

test('should return null for null input', async () => {
  const response = await generateMushuReply(null);
  expect(response).toBeNull();
});