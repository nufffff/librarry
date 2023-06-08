import * as React from "react";
import {request, setAuthHeader} from "../helpers/axios_helper";

export default class Visitors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    componentDidMount() {
        request(
            "GET",
            "/getVisitors",
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
                    <h5 className="card-title">Список посетителей</h5>
                    <p className="card-text">Посетители:</p>
                    <ul>
                        {this.state.data && this.state.data
                            .map((line) =>
                                <div>
                                    <li className="books" onClick={() => this.props.showVisitor(line.id)}>{line.lastName} {line.firstName} {line.middleName}</li>
                                </div>
                            )
                        }
                    </ul>
                    <input type="submit" value="Зарегистрировать посетителя" onClick={this.props.addVisitor}/>
                </div>
            </div>
        );
    };
}