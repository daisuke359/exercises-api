import React from 'react';
import "./exercise.css";

export default function Exercise({exercise}) {
    return (
        <div className="exercise">
            <h4 className="exercise-title">{exercise.name}</h4>
            <p className="exercise-part">{exercise.bodyPart}</p>
            <img src={exercise.gifUrl} alt="" />
        </div>
    )
}
