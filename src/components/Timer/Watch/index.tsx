import style from "./Watch.module.scss";

interface Props {
	time: number | undefined;
}

function Watch({ time = 0 }: Props) {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	const [minutesTen, unitMinutes] = String(minutes).padStart(2, "0");
	const [secondsTen, unitSeconds] = String(seconds).padStart(2, "0");
	return (
		<>
			<span className={style.watchNumber}>{minutesTen}</span>
			<span className={style.watchNumber}>{unitMinutes}</span>
			<span className={style.watchDivision}>:</span>
			<span className={style.watchNumber}>{secondsTen}</span>
			<span className={style.watchNumber}>{unitSeconds}</span>
		</>
	);
}

export default Watch;
