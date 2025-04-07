jest.mock('axios'); // ✅ Now safe at top of this test file
const axios = require('axios');
const { generateMushuReply } = require('../utils/gemini');

test('should throw error when API key is invalid (mocked)', async () => {
  axios.post.mockRejectedValueOnce({
    response: {
      data: {
        error: {
          code: 400,
          message: 'API key not valid. Please pass a valid API key.',
        }
      }
    }
  });

  await expect(generateMushuReply("mocked test")).rejects.toThrow("API key not valid");
});
