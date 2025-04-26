// Get references to the elements
const userInfoDiv = document.getElementById('user-info');
const shareEffectDiv = document.getElementById('after-share-effect');
const userInfoShareIcon = document.getElementById('icon-share');
const userInfoShareIconDesktop = document.getElementById('share-icon-desktop');
const afterShareEffectShareIcon = document.getElementById('share-img');

// Function to toggle the visibility on mobiles
function toggleShareMobile() {
    const userInfoDisplay = window.getComputedStyle(userInfoDiv).display;

    userInfoDiv.style.display = userInfoDisplay === 'none' ? 'flex' : 'none';
    shareEffectDiv.style.display = userInfoDisplay === 'none' ? 'none' : 'flex';
}

// Add event listeners to both share icons
userInfoShareIcon.addEventListener('click', toggleShareMobile);
afterShareEffectShareIcon.addEventListener('click', toggleShareMobile);

// Function to toggle the visibility on desktop
function toggleShareDesktop() {
    if (shareEffectDiv.style.display === 'none' || shareEffectDiv.style.display === '') {
        // If it's hidden (or hasn't been set yet), show it
        shareEffectDiv.style.display = 'flex';
    } else {
        // If it's visible, hide it
        shareEffectDiv.style.display = 'none';
    }
}

// Add event listeners to share icons
userInfoShareIconDesktop.addEventListener('click', toggleShareDesktop);