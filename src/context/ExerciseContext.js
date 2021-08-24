import { createContext, useState, useContext } from "react";

export const ExerciseContext = createContext();


export const ExerciseContextProvider = ({children}) => {
    
    const [exercises, setExercises] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(20);

    const value = {
        exercises,
        setExercises,
        currentPage,
        setCurrentPage,
        postsPerPage,
        setPostPerPage
    };

    return (
        <ExerciseContext.Provider value={value}>
            {children}
        </ExerciseContext.Provider>
    );
}

export const useExerciseContext = () => useContext(ExerciseContext);

