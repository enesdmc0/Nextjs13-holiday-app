"use client";
import {Provider} from "jotai"


const AtomProvider = ({children}: {children: React.ReactNode}) => {
    return (
        <Provider>
            {children}
        </Provider>
    );
};

export default AtomProvider;
