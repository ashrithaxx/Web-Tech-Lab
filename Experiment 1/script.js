// Password Show/Hide
function togglePassword(id, icon){
const input = document.getElementById(id); const show = input.type === "password"; input.type = show ? "text" : "password"; icon.classList.toggle("fa-eye", !show);

icon.classList.toggle("fa-eye-slash", show);
}

// Step Tracker function goToStep(step){
document.getElementById("registerForm").classList.toggle("hidden", step !== 1); document.getElementById("jobForm").classList.toggle("hidden", step !== 2); document.getElementById("successScreen").classList.add("hidden");

document.getElementById("tracker-1").classList.toggle("active", step >= 1); document.getElementById("tracker-2").classList.toggle("active", step >= 2); document.getElementById("trackerLine").style.setProperty("--fill", step >= 2 ? "100%" : "0%");
}

function showSuccess(){ document.getElementById("registerForm").classList.add("hidden"); document.getElementById("jobForm").classList.add("hidden"); document.getElementById("successScreen").classList.remove("hidden");
}

document.getElementById("backBtn").addEventListener("click", () => goToStep(1));

// Helpers
function setError(fieldId, errorId, message){ const field = document.getElementById(fieldId);
const errorEl = document.getElementById(errorId); errorEl.textContent = message; field.classList.toggle("invalid", !!message); field.classList.toggle("valid", !message);
return !message;
}

const nameRegex = /^[A-Za-z ]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; const phoneRegex = /^[0-9]{10}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

// Registration function validateName(){
const v = document.getElementById("name").value.trim();
if (v === "") return setError("name", "nameError", "Full name is required");
if (!nameRegex.test(v)) return setError("name", "nameError", "Only alphabets and spaces allowed"); return setError("name", "nameError", "");
}

function validateEmail(){
const v = document.getElementById("email").value.trim();
if (v === "") return setError("email", "emailError", "Email is required");
if (!emailRegex.test(v)) return setError("email", "emailError", "Enter a valid email address"); return setError("email", "emailError", "");
}

function validatePhone(){
const v = document.getElementById("phone").value.trim();
if (v === "") return setError("phone", "phoneError", "Phone number is required");
if (!phoneRegex.test(v)) return setError("phone", "phoneError", "Phone must contain exactly 10 digits");
return setError("phone", "phoneError", "");
}

function passwordStrengthScore(pwd){ let score = 0;
if (pwd.length >= 8) score++; if (/[a-z]/.test(pwd)) score++;
 
if (/[A-Z]/.test(pwd)) score++; if (/\d/.test(pwd)) score++;
if (/[@$!%*?&]/.test(pwd)) score++; return score; // 0-5
}

function updateStrengthMeter(){
const pwd = document.getElementById("password").value; const fill = document.getElementById("strengthFill"); const label = document.getElementById("strengthLabel"); const score = passwordStrengthScore(pwd);
const pct = (score / 5) * 100; fill.style.width = pct + "%";

if (pwd === "") { fill.style.background = "#DCE1EA";
label.textContent = "Min 8 characters, with upper, lower, number & symbol";
} else if (score <= 2) { fill.style.background = "#E63946"; label.textContent = "Weak password";
} else if (score <= 4) { fill.style.background = "#E9A23B"; label.textContent = "Almost there";
} else {
fill.style.background = "#2A9D8F"; label.textContent = "Strong password";
}
}

function validatePassword(){
const v = document.getElementById("password").value;
if (v === "") return setError("password", "passwordError", "Password is required");
if (!passwordRegex.test(v)) return setError("password", "passwordError", "Must include upper, lower, number & special character");
return setError("password", "passwordError", "");
}

function validateConfirmPassword(){
const pwd = document.getElementById("password").value;
const confirm = document.getElementById("confirmPassword").value;
if (confirm === "") return setError("confirmPassword", "confirmError", "Please confirm your password"); if (pwd !== confirm) return setError("confirmPassword", "confirmError", "Passwords do not match"); return setError("confirmPassword", "confirmError", "");
}

// live feedback document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail); document.getElementById("phone").addEventListener("blur", validatePhone); document.getElementById("password").addEventListener("input", () => { updateStrengthMeter(); validatePassword(); });
document.getElementById("confirmPassword").addEventListener("input", validateConfirmPassword);

document.getElementById("registration").addEventListener("submit", function(e){ e.preventDefault();
const checks = [ validateName(), validateEmail(), validatePhone(), validatePassword(), validateConfirmPassword()
];
if (checks.every(Boolean)) goToStep(2);
});
 
// ---------- Job Application: field-level validators ----------function validatePosition(){
const v = document.getElementById("position").value;
return setError("position", "positionError", v === "" ? "Please select a position" : "");
}

function validateLevel(){
const v = document.getElementById("level").value;
return setError("level", "levelError", v === "" ? "Please select a job level" : "");
}

function validateExperience(){
const v = document.getElementById("experience").value;
if (v === "") return setError("experience", "experienceError", "Experience is required"); const num = Number(v);
if (isNaN(num) || num < 0 || num > 30) return setError("experience", "experienceError", "Enter a value between 0 and 30");
return setError("experience", "experienceError", "");
}

function validateSkills(){
const v = document.getElementById("skills").value.trim();
return setError("skills", "skillsError", v === "" ? "Please list at least one skill" : "");
}

function validateProject(){
const v = document.getElementById("project").value.trim(); document.getElementById("charCount").textContent = v.length;
return setError("project", "projectError", v.length < 50 ? "Add a bit more detail (50 characters minimum)" : "");
}

function validateResume(){
const input = document.getElementById("resume"); const drop = document.getElementById("fileDrop"); const label = document.getElementById("fileLabel");

if (!input.files || input.files.length === 0){ drop.classList.remove("filled"); label.textContent = "Click to upload PDF or DOCX";
return setError("fileDrop", "resumeError", "Please upload your resume");
}
const fileName = input.files[0].name;
const extension = fileName.split(".").pop().toLowerCase(); if (extension !== "pdf" && extension !== "docx"){
drop.classList.remove("filled"); label.textContent = "Click to upload PDF or DOCX";
return setError("fileDrop", "resumeError", "Only PDF or DOCX files are allowed");
}
drop.classList.add("filled"); label.textContent = fileName;
return setError("fileDrop", "resumeError", "");
}

document.getElementById("position").addEventListener("change", validatePosition); document.getElementById("level").addEventListener("change", validateLevel); document.getElementById("experience").addEventListener("blur", validateExperience); document.getElementById("skills").addEventListener("blur", validateSkills); document.getElementById("project").addEventListener("input", validateProject); document.getElementById("resume").addEventListener("change", validateResume);

document.getElementById("application").addEventListener("submit", function(e){ e.preventDefault();
 
 

