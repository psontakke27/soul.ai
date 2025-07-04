import React from "react";
import "./AssessmentCard.css";

function AssessmentCard({title, type, questions, duration, skills }) {

  return (
    <div className="card">
        <h3>{title}</h3>
        <p className="mata">{type}</p>
        <p className="meta">{questions} questions • {duration} mins </p>
        <p className="skills">Skills: {skills}</p>
        <button className="btn">Take Test</button>

    </div>
   
  );
}

export default AssessmentCard;