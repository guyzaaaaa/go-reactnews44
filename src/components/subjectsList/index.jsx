import React, { useEffect, useState } from 'react';

const SubjectsList = () => {
    const [subjects, setSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchSubjects = async () => {
        try {
            const response = await fetch('http://localhost:5000/subjects');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setSubjects(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSubjects();
    }, []);

    return (
        <div>
            <h1 style={styles.heading}>Subjects List</h1>
            {isLoading && <p style={styles.loading}>Loading...</p>}
            {error && <p style={styles.error}>Error: {error}</p>}
            <table style={styles.table}>
                <thead>
                    <tr style={styles.tableRow}>
                        <th style={styles.tableHeaderCell}>ID</th>
                        <th style={styles.tableHeaderCell}>Name</th>
                        <th style={styles.tableHeaderCell}>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map(subject => (
                        <tr key={subject.ID} style={styles.tableRow}>
                            <td style={styles.tableCell}>{subject.ID}</td>
                            <td style={styles.tableCell}>{subject.Name}</td>
                            <td style={styles.tableCell}>{subject.Description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    heading: {
        fontSize: '24px',
        marginBottom: '10px',
        color: 'goldenrod',
    },
    loading: {
        fontStyle: 'italic',
        color: 'goldenrod',
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
        border: '1px solid goldenrod',
        backgroundColor: 'gold',
    },
    tableHeaderCell: {
        background: 'goldenrod',
        border: '1px solid goldenrod',
        padding: '8px',
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'white',
    },
    tableCell: {
        border: '1px solid goldenrod',
        padding: '8px',
        textAlign: 'left',
        color: 'goldenrod',
    },
};

export default SubjectsList;
