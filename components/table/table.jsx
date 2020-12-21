import React from 'react';

import Row from '../row/row';

const Table = ({issues}) => {
  return (
    <section className="table-section">
      <div className="table__wrapper">
        <table className="table">
          <thead className="table__head">
            <tr className="table__row">
              <th className="table__cell table__cell_header">№</th>
              <th className="table__cell table__cell_header">Дата создания</th>
              <th className="table__cell table__cell_header table__cell_content_topic">Тема заявки</th>
              <th className="table__cell table__cell_header table__cell_content_client">Заказчик</th>
              <th className="table__cell table__cell_header">Тип заявки</th>
              <th className="table__cell table__cell_header">Продукт</th>
              <th className="table__cell table__cell_header">Отдел</th>
              <th className="table__cell table__cell_header">Ответственный</th>
              <th className="table__cell table__cell_header">Статус</th>
              <th className="table__cell table__cell_header">Регламентная дата решения</th>
              <th className="table__cell table__cell_header">Дата решения</th>
              <th className="table__cell table__cell_header">Последний ответ</th>
              <th className="table__cell table__cell_header">Приоритет</th>
              <th className="table__cell table__cell_header">Просрочен</th>
            </tr>
          </thead>
          <tbody className="table__body">
            {issues && issues.map((issue, i) => (
              <Row key={`issue-${i}`} issue={issue} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
