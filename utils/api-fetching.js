import {collectFormData} from './common';

const BASE_URL = 'http://localhost:3000';

export async function fetchUsersList() {
  const response = await fetch(`${BASE_URL}/api/users`);
  const data = await response.json();
  const {content} = data;
  return content;
}

export async function createUser(form) {
  const response = await fetch('/api/users/create', {
    method: 'POST',
    body: JSON.stringify(collectFormData(form))
  })

  const content = await response.json();
  if (content.error) {
    return {
      status: `error`,
      content: content.error
    }
  }

  return {
    status: `success`,
    content
  };
}
