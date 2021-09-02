import React from 'react'
import { Container, Add } from './StatusStyle';
import Task from './Task'

export default function StatusLine(props) {

    const {status, moveTask, deleteTask, addTask, addEmptyTask, tasks} = props;

    let taskList, tasksForStatus;

    function handleAddEmpty() {
        addEmptyTask(status);
    }

    if (tasks) {
        tasksForStatus = tasks.filter((task) => {
            return task.status === status;
        });
    }

    if (tasksForStatus) {
        taskList = tasksForStatus.map((task) => {
            return (
                <Task
                    addTask={(task) => addTask(task)}
                    deleteTask={(id) => deleteTask(id)}
                    moveTask={(id, status) => moveTask(id, status)}
                    key={task.id}
                    task={task}
                />
            );
        });
    }

    return (
        <Container>
            <h3>{status}</h3>
            {taskList}
            <Add onClick={handleAddEmpty}>
                Añadir candidato
            </Add>
        </Container>
    );
}
