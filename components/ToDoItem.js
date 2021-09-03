import html from "../core.js"
import { connect } from "../store.js";
function ToDoItem( {todo, index, editIndex} ){
	return html`
			<li class="${todo.complete && 'completed'}
								${editIndex === index && 'editing'}"
			>
						<div class="view">
							<input class="toggle" 
								type="checkbox" 
								${todo.complete && 'checked'}
								onchange="dispatch('toggle', ${index})"
							>
							<label ondblclick="dispatch('onEdit', ${index})">${todo.title}</label>
							<button class="destroy" onclick="dispatch('delete', ${index})"></button>
						</div>
						<input class="edit" value="${todo.title}"
								onkeyup="event.keyCode === 13 && dispatch('onSave', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
								onblur="dispatch('cancelEdit')"
								>
			</li>	`
}

export default connect()(ToDoItem)