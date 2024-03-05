import Image from "next/image";
import classes from "./page.module.css";

export const metadata = {
	title: 'Cheese',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={classes.className}>{children}
				<div className={classes.conteiner}>
					<div className={classes.conteiner_left}>
						<div>Для Клиентов</div>
						<div>Для Фотографа</div>
					</div>
				</div>

				<div className={classes.App}>
					<form>
						<div className={classes.input_group}>
							<label htmlFor="name">Номер галереи: </label>
							<input type="number" id="name" />
						</div>
						<div className={classes.input_group}>
							<label htmlFor="email">Пароль для входа в галерею: </label>
							<input type="text" id="name" />
						</div>
						<div className={classes.button_view}>
							<button type="submit" className={classes.submit_btn}>
								Вход
							</button>
						</div>
					</form>
				</div>
			</body>
		</html >
	);
}