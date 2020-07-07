

const localStorageKey = 'auth_key'

async function bootstrapAppData() {
  let user = null;

  const token = await window.localStorage.getItem(localStorageKey);

  if (token) {
    
  }

  return user;
}