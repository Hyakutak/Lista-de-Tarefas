import { Component } from "react";

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleFormulario = this.toggleFormulario.bind(this);
        this.handleSalvar = this.handleSalvar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleRemove() {
        this.props.removeTarefa(this.props.id)
    }
    toggleFormulario() {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }
    handleSalvar(e) {
        e.preventDefault();
        this.props.atualizarTarefa(this.props.id, this.state.task);
        this.setState({ isEdit: false })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    render() {
        let result;
        if(this.state.isEdit) {
            result = (
                <div>
                    <form onSubmit={this.handleSalvar}>
                        <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
                        <input type="submit" value="Salvar" />
                    </form>
                </div>
            );
        } else {
            result = (
                <div>
                    <li>{ this.props.task }</li>
                    <button onClick={this.handleRemove}>X</button>
                    <button onClick={this.toggleFormulario}>Editar Tarefa</button>
                </div>
            );
        }
        return result;
    }
}

export default Task;