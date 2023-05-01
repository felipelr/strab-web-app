import React, { useContext } from "react";

type AuthStateProps = {
    token: string
}

type AuthContextProps = {
    authState?: AuthStateProps,
    setAuthState?: (data: string) => void
    isUserAuthenticated: boolean,
}

const INITIAL_STATE: AuthContextProps = {
    isUserAuthenticated: false
}
const AuthContext = React.createContext<AuthContextProps>(INITIAL_STATE)
const { Provider } = AuthContext

const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [authState, setAuthState] = React.useState<AuthStateProps>({
        token: "",
    })

    const setUserAuthInfo = (data: string) => {
        localStorage.setItem("token", data);
        setAuthState({
            token: data,
        });
    }
    const isUserAuthenticated = !!authState.token;

    return (
        <Provider
            value={{
                authState,
                setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
                isUserAuthenticated,
            }}
        >
            {children}
        </Provider>
    )
}

const authContext = useContext(AuthContext)

export { AuthProvider, authContext }