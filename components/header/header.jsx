import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

const PageHeader = styled.header`
  height: 50px;
  background-color: #e7e7e7;
  border: 1px solid #104673;
  display: flex;
  padding-left: 20px;
  align-items: center;
`;
const Button = styled.button`
  background-color: #2196f3;
  padding: 5px;
  margin: 0;
  margin-left: 40px;
  border: none;
  border-radius: 5px;
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #F1F1F1;
  cursor: pointer;
  
  &:hover {
    opacity: .6;
  }
  
  &:active {
    opacity: .3;
  }
`;
const Image = styled.img`
  margin-right: 5px;
  margin-bottom: 1px;
  width: 15px;
  height: 15px;
`;

const Header = ({onAddBtnClick}) => {
  return (
    <PageHeader>
      <Link href="/">
        <a>
          <img src="img/logo.svg" alt="Логотип"/>
        </a>
      </Link>
      <Button onClick={onAddBtnClick}>
        <Image src="img/icon-plus.svg" alt="Добавить"/> Создать
      </Button>
    </PageHeader>
  );
};

export default Header;
