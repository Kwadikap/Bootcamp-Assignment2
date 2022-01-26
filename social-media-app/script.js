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


// STORE ALL POSTS
// const allPosts = [];

// AUTOMATICALLY DISPLAY ALL PREVIOUS POSTS


// POST IDs
let postID = 1;



//Function that adds status post 
const addPost = () => {
    
    //Store post typed by user
    storedStatus = document.getElementById('status').value; 

    //Clone the Status-post-template
    const postStatus = statusPostTemplate.cloneNode();

    //Store inner html of template inside clone
    postStatus.innerHTML = statusPostTemplate.innerHTML;
   
    //CHANGE CLONE ID & INCREMENT postID variable
    postStatus.id = postID++;
    
     //Target postStatus element that will be updated 
    const post = postStatus.children[2];

    //update PostStatus element with status post that was typed by user
    post.textContent = storedStatus;


    //MAKE POST VISIBLE
    postStatus.style.display = "block";


    //Display the post    
    posts.prepend(postStatus);

    //Store this post in array that will hold all previous posts from user
    // allPosts.push(postStatus);
}


const postButton = document.getElementById('post-button');
const modalOutter = document.getElementById('post-modal-outter');
const closePost = document.getElementById('close-post');
const uploadStatus = document.getElementById('upload-status');
const statusModalOutter = document.getElementById('status-modal-outter');
const uploadStatusButton = document.getElementById('upload-status-button');
const uploadStatusGoBackButton = document.getElementById('upload-status-go-back-btn');
const posts = document.getElementById('posts');
//store generic status post template body
const statusPostTemplate = document.getElementById('status-post-template');
statusPostTemplate.style.marginTop ='1rem';


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
   
    //Hide outter modal window after clicking post new status so new post can show 
    hideDisplay(statusModalOutter);

    //Hide outter modal window after clicking post new status so new post can show 
    hideDisplay(modalOutter);
    
    //Call function that will perform post 
    addPost();

    //Set post input type area back to empty so previous post doesnt stay in type area next time a user wants to post
    document.getElementById('status').value = "";
})

//Go back
uploadStatusGoBackButton.addEventListener('click', function(){
    hideDisplay(statusModalOutter);
});


