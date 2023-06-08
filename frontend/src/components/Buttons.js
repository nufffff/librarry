import * as React from 'react';

export default function Buttons(props) {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <button className="btn btn-light" onClick={props.login}>
          Войти
        </button>
        <button className="btn btn-dark" onClick={props.logout}>
          Выйти
        </button>
      </div>
    </div>
  );
};
