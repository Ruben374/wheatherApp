import {
    createContext,
    useState,
    ReactNode,
    useEffect,
    useContext,
} from "react";
type DetailProviderProps = {
    children: ReactNode;
};
export const DetailContext = createContext({} as any);
export function DetailProvider({ children }: DetailProviderProps) {

    return (
        <DetailContext.Provider
            value={{

            }}
        >
            {children}
        </DetailContext.Provider>
    );
}
