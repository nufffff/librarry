import * as React from 'react';

export default class WelcomeContent extends React.Component {

  render() {
    return (
        <div className="row justify-content-md-center">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">Добро пожаловать</h1>
                <p className="lead">Вам нужно авторизоваться в системе для дальнейшей работы.</p>
              </div>
            </div>
        </div>
    );
  };
}