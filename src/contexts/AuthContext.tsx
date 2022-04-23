import { useState, createContext } from "react";

const AuthContext = createContext(undefined);

interface Props {
  children: JSX.Element
}

export function AuthProvider({ children }: Props) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
	const [auth, setAuth] = useState(persistedAuth);

	function persistLogged(authData) {
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
