

let studentName = "Lucy Mayienga";
let registrationNumber = "BCS/077/2025";
let academicProgramme = "Computer Science";


console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Academic Programme: " + academicProgramme);


function calculateGrade(score) {

    if (score >= 70 && score <= 100) {
        return "A";
    }
    else if (score >= 60) {
        return "B";
    }
    else if (score >= 50) {
        return "C";
    }
    else if (score >= 40) {
        return "D";
    }
    else {
        return "E";
    }
}


let grade = calculateGrade(75);

alert("The student's grade is: " + grade);


const studentForm = document.getElementById("studentForm");


studentForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name = document.getElementById("fullname").value.trim();

    const regNo = document.getElementById("regno").value.trim();


    const email = document.getElementById("email").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (regNo === "") {
        alert("Please enter your registration number.");
        return;
    }


    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    const result = document.getElementById("result");

    result.innerHTML = `
        <h3>Student Registration Details</h3>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Registration Number:</strong> ${regNo}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <h3>Registration Successful!</h3>
    `;


    alert("Student registration submitted successfully!");

});

studentForm.addEventListener("reset", function() {
    document.getElementById("result").innerHTML = "";
});
if (name === "") {
    alert("Please enter your full name.");
    return;
}

if (regNo === "") {
    alert("Please enter your registration number.");
    return;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}