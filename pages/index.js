import React, { useEffect, useState } from "react";
import { StatusLine } from "../Options/StatusLine";
import { Section } from "../Options/StatusStyle";

export default function Home() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTaskFromLocalStorage()
  }, []);

  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];
    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        title: "",
        comments: "",
        status: status,
      }
    ])
  }

  function addTask(taskToAdd) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskToAdd.id;
    })

    let newTaskList = [...filteredTasks, taskToAdd]

    setTasks(newTaskList)

    saveTaskToLocalStorage(newTaskList)
  }

  function deleteTask(taskId) {
    let filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    })

    setTasks(filteredTasks)

    saveTaskToLocalStorage(filteredTasks)
  }

  function moveTask(id, newStatus) {
    let task = tasks.filter((task) => {
      return task.id === id;
    });

    let filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    }) 

    task.status = newStatus;

    let newTaskList = [...filteredTasks, task]

    setTasks(newTaskList);

    saveTaskToLocalStorage(newTaskList)
  }

  function saveTaskToLocalStorage(task) {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  function loadTaskFromLocalStorage() {
    let loadedTask = localStorage.getItem("tasks")

    let tasks = JSON.parse(loadedTask);

    if (tasks) {
      setTasks(tasks);
    }
  }

  return (
    <>
      <main>
        <Section>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Entrevista inicial"
          >
          </StatusLine>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Entrevista tecnica"
          >
          </StatusLine>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Oferta"
          >
          </StatusLine>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Asignación"
          >
          </StatusLine>
          <StatusLine
            tasks={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Rechazo"
          >
          </StatusLine>
        </Section>
      </main>
    </>
  )
}


