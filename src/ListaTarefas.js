import { React, Component } from "react";
import Task from "./Tasks";
import NovaTarefa from "./NovaTarefa";

class ListaTarefas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tarefas: [],
        }
        this.criar = this.criar.bind(this);
        this.remover = this.remover.bind(this);
        this.atualizar = this.atualizar.bind(this);
    }
    criar(novaTarefa) {
        this.setState({
            tarefas: [...this.state.tarefas, novaTarefa]
        })
    }
    remover(tarefa) {
        this.setState({
            tarefas: this.state.tarefas.filter(item => item.id !== tarefa)
        })
    }
    atualizar(id, atualizarTarefa) {
        const atualizar = this.state.tarefas.map(task => {
            if(task.id === id) {
                return { ...task, task: atualizarTarefa }
            }
            return task;
        });
        this.setState({ tarefas: atualizar})
    }
    
    render() {
        const task = this.state.tarefas.map(tarefa => {
            return <Task key={tarefa.id} id={tarefa.id} task={tarefa.task} removeTarefa={this.remover} atualizarTarefa={this.atualizar}/>
        });
        return (
            <div>
                <h1>Lista de Tarefas</h1>
                <ul>
                    {task}
                </ul>
                <NovaTarefa novaTarefa={this.criar} />
            </div>
        );
    }
}

export default ListaTarefas;