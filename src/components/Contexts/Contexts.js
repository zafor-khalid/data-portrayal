import React, { createContext, useState } from 'react';
export const landingPageDataContext = createContext();


const Contexts = ({children}) => {
    const [pageData, setPageData] = useState({});

    console.log(pageData);
    return (
        <landingPageDataContext.Provider value={[pageData, setPageData]}>
            
        {children}
        </landingPageDataContext.Provider>

    );
};

export default Contexts;