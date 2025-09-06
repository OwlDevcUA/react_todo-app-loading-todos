import classNames from 'classnames';
import React from 'react';

type Props = {
  errorMessage: string;
  onClearMessage: () => void;
};

export const ErrorNotification: React.FC<Props> = ({
  errorMessage,
  onClearMessage,
}) => {
  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification is-danger is-light has-text-weight-normal',
        { hidden: !errorMessage },
      )}
    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={() => onClearMessage()}
      />
      {/* show only one message at a time */}
      {errorMessage}
    </div>
  );
};
