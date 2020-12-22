import React, {useState} from 'react';

import Header from '../components/header/header';
import Table from '../components/table/table';
import {createIssue} from '../utils/api-fetching';
import {getIssues} from './api/issues';
import {parse} from '../utils/common';

export async function getStaticProps() {
  const { error, content } = await getIssues();
  let issues = null;
  if (!error) {
    issues = parse(content)
  }

  return {
    props: {
      issues,
    }
  };
}

const Main = ({issues: fetchedIssues}) => {
  const [isLoading, setLoading] = useState(false);
  const [issues, setIssues] = useState(fetchedIssues);

  const onClick = async () => {
    setLoading(true);
    const issues = await createIssue()
      .then((res) => {
        setLoading(false);
        return res;
      });
    setIssues(issues.content);
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
