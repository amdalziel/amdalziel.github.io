// Contact Page JS 


// All the code below handles submitting the contact form to local storage: 


// Get reference to the contact form 

document.getElementById('contact-form').addEventListener('submit', handleSubmit);


// Function to handle the submit 

function handleSubmit(e) {

    e.preventDefault();

    // Get reference to each input & textarea 

    let nameInput = document.getElementById("input-name").value; 
    let emailInput = document.getElementById("input-email").value; 
    let commentsInput = document.getElementById("input-info").value;


    // Initialize an array for comments or parse the JSON stored already under the key "Contact-Form"

    const commentData = JSON.parse(localStorage.getItem('contact-form')) || [];


    // There are three inputs for the user - these are all entered under the object "commentEntry"

    const commentEntry = {
        name: nameInput,
        email: emailInput,
        comment: commentsInput
    }; 

    // Create a regular expression that will test for -----@-----.--- 

    const emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   

    // Check that no fields are left blank - "fail message" appears 

    if (nameInput==="" || emailInput === "" || commentsInput === "") {

        appendFailMessage("Please fill in all three fields."); 

        // Check that the emailInput follows standard email formats with a regular expression 
        // If fails - "fail message" appears 

    } else if (!emailRe.test(emailInput)) {

        appendFailMessage("Email not accepted - please re-enter."); 

    } else {
         // Push the comment to the end of the array 
        commentData.push(commentEntry); 

        // Store "setItem" entries into the browser 

    localStorage.setItem('contact-form', JSON.stringify(commentData)); 

    // Display success message 

    appendSuccessMessage("Thank you for your message."); 
    
    }; 



    // Functions used in main code: 

    // Clear Fields - empty fields after submit (used in appendSuccessMessage)

    function clearFields() {
        nameInput = document.getElementById("input-name").value = "";  
        emailInput = document.getElementById("input-email").value = "";
        commentsInput = document.getElementById("input-info").value = ""; 
    }; 

    // Fail message when conditions not met 

    function appendFailMessage(messageToUser) {
        const failMessage = document.createElement('h5');
        failMessage.style.backgroundColor = "#A23D3D";
        failMessage.style.color = "#ffffff";
        failMessage.style.padding = "5px";
        failMessage.style.borderRadius = "5px";
        failMessage.innerText = messageToUser;

        const h1Section = document.getElementById("contact-h1");
        h1Section.appendChild(failMessage);

        setTimeout(() => {
            failMessage.remove();
        }, 3000);
        return;
    }; 

    // Success message when submit entered correctly 

    function appendSuccessMessage(messageToUser) {
        const successMessage = document.createElement('h5'); 
    successMessage.style.backgroundColor = "#457841";
    successMessage.style.color = "#ffffff";
    successMessage.style.padding = "5px";
    successMessage.style.borderRadius = "5px";
    successMessage.innerText = messageToUser; 

    const h1Section = document.getElementById("contact-h1"); 
    h1Section.appendChild(successMessage); 

    clearFields(); 

    setTimeout(() =>  {
        successMessage.remove();
    }, 3000);

    }; 

   

    
}; 