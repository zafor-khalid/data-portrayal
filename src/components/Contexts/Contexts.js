import React, { createContext, useState } from 'react';
export const landingPageDataContext = createContext({});
// export const stylesContext = createContext({});

const Contexts = ({ children }) => {
    const [pageData, setPageData] = useState({});
    //  const [styles, setStyles] = useState({});
    // console.log(pageData);
    return (
        <landingPageDataContext.Provider value={[pageData, setPageData]}>
            {/* <stylesContext.Provider value={[styles, setStyles]}> */}
                {children}
            {/* </stylesContext.Provider> */}
        </landingPageDataContext.Provider>

    );
};

export default Contexts;