import { useContext, useEffect, useRef } from "react";
import * as ReactDOMClient from "react-dom/client";
import { AppContext } from "../../pages/_app";
import C from "classnames";
import S from "./theme-toggle.module.scss";

let containerRoot: ReactDOMClient.Root | null = null;

export default function ThemeToggle(props) {
	const { theme, setTheme } = useContext(AppContext);
	const container = useRef<HTMLDivElement>(null);

	const toggleTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	useEffect(() => {
		if (container.current) {
			if (!containerRoot) containerRoot = ReactDOMClient.createRoot(container.current);
			if (theme === "dark") {
				containerRoot.render(
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<circle cx="12" cy="12" r="5" />
						<path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
					</svg>
				);
			} else {
				containerRoot.render(
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>
				);
			}
		}
	}, [theme]);

	return <div className={C(S.toggle, props.className)} onClick={toggleTheme} ref={container}></div>;
}
