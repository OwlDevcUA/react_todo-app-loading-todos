import classNames from 'classnames';
import React, { useState } from 'react';
import { Todo } from '../types/Todo';

type Props = {
  todos: Todo[];
  onStatusChange: (status: 'All' | 'Active' | 'Completed') => void;
};

export const TodoFooter: React.FC<Props> = ({ todos, onStatusChange }) => {
  const [status, setStatus] = useState<'All' | 'Active' | 'Completed'>('All');

  const handleStatusChange = (option: 'All' | 'Active' | 'Completed') => {
    setStatus(option);
    onStatusChange(option);
  };

  const completedTodos = todos.filter(todo => todo.completed);
  const notCompletedTodos = todos.filter(todo => !todo.completed);

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {notCompletedTodos.length} items left
      </span>

      {/* Active link should have the 'selected' class */}
      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', { selected: status === 'All' })}
          data-cy="FilterLinkAll"
          onClick={e => {
            e.preventDefault();
            handleStatusChange('All');
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
            handleStatusChange('Active');
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
            handleStatusChange('Completed');
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
        disabled={completedTodos.length === 0}
      >
        Clear completed
      </button>
    </footer>
  );
};
