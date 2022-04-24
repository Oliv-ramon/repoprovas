import { useState, createContext } from "react";

import { Auth } from "../services/api"


const AuthContext = createContext<any>(null);

interface Props {
	children: JSX.Element
}

export function AuthProvider({ children }: Props) {
	const authStored = JSON.stringify(localStorage.getItem("auth"));
	const persistedAuth: Auth | null = JSON.parse(authStored);

	const [auth, setAuth] = useState(persistedAuth);

	function persistLogged(authData: Auth) {
		setAuth(authData);
		localStorage.setItem("auth", JSON.stringify(authData));
	}

	function removeLogged() {
		localStorage.removeItem("auth");
	}

	return (
		<AuthContext.Provider value={{ auth, persistLogged, removeLogged }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;
