export const sendEmail = async (data: {
  email: string;
  name: string;
  message: string;
}) => {
  try {
    const endpoint = '/api/email';
    await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  } catch (error) {
    return error;
  }
};
