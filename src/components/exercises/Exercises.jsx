import React, {useRef} from 'react'
import Exercise from './Exercise';
import axios from "axios";
import "./exercises.css";
import { useExerciseContext } from '../../context/ExerciseContext';
import Pagination from '../pagination/Pagination';

export default function Exercises() {

    const {
        exercises,
        setExercises,
        currentPage,
        setCurrentPage,
        postsPerPage
    } = useExerciseContext();

    const text = useRef();
    const category = useRef();

    //get current posts
    const indexOfLastItem = currentPage * postsPerPage;
    const indexOfFirstItem = indexOfLastItem - postsPerPage;
    const currentItems = exercises.slice(indexOfFirstItem, indexOfLastItem);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(text.current.value && category.current.value) {
            try {
                const res = await axios.get('https://exercisedb.p.rapidapi.com/exercises/'+category.current.value+"/"+text.current.value, {
                headers: {
                    'x-rapidapi-key': '52ae307c2cmsh464aec68178493dp1c1a65jsn935ab7c7bc08',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                }
            });
            setExercises(res.data);
            } catch(err) {
                alert("No item found");
                console.log(err);
            }
        }
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }



    return (
        <>
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit}>
                <select ref={category} name="category" id="category">
                    <option value="bodyPart">Body Part</option>
                    <option value="name">Workout</option>
                </select>
                <input ref={text} type="text" placeholder="Search body part or workout name" />
                <button type="submit">Search</button>
            </form>
        </div>
        <div className="exercises">
            <h2 className="exercises-title">Exercises</h2>
            <div className="exercises-wrapper">
            {currentItems.map((exercise, index) => (
                <Exercise key={index} exercise={exercise} />
            ))}
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={exercises.length} paginate={paginate} />
        </div>
        </>
    )
}
