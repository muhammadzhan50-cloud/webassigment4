# Assignment #4 Report: Introduction to JavaScript
**Project Name:** Cafe Mania  
**Team Name:** Team Sлmsung  
**Team Members:** Aidos, Arnur, Mukhammajon  
**Group:** SE-2507  

---

## 1. Objective
The objective of Assignment #4 is to integrate interactive JavaScript features into the multi-page Cafe Mania web project. This includes client-side form validation, accessible accordions, modal popup management, dynamic DOM manipulation (background color toggling), and real-time clock rendering using the JavaScript Date object.

## 2. Tools and Technologies Used
* **Languages:** HTML5, CSS3, JavaScript (ES6+)
* **Framework:** Bootstrap 5
* **Version Control:** Git & GitHub

---

## 3. Implementation of Tasks

### Task 1: Form Validation
* **Implementation Steps:** Built a registration/checkout form with name, email, password, and confirmation fields. Implemented a submit event listener in `script.js` that checks for empty strings, regex email validity, password length ($\ge 6$), and matching confirmation values.
* **Explanation:** Custom error messages are injected dynamically into element spans (`#emailError`, etc.) when validation fails, preventing form submission.
* **Screenshot Placeholder:** *[Capture screenshot of the checkout form displaying red error warnings under invalid inputs.]*

### Task 2: Accordion for FAQs
* **Implementation Steps:** Created FAQ markup with `.accordion-header` and `.accordion-content` classes. Added ARIA attributes (`aria-expanded`) for accessibility.
* **Explanation:** Clicking headers toggles state, adjusting max-height smoothly through CSS transitions.
* **Screenshot Placeholder:** *[Capture screenshot of an expanded FAQ answer panel on the menu page.]*

### Task 3: Popup Subscription Form
* **Implementation Steps:** Designed a centered modal overlay hidden by default (`display: none`). Added event triggers for opening via button, closing via cross button, clicking the backdrop, or pressing the `Esc` key.
* **Explanation:** Ensures seamless user interaction across desktop and mobile screens.
* **Screenshot Placeholder:** *[Capture screenshot of the active subscription modal popup overlay centered on the screen.]*

### Task 4: Background Color Change
* **Implementation Steps:** Added a dedicated toggle button (`#themeToggle`) to the main navigation header linked to a JavaScript theme handler that toggles a `.dark-theme` CSS class on `document.body` and stores preference in `localStorage`.
* **Explanation:** Each click seamlessly switches the site background color between light mode and dark mode, persisting across page navigations.
* **Screenshot Placeholder:** *[Capture screenshot of the home page showing a dark background style after clicking the toggle button.]*

### Task 5: Display Current Date and Time
* **Implementation Steps:** Placed a span element with ID `#live-clock` in the navigation header next to the brand logo.
* **Explanation:** Utilizes `setInterval` to refresh the localized date and time string every 1,000 milliseconds.
* **Screenshot Placeholder:** *[Capture screenshot of the live clock rendering the current formatted timestamp.]*

---

## 4. Testing Results
All interactive components were tested across Chrome, Firefox, and Safari. Form validation correctly catches edge cases (empty inputs, missing `@`, mismatched passwords). Timers and modals execute without console errors.

## 5. Deployment
* **Deployment Platform:** Netlify / GitHub Pages
* **Live Website URL:** `https://your-cafe-mania-deployment-url.netlify.app` *(Placeholder)*

## 6. Final Reflection
Building Assignment #4 deepened our understanding of the DOM API, event handling, scoping, and asynchronous updates in vanilla JavaScript. Integrating these features into our collaborative Cafe Mania project enhanced overall usability and responsiveness.