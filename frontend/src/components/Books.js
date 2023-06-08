import {request, setAuthHeader} from "../helpers/axios_helper";
import * as React from "react";

export default class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    componentDidMount() {
        request(
            "GET",
            "/getBooks",
            {}).then(
            (response) => {
                this.setState({data: response.data})
            }).catch(
            (error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    this.setState({data: error.response.code})
                }

            }
        );
    };

    render() {
        return (
            <div className="card" style={{width: "70rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Список книг</h5>
                    <p className="card-text">Книги:</p>
                    <ul>
                        {this.state.data && this.state.data
                            .map((line) =>
                                <li className="books" onClick={() => this.props.showBook(line.id)}>{line.title}, {line.author}, {line.year}</li>
                            )
                        }
                    </ul>
                    <input type="submit" value="Добавить книгу" onClick={this.props.addBook}/>
                </div>
            </div>
        );
    };
}