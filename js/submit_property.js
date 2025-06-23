const toggle = document.getElementById("burger");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");

toggle.addEventListener("click", () => {
  navLeft.classList.toggle("active");
  navRight.classList.toggle("active");
});

// Information Section

// File upload functionality
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
const fileUpload = document.querySelector(".file-upload");
let selectedFiles = [];

fileInput.addEventListener("change", handleFiles);

// Drag and drop functionality
fileUpload.addEventListener("dragover", (e) => {
  e.preventDefault();
  fileUpload.classList.add("dragover");
});

fileUpload.addEventListener("dragleave", () => {
  fileUpload.classList.remove("dragover");
});

fileUpload.addEventListener("drop", (e) => {
  e.preventDefault();
  fileUpload.classList.remove("dragover");
  const files = Array.from(e.dataTransfer.files);
  handleFileSelection(files);
});

function handleFiles(e) {
  const files = Array.from(e.target.files);
  handleFileSelection(files);
}

function handleFileSelection(files) {
  files.forEach((file) => {
    if (file.type.startsWith("image/")) {
      selectedFiles.push(file);
      displayFile(file);
    }
  });
}

function displayFile(file) {
  const fileItem = document.createElement("div");
  fileItem.className = "file-item";
  fileItem.innerHTML = `
                <span>${file.name} (${(file.size / 1024 / 1024).toFixed(
    2
  )} MB)</span>
                <button type="button" class="file-remove" onclick="removeFile('${
                  file.name
                }')">Remove</button>
            `;
  fileList.appendChild(fileItem);
}

function removeFile(fileName) {
  selectedFiles = selectedFiles.filter((file) => file.name !== fileName);
  const fileItems = fileList.querySelectorAll(".file-item");
  fileItems.forEach((item) => {
    if (item.querySelector("span").textContent.includes(fileName)) {
      item.remove();
    }
  });
}







































// Form submission
document
  .getElementById("propertyForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Add selected files
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    // Get selected amenities
    const amenities = [];
    document
      .querySelectorAll('input[name="amenities"]:checked')
      .forEach((checkbox) => {
        amenities.push(checkbox.value);
      });
    formData.set("amenities", JSON.stringify(amenities));

    // Show success message
    document.getElementById("successMessage").style.display = "block";

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Reset form
    setTimeout(() => {
      this.reset();
      selectedFiles = [];
      fileList.innerHTML = "";
      document.getElementById("successMessage").style.display = "none";
    }, 3000);
  });

// Dynamic city updates based on country selection
const countryCity = {
  us: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
  ca: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  uk: ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool"],
  au: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  de: ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt"],
};

document.getElementById("country").addEventListener("change", function () {
  const citySelect = document.getElementById("city");
  const selectedCountry = this.value;

  // Clear existing options
  citySelect.innerHTML = '<option value="">Select City</option>';

  if (selectedCountry && countryCity[selectedCountry]) {
    countryCity[selectedCountry].forEach((city) => {
      const option = document.createElement("option");
      option.value = city.toLowerCase().replace(" ", "-");
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
});
