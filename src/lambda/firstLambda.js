export async function handler() {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    "body": "Welcome newbie Lambda user"
  }
}