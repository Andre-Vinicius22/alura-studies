import Itasks from "../../../types/task";
import style from "../Item/Item.module.scss";

interface Props extends Itasks {
	selectTask: (selectedTask: Itasks) => void;
}

function Item({ task, time, selected, completed, id, selectTask }: Props) {
	return (
		<li
			className={`${style.item} ${selected ? style.selectedItem : ""} ${
				completed ? style.completeItem : ""
			}`}
			onClick={() =>
				!completed &&
				selectTask({ task, time, selected, completed, id })
			}
		>
			<h3> {task} </h3>
			<p> {time} </p>
			{completed && (
				<span className={style.done} aria-label="Task done"></span>
			)}
		</li>
	);
}

export default Item;
