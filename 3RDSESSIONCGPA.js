function generateCourseInputs() {
    const totalCourses = document.getElementById('totalCourses').value;
    const coursesContainer = document.getElementById('coursesContainer');
    coursesContainer.innerHTML = '';

    for (let i = 0; i < totalCourses; i++) {
        const courseGroup = document.createElement('div');
        courseGroup.className = 'form-group';

        const courseLabel = document.createElement('label');
        courseLabel.textContent = `Course ${i + 1} Code:`;
        courseGroup.appendChild(courseLabel);

        const courseInput = document.createElement('input');
        courseInput.type = 'text';
        courseInput.name = `courseCode${i}`;
        courseInput.required = true;
        courseGroup.appendChild(courseInput);

        const gradeLabel = document.createElement('label');
        gradeLabel.textContent = `Course ${i + 1} Grade:`;
        courseGroup.appendChild(gradeLabel);

        const gradeInput = document.createElement('input');
        gradeInput.type = 'text';
        gradeInput.name = `courseGrade${i}`;
        gradeInput.required = true;
        courseGroup.appendChild(gradeInput);

        coursesContainer.appendChild(courseGroup);
    }
}

const courseData = {
    'CS101': 3,
    'MATH101': 4,
    'ENG101': 2,
    // Add more courses and their credit values here
};

const gradeWeight = {
    'A': 4,
    'B': 3,
    'C': 2,
    'D': 1,
    'F': 0
};

function calculateCGPA(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('coursesForm'));
    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let [key, value] of formData.entries()) {
        if (key.startsWith('courseCode')) {
            const index = key.replace('courseCode', '');
            const gradeKey = `courseGrade${index}`;
            const courseCode = value.trim().toUpperCase();
            const courseGrade = formData.get(gradeKey).trim().toUpperCase();

            if (courseData[courseCode] && gradeWeight[courseGrade] !== undefined) {
                const courseCredits = courseData[courseCode];
                const gradePoints = gradeWeight[courseGrade];

                totalCredits += courseCredits;
                totalGradePoints += (courseCredits * gradePoints);
            } else {
                alert('Invalid course code or grade entered.');
                return;
            }
        }
    }

    const cgpa = totalGradePoints / totalCredits;
    document.getElementById('result').textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
