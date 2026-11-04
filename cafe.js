
// ======================================
// 1. INTERACTIVE FORM HANDLING
// ======================================

const form = document.getElementById("feedback-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("success-message");

    if (username !== "" && email !== "") {

        message.textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";

    } else {

        message.textContent = "Please fill out your name and email.";

    }

});


// ======================================
// 2. TABLE ROW HIGHLIGHTING
// ======================================

const rows = document.querySelectorAll("#menu-table tr");

rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {

        row.style.backgroundColor = "lightyellow";

    });

    row.addEventListener("mouseout", function() {

        row.style.backgroundColor = "";

    });

});


// ======================================
// 3. LIGHT / DARK THEME SWITCHER
// ======================================

const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});


// ======================================
// 4. ORDER TOTAL CALCULATOR
// ======================================

const checkboxes = document.querySelectorAll(".menu-item");

const total = document.getElementById("total");

checkboxes.forEach(function(checkbox) {

    checkbox.addEventListener("change", function() {

        let sum = 0;

        checkboxes.forEach(function(item) {

            if (item.checked) {

                sum += parseInt(item.value);

            }

        });

        total.textContent = "$" + sum;

    });

});


// ======================================
// 5. AGE VERIFICATION / DISCOUNT
// ======================================

const birthYear = document.getElementById("birth-year");

const discountMessage = document.getElementById("discount-message");

birthYear.addEventListener("change", function() {

    let year = parseInt(birthYear.value);

    let age = 2026 - year;

    if (
        birthYear.value.trim() !== "" &&
        !isNaN(year) &&
        year >= 1900 &&
        year <= 2026
    ) {

        if (age >= 60) {

            discountMessage.textContent =
                "Congratulations! You qualify for a Senior Discount.";

        } else if (age >= 18 && age <= 25) {

            discountMessage.textContent =
                "Congratulations! You qualify for a Student Discount.";

        } else {

            discountMessage.textContent =
                "Sorry! You are not eligible for a special discount.";

        }

    } else {

        discountMessage.textContent =
            "Please enter a valid birth year.";

    }

});


// ======================================
// 6. READ MORE / READ LESS
// ======================================

const readMoreButton = document.getElementById("read-more-btn");

const extraText = document.getElementById("extra-text");

readMoreButton.addEventListener("click", function() {

    if (extraText.hidden) {

        extraText.hidden = false;

        readMoreButton.textContent = "Read Less";

    } else {

        extraText.hidden = true;

        readMoreButton.textContent = "Read More";

    }

});


// ======================================
// 7. LIVE CATEGORY FILTER
// ======================================

const filterButtons = document.querySelectorAll(".filter-btn");

const menuRows = document.querySelectorAll("#menu-table tr[data-category]");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category = button.getAttribute("data-filter");

        menuRows.forEach(function(row) {

            if (
                category === "all" ||
                row.getAttribute("data-category") === category
            ) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

    });

});


// ======================================
// 8. DYNAMIC OPENING STATUS
// ======================================

const openingStatus = document.getElementById("opening-status");

const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 22) {

    openingStatus.textContent = "We are Open!";

    openingStatus.style.color = "green";

} else {

    openingStatus.textContent = "Closed - Open at 8 AM";

    openingStatus.style.color = "red";

}


// ======================================
// 9. LIVE CHARACTER COUNTER
// ======================================

const notes = document.getElementById("special-notes");

const charCount = document.getElementById("char-count");

notes.addEventListener("input", function() {

    let remaining = 100 - notes.value.length;

    charCount.textContent =
        remaining + " characters remaining";

});
