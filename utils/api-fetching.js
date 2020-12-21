import {collectFormData} from './common';
import {generateIssue} from '../mock/issue';

export async function fetchUsersList() {
  const response = await fetch(`/api/users`);
  const data = await response.json();
  const {content} = data;
  return content;
}

export async function fetchIssuesList() {
  const response = await fetch(`/api/issues`);
  const data = await response.json();
  const {content} = data;
  return content;
}

export async function createUser(form) {
  const response = await fetch(`/api/users/create`, {
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

export async function createIssue(form) {
  const response = await fetch(`/api/issues/create`, {
    method: 'POST',
    body: JSON.stringify({content: generateIssue()})
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
