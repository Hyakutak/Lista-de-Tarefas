import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class NovaTarefa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.novaTarefa({...this.state, id: uuidv4()});
        this.setState({task: ""});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Adicionar Tarefa"
                    name="task"
                    onChange={this.handleChange}
                    value={this.state.task}
                    id="task"
                >
                </input>
                <input type="submit" value="Adicionar"></input>
            </form>
        )
    }
}

export default NovaTarefa;