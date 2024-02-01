import React, { useEffect, useState } from 'react';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:5000/students');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <div>
            <h1 style={styles.heading}>Students List</h1>
            {isLoading && <p style={styles.loading}>Loading...</p>}
            {error && <p style={styles.error}>Error: {error}</p>}
            <table style={styles.table}>
                <thead>
                    <tr style={styles.tableRow}>
                        <th style={styles.tableHeaderCell}>ID</th>
                        <th style={styles.tableHeaderCell}>First Name</th>
                        <th style={styles.tableHeaderCell}>Last Name</th>
                        <th style={styles.tableHeaderCell}>Age</th>
                        <th style={styles.tableHeaderCell}>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.ID} style={styles.tableRow}>
                            <td style={styles.tableCell}>{student.ID}</td>
                            <td style={styles.tableCell}>{student.FirstName}</td>
                            <td style={styles.tableCell}>{student.LastName}</td>
                            <td style={styles.tableCell}>{student.Age}</td>
                            <td style={styles.tableCell}>{student.Grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    heading: {
        color: 'blue', // Updated to blue color
    },
    loading: {
        fontStyle: 'italic',
        color: 'blue', // Updated to blue color
    },
    error: {
        color: 'red',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
    },
    tableRow: {
        border: '1px solid #ddd',
        backgroundColor: 'lightblue', // Updated to light blue background
    },
    tableHeaderCell: {
        background: 'blue', // Updated to blue background
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'white', // Updated to white text color
    },
    tableCell: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        color: 'blue', // Updated to blue text color
    },
};

export default StudentsList;
