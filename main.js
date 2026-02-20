function calculateGPA() {
    const marks = document.querySelectorAll('.course-mark');
    let total = 0;
    let count = 0;

    marks.forEach(input => {
        const val = parseFloat(input.value);
        if (!isNaN(val)) {
            total += val;
            count++;
        }
    });

    if (count === 0) {
        document.getElementById('gpa-output').innerText = "Please enter marks.";
        document.getElementById('class-output').innerText = "";
        return;
    }

    const average = total / count;
    const gpa = (average / 25).toFixed(2);

    document.getElementById('gpa-output').innerText = `GPA: ${gpa}`;
    document.getElementById('class-output').innerText = `Average: ${average.toFixed(2)}%`;
}

/* CV Generator */
function generateCV() {
    const name = document.getElementById("cv-name").value;
    const email = document.getElementById("cv-email").value;
    const skills = document.getElementById("cv-skills").value;
    const education = document.getElementById("cv-education").value;

    const content = `
${name}
Email: ${email}

Skills:
${skills}

Education:
${education}
`;

    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "My_CV.txt";
    link.click();
}

/* Scroll Reveal */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

/* Dynamic Year */
document.getElementById("year").innerText = new Date().getFullYear();