import classNames from 'classnames';
import React, { useState } from 'react';

type Props = {
  onStatusChange: (status: string) => void;
};

export const TodoFooter: React.FC<Props> = ({ onStatusChange }) => {
  const [status, setStatus] = useState<'All' | 'Active' | 'Completed'>('All');

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        3 items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', { selected: status === 'All' })}
          data-cy="FilterLinkAll"
          onClick={e => {
            e.preventDefault();

            setStatus('All');
          }}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: status === 'Active',
          })}
          data-cy="FilterLinkActive"
          onClick={e => {
            e.preventDefault();

            setStatus('Active');
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: status === 'Completed',
          })}
          data-cy="FilterLinkCompleted"
          onClick={e => {
            e.preventDefault();

            setStatus('Completed');
          }}
        >
          Completed
        </a>
      </nav>

      {/* this button should be disabled if there are no completed todos */}
      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
      >
        Clear completed
      </button>
    </footer>
  );
};
