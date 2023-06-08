import * as React from "react";
import {request, setAuthHeader} from "../helpers/axios_helper";

export default class Visitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visitor: [],
        }
    };
    componentDidMount() {
        request(
            "GET",
            "/getVisitorBookList/" + this.props.visitor_id,
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
        request(
            "GET",
            "/getVisitor/" + this.props.visitor_id,
            {}).then(
            (response) => {
                this.setState({visitor: response.data})
            }).catch(
            (error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    this.setState({data: error.response.code})
                }
            }
        );
    }

    render() {
        return (
            <div className="card" style={{width: "70rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Посетитель : {this.state.visitor.lastName} {this.state.visitor.firstName} {this.state.visitor.middleName} </h5>
                    {this.state.data.length === 0 ?
                        (<div>Посетитель пока не взял ни одной книги</div>) :
                        (<div>
                            <b>Книги:</b>
                            {this.state.data && this.state.data
                            .map((line) =>
                                <div>
                                    <p>{line.title}, {line.author}, {line.year}</p>
                                </div>)
                            }
                        </div>)
                    }
                </div>
            </div>
        );
    };
}