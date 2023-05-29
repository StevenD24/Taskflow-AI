import { Draggable, Droppable } from "@hello-pangea/dnd";

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

function Column({id, todos, index}: Props) {
  return (
    <Draggable draggableId={id} index={index}>
        {(provided) => (
            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                {/* render droppable todos in the column */}
                <Droppable droppableId={index.toString()} type="card">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`pb-2 p-2 rounded-2xl shadow-sm ${
                                snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                            }`}
                        >
                            <h2>{id}</h2>
                        </div>
                    )}
                </Droppable>
            </div>
        )}
    </Draggable>
  )
}

export default Column