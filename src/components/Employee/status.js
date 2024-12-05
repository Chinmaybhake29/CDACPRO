const form = document.getElementById("attendanceForm");
const attendanceBody = document.getElementById("attendanceBody");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const projectID = document.getElementById("projectID").value;
  const projecttitle = document.getElementById("projecttitle").value;
  const department = document.getElementById("department").value;
  const date = document.getElementById("date").value;
  const status = document.getElementById("status").value;
  const DelayType = document.getElementById("DelayType").value || "-";

  // Create a new row
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${projectID}</td>
        <td>${projecttitle}</td>
        <td>${department}</td>
        <td>${date}</td>
        <td>${status}</td>
        <td>${DelayType}</td>
      `;

  // Append the new row to the table
  attendanceBody.appendChild(newRow);

  // Reset the form
  form.reset();
});
