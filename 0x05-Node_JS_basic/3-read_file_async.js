const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split('\n');

        if (lines.length < 2) {
            throw new Error('No data available');
        }

        const students = lines.slice(1).filter(line => line !== '').map(line => line.split(','));
        const totalStudents = students.length;

        console.log(`Number of students: ${totalStudents}`);

        const fields = {};

        students.forEach(student => {
            const field = student[3];
            const firstname = student[0];

            if (!fields[field]) {
                fields[field] = [];
            }

            fields[field].push(firstname);
        });

        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }

    } catch (error) {
        console.error('Cannot load the database');
        throw error;
    }
}

module.exports = countStudents;
