// const form = document.querySelector("#ticketform");
// const output = document.querySelector("#output");

// const typeSelect = document.querySelector("#type");
// const studentField = document.querySelector("#code");
// const accessField = document.querySelector("#access");

// function updateFields() {
//   const value = typeSelect.value;

//   studentField.hidden = value !== "one";
//   accessField.hidden = value !== "two";
// }

// typeSelect.addEventListener("change", updateFields);
// updateFields();

// function isPastDate(value) {
//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const chosen = new Date(value);
//   return chosen < today;
// }

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   output.textContent = "";

//   const firstName = form.firstName.value.trim();
//   const lastName = form.lastName.value.trim();
//   const email = form.email.value.trim();
//   const type = form.type.value;
//   const eventDate = form.date.value;
//   const code = form.code.value.trim();
//   const student = form.student.value.trim();

//   if (isPastDate(eventDate)) {
//     output.textContent = "Please choose a future date.";
//     return;
//   }

//   if (type === "one" && !student) {
//     output.textContent = "Please enter your Student ID.";
//     return;
//   }
  
//   if (type === "two" && !code) {
//   output.textContent = "Please enter an Access Code.";
//   return;
// }

// output.innerHTML = `
//   <h2>Ticket Created</h2>
//   <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//   <p><strong>Email:</strong> ${email}</p>
//   <p><strong>Type:</strong> ${type === "one" ? "Student" : "Guest"}</p>
//   <p><strong>Event Date:</strong> ${eventDate}</p>
//   ${
//     type === "one"
//       ? `<p><strong>Student ID:</strong> ${student}</p>`
//       : `<p><strong>Access Code:</strong> ${code}</p>`
//   }
// `;

//   form.reset();
//   updateFields();
// });

const form = document.querySelector("#ticketform");
const output = document.querySelector("#output");
const typeSelect = document.querySelector("#type");
const studentField = document.querySelector("#studentField");
const accessField = document.querySelector("#access");

function updateFields() {
  const value = typeSelect.value;
  studentField.style.display = value === "one" ? "block" : "none";
  accessField.style.display = value === "two" ? "block" : "none";
}

updateFields();
typeSelect.addEventListener("change", updateFields);

function isPastDate(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.type.value;
  const eventDate = form.date.value;
  const code = form.code.value.trim();
  const student = form.student.value.trim();

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a future date.";
    return;
  }

  if (type === "one" && !student) {
    output.textContent = "Please enter your Student ID.";
    return;
  }

  if (type === "one" && student.length !== 9) {
    output.textContent = "Student |# must be 9 digits";
    return;
  }

  if (type === "two" && !code) {
    output.textContent = "Please enter an Access Code.";
    return;
  }

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Type:</strong> ${type === "one" ? "Student" : "Guest"}</p>
    <p><strong>Event Date:</strong> ${eventDate}</p>
    ${
      type === "one"
        ? `<p><strong>Student ID:</strong> ${student}</p>`
        : `<p><strong>Access Code:</strong> ${code}</p>`
    }
  `;

  form.reset();
  updateFields();
});