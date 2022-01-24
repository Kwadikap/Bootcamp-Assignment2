"use strict"
// Code for messages tab switching functionality

//store primary message tab content
const primaryMessageContent = document.getElementById('messages').innerHTML;
const generalMessageContent = document.getElementById('general-messages').innerHTML;


//display-primary messages-tab
const switchToPrimaryMessagesTab = () => {
    messages.innerHTML = primaryMessageContent;
}

//display-general messages-tab
const switchToGeneralMessagesTab = () => { 
    messages.innerHTML = generalMessageContent;
}

//display-requests messages-tab
const switchToRequestsMessagesTab = () => {
    messages.innerHTML = "There are no Requests";
}





//Types of tabs
const primaryTab = "primary";
const generalTab = "general";
const requestsTab = "requests";

//change message tabs functions

//function to highlight tab that was clicked
const messageTabClicked = (tabClicked) => {
  //check param first

  //if parameter is primary tab then run this
  if (tabClicked === primaryTab) {
    //set everything to unhighlighted

    highlightGeneral.style.backgroundColor = "transparent";

    highlightRequests.style.backgroundColor = "transparent";

    //highlight tab that was clicked
    highlightPrimary.style.backgroundColor = "var(--primaryColor)";

    //switch tabs
    switchToPrimaryMessagesTab();
  }

  //if parameter is general tab then run this
  if (tabClicked === generalTab) {
    //set everything to unhighlighted
    highlightPrimary.style.backgroundColor = "transparent";

    highlightRequests.style.backgroundColor = "transparent";

    //highlight tab that was clicked
    highlightGeneral.style.backgroundColor = "var(--primaryColor)";

    //switch tabs
    switchToGeneralMessagesTab();
  }

  //if parameter is requests tab then run this
  if (tabClicked === requestsTab) {
    //set everything to unhighlighted
    highlightPrimary.style.backgroundColor = "transparent";

    highlightGeneral.style.backgroundColor = "transparent";

    //highlight tab that was clicked
    highlightRequests.style.backgroundColor = "var(--primaryColor)";

    //switch tabs
    switchToRequestsMessagesTab();
  }
};

//get tab elements
const messagePrimaryTab = document.getElementById("message-primary");

const messageGeneralTab = document.getElementById("message-general");

const messageRequestsTab = document.getElementById("message-requests");

//get highlighter elements
const highlightPrimary = document.getElementById("highlight-primary");

const highlightGeneral = document.getElementById("highlight-general");

const highlightRequests = document.getElementById("highlight-requests");

//add event listeners for message tab switching functionality
messagePrimaryTab.addEventListener("click", function () {
  const tabClicked = primaryTab;
  messageTabClicked(tabClicked);
});

messageGeneralTab.addEventListener("click", function () {
    const tabClicked = generalTab;
    messageTabClicked(tabClicked);
  });

  messageRequestsTab.addEventListener("click", function () {
    const tabClicked = requestsTab;
    messageTabClicked(tabClicked);
  });


//Function that Hides screen 
const hideDisplay = (display) => {
    display.style.display = 'none';
}

//Function that shows screen
const showDisplay = (display) => {
    display.style.display = 'flex';
}

//Function that adds status post 
const addPost = () => {
    //store generic status post template body
    const statusPostTemplate = document.getElementById('status-post-template');
    statusPostTemplate.style.margin ='1rem';
    //Store post typed by user
    storedStatus = document.getElementById('status').value;

    //add user post to template body
    const post = document.getElementById('status-info');

    post.value = storedStatus;

    //Get element you will insert post before
    const firstPost = document.getElementById('current-post');

    //Add post to html by inserting before the current first post
    firstPost.insertAdjacentElement('beforebegin', statusPostTemplate);
}


const postButton = document.getElementById('post-button');
const modalOutter = document.getElementById('post-modal-outter');
const closePost = document.getElementById('close-post');
const uploadStatus = document.getElementById('upload-status');
const statusModalOutter = document.getElementById('status-modal-outter');
const uploadStatusButton = document.getElementById('upload-status-button');
const uploadStatusGoBackButton = document.getElementById('upload-status-go-back-btn');


//Stores status input
let storedStatus;

//create post
postButton.addEventListener('click', function() {
    showDisplay(modalOutter);
});

//clost post
closePost.addEventListener('click', function() {
    hideDisplay(modalOutter);
});

//upload status
uploadStatus.addEventListener('click', function() {
    showDisplay(statusModalOutter);
});

//Post status
uploadStatusButton.addEventListener('click', function() {

    hideDisplay(statusModalOutter);

    hideDisplay(modalOutter);

    addPost();
    
})

//Go back
uploadStatusGoBackButton.addEventListener('click', function(){
    hideDisplay(statusModalOutter);
});

