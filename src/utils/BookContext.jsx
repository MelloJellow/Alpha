import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) =>{
    const [bookData, setBookData] = useState(null);
    return(
        <BookContext.Provider value={{ bookData, setBookData}}>
            {children}
        </BookContext.Provider>
    );
};

export const useBook = () => useContext(BookContext);