import style from "./List.module.scss";
import Item from "./Item";
import Itasks from "../../types/task";

interface Props {
	tasks: Itasks[];
	selectTask: (selectedTask: Itasks) => void;
}

function List({ tasks, selectTask }: Props) {
	return (
		<aside className={style.taskList}>
			<h2>studies of the day</h2>
			<ul>
				{tasks.map((item) => (
					<Item selectTask={selectTask} key={item.id} {...item} />
				))}
			</ul>
		</aside>
	);
}

export default List;
