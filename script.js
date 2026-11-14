
// HOME PAGE: Display the current date
const dateDisplay = document.getElementById("currentDate");

if (dateDisplay) {
    dateDisplay.textContent = new Date().toDateString();
}

// ABOUT PAGE: Display a welcome message
const aboutButton = document.getElementById("aboutButton");

if (aboutButton) {
    aboutButton.addEventListener("click", function () {
        alert("Welcome to my academic and personal profile!");
    });
}

// PROJECTS PAGE: Display project information
document.querySelectorAll(".project-button").forEach(function (button) {
    button.addEventListener("click", function () {
        const details = button.nextElementSibling;

        if (details) {
            details.hidden = !details.hidden;
            button.textContent = details.hidden ? "View Details" : "Hide Details";
        }
    });
});

// ACADEMIC PLANNER: Add a new task


        const taskText = document.createElement("span");
        taskText.textContent = task.name;

        if (task.completed) {
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        item.appendChild(checkbox);
        item.appendChild(taskText);
        item.appendChild(deleteButton);
        taskList.appendChild(item);
    });
}

if (taskForm && taskList && taskInput) {
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const task = taskInput.value.trim();

        if (task !== "") {
            tasks.push({
                name: task,
                completed: false
            });

            saveTasks();
            displayTasks();
            taskInput.value = "";
        }
    });

    displayTasks();
}

}

// CONTACT PAGE: Validate the contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you! Your message has been checked successfully.";

        contactForm.reset();
    });
}
