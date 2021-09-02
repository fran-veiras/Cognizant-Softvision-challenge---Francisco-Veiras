import React, {useState} from 'react';

export default function Task(props) {

    const {addTask, deleteTask, moveTask, task} = props;

    const [collapsed, setCollapsed] = useState(task.isCollapsed)
    const [formAction, setFormAction] = useState("")

    function handleSubmit(event) {
        event.preventDefault();

        if (formAction === "save") {
            if (collapsed) {
                setCollapsed(false);
            } else {
                let newTask = {
                    id: task.id,
                    title: event.target.elements.title.value,
                    comments: event.target.elements.comments.value,
                    status: task.status, 
                    isCollapsed: true,
                };

                addTask(newTask);
                setCollapsed(true);
            }
        }

        if (formAction === "delete") {
            deleteTask(task.id);
        }
    }

    function handleMoveLeft() {
        let newStatus = "";

        if (task.status === "Rechazo") {
            newStatus = "Asignación";
        }else if (task.status === "Asignación") {
            newStatus = "Oferta";
        }else if (task.status === "Oferta") {
            newStatus = "Entrevista tecnica";
        }else if (task.status === "Entrevista tecnica") {
            newStatus = "Entrevista inicial";
        }

        if (newStatus !== "") {
            moveTask(task.id, newStatus)
        }
    }

    function handleMoveRight() {
        let newStatus = "";

        if (task.status === "Entrevista inicial") {
            newStatus = "Entrevista tecnica";
        } else if (task.status === "Entrevista tecnica") {
            newStatus = "Oferta";
        } else if (task.status === "Oferta") {
            newStatus = "Asignación";
        } else if (task.status === "Asignación") {
            newStatus = "Rechazo";
        }

        if (newStatus !== "") {
            moveTask(task.id, newStatus);
        }
    }

    return (
        <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
            <button onClick={handleMoveLeft}>
                &#171;
            </button>
            <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Nombre"
                    disabled={collapsed}
                    defaultValue={task.title}
                />
                <input 
                    rows="2"
                    name="comments"
                    placeholder="Agregar comentario"
                    defaultChecked={task.comments}
                />
                <button onClick={() => {
                    setFormAction("save")
                }}>
                    {collapsed ? "Edit" : "Save"}
                </button>
                {collapsed && (
                <button onClick={() => {
                    setFormAction("delete")
                }}>
                    X
                </button>)}
            </form>
            <button onClick={handleMoveRight}>
                &#187;
            </button>
        </div>
    )
}
