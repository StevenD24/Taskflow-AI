import { Draggable } from "react-beautiful-dnd";

function Column() {
  return (
    <Draggable>
        {(provided) => (
            <div>
                {/* render droppable todos in the column */}
            </div>
        )}
    </Draggable>
  )
}

export default Column