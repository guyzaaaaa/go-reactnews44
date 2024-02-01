import React, { useState, useEffect } from 'react';
import Student from '../Student'; // Ensure this path is correct

const StudentFormFind = () => {
    const [inputId, setInputId] = useState('');
    const [studentId, setStudentId] = useState(null);

    useEffect(() => {
        console.log("Updated studentId=" + studentId);
    }, [studentId]); // This effect will run whenever studentId changes

    const handleSubmit = (event) => {
        event.preventDefault();
        // print inputId to console
        console.log("inputId=" + inputId);
        const parsedId = Number(inputId);
        setStudentId(parsedId); // Convert inputId to a number
    };

    useEffect(() => {
        console.log("Effect: studentId=" + studentId);
    }, [studentId]); // This effect will run whenever studentId changes

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Student ID:
                    <input
                        type="number"
                        value={inputId}
                        onChange={e => setInputId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {/* Render the Student component if studentId is not null */}
            {studentId !== null && <Student id={studentId} />}
        </div>
    );
};

export default StudentFormFind;
