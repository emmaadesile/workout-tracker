export default function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Welcome to lambda",
    }),
  };
}
