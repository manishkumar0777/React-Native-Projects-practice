import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import Appwrite from './service'; // Ensure this is correctly imported

// Define the context type
type AppwriteContextType = {
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
};

// Create the context with a default value
export const AppwriteContext = createContext<AppwriteContextType>({
    appwrite: new Appwrite(), // Ensure this is properly configured
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});

// Create the provider component
export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // Create a single instance of Appwrite
    const appwrite = new Appwrite(); // Initialize with proper configuration if needed

    const defaultValue: AppwriteContextType = {
        appwrite,
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <AppwriteContext.Provider value={defaultValue}>
            {children}
        </AppwriteContext.Provider>
    );
};

export default AppwriteContext;
