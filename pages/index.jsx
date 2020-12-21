import React, {useState} from 'react';

import Header from '../components/header/header';
import Table from '../components/table/table';
import {createIssue, createUser} from '../utils/api-fetching';

const Main = () => {
  const [isLoading, setLoading] = useState(false);
  const [issues, setIssues] = useState([]);
  const onClick = async () => {
    setLoading(true);
    const issues = await createIssue()
      .then((res) => {
        setLoading(false);
        return res;
      });
    setIssues(issues.content);
    console.log(issues);
  }
  return (
    <>
      <Header />
      <Table issues={issues} />
      {isLoading && <h3>Loading....</h3>}
      <button onClick={onClick}>Создать случайную заявку</button>
    </>
  );
}

export default Main;
