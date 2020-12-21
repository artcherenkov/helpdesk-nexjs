import React, {useState} from 'react';

import {createUser, fetchUsersList} from '../utils/api-fetching';

export async function getStaticProps() {
  const usersList = await fetchUsersList();

  return {
    props: {
      usersList
    }
  };
}

export default function Home({usersList}) {
  const [users, setUsers] = useState(usersList);
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    const result = await createUser(evt.target)
      .then((res) => {
        setLoading(false);
        return res;
      });
    const { status, content } = result;
    setUsers(content);
  }

  return (
    <>
      <h1>Hello world</h1>
      <form action="#" onSubmit={onSubmit}>
        <legend>Создание пользователя {isLoading && `Загрузка`}</legend>
        Имя <input type="text" name="name"/><br/>
        Фамилия <input type="text" name="surname"/><br/>
        E-mail <input type="text" name="email"/><br/>
        Пароль <input type="text" name="password"/><br/>
        <button type="submit">Сохранить</button>
      </form>
      <h2>Users list</h2>
      <ul>{users && users.map((user, i) =>
        <li key={`user-${i}`}>{user.name}</li>
      )}
      </ul>
    </>
  );
}
