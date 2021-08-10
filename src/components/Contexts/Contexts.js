import React, { createContext, useState, useEffect } from 'react';
export const dataContext = createContext({});
export const languageContext = createContext('');
export const stylesContext = createContext({});

const Contexts = ({ children }) => {
    const [pageData, setPageData] = useState({});
    const [language, setLanguage] = useState('en');
    const [styles, setStyles] = useState({});

    return (
        <dataContext.Provider value={[pageData, setPageData]}>
            <languageContext.Provider value={[language, setLanguage]}>
                <stylesContext.Provider value={[styles, setStyles]}>
                    {children}
                </stylesContext.Provider>
            </languageContext.Provider>
        </dataContext.Provider>

    );
};

export const useDataContextContext = () => {
    return useContext(dataContext)
}

export const useStyleContext = () => {
    return useContext(stylesContext)
}

export const useLanguageContext = () => {
    return useContext(languageContext)
}
export default Contexts;

