

var litespeed_docref = sessionStorage.getItem("litespeed_docref");
if (litespeed_docref) {
    Object.defineProperty(document, "referrer", {
        get: function() {
            return litespeed_docref;
        }
    });
    sessionStorage.removeItem("litespeed_docref");
}


// LightGallery Initialization
const lightGalleryElement = document.getElementById('lightgallery');
if (lightGalleryElement) {
    lightGallery(lightGalleryElement, {
        plugins: [lgZoom],
        speed: 500,
        zoom: true,
        controls: true, // Show zoom controls (+ and - buttons)
        download: false, // Disable download option if needed
        actualSize: true, // Show actual size button
        subHtmlSelectorRelative: true // Make sure the title (sub-html) appears
    });
}

// Litespeed Referrer Handling
var litespeed_docref = sessionStorage.getItem("litespeed_docref");
if (litespeed_docref) {
    Object.defineProperty(document, "referrer", { get: function() { return litespeed_docref; } });
    sessionStorage.removeItem("litespeed_docref");
}

// Additional Scripts (if needed)
(function() {
    // Add your additional JavaScript functionality here
    // For example, tracking events or other interactions
})();















lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom],
    speed: 500,
    zoom: true,
    controls: true, // Show zoom controls (+ and - buttons)
    download: false, // Disable download option if needed
    actualSize: true, // Show actual size button
    subHtmlSelectorRelative: true // Make sure the title (sub-html) appears
});










document.addEventListener('DOMContentLoaded', function() {
    var banner = document.getElementById('verified-banner');
    banner.style.display = 'block'; // Show the banner
    
    // Hide the banner after the animation (1s) plus an additional 4s of display time
    setTimeout(function() {
        banner.style.display = 'none';
    }, 5000); // 1s animation + 4s display time
});





const feedbackData = [
    { text: "আলহামদুলিল্লাহ খুবই ফার্স্ট, ক্যাশ অন ডেলিভারিতে প্রোডাক্ট টা হাতে পেয়েছি।", name: "- Samir Al Hasan" },
    { text: "গ্রেট সার্ভিস and quick delivery. Highly recommend!", name: "- Meherun Nesa" },
    { text: "প্রোডাক্ট যেমন দেখেছিলাম সেরকমই পেয়েছি - I will order again Inshallah.⭐", name: "- Humayra Rahman Akhi" },
    { text: "Very happy with my purchase, ধন্যবাদ আপনাদের সার্ভিসের জন্য।", name: "- Md. Hasan" },
    { text: "ডেলিভারি টাইম অনেক ফাস্ট, প্রোডাক্টও খুব ভালো। Thanks!", name: "- Saila Islam" },
    { text: "প্রোডাক্ট কোয়ালিটি এবং সার্ভিস দুটোই অসাধারণ।👍", name: "- Farha Tanija" },
    { text: "ইনশাআল্লাহ আবার অর্ডার করবো, খুবই ভালো লেগেছে।", name: "- Jannatul Ferdous Riya" },
    { text: "প্রথমবার অর্ডার করলাম, অনেক ভালো লেগেছে।", name: "- Rafiq Ahmed" },
    { text: "সার্ভিস খুব ভালো, ইনশাআল্লাহ আবার অর্ডার করবো।", name: "- Sharmin Akter" },
    { text: "প্রোডাক্টের মান অনেক ভালো, ধন্যবাদ।", name: "- Abdul Karim" },
    { text: "খুব দ্রুত ডেলিভারি, খুবই সন্তুষ্ট।", name: "- Nazma Begum" },
    { text: "দাম অনুযায়ী প্রোডাক্ট একদম পারফেক্ট।", name: "- Imran Hossain" },
    { text: "মোটেও হতাশ হইনি, ইনশাআল্লাহ আবার অর্ডার করবো।", name: "- Rubel Miah" },
    { text: "সাপোর্ট টিম অনেক হেল্পফুল ছিল।", name: "- Fahima Sultana" },
    { text: "ডেলিভারি খুব ফাস্ট, প্রোডাক্টও ভালো ছিল।", name: "- Mamunur Rashid" },
    { text: "মোটেও মনে হচ্ছে না যে অনলাইন থেকে কিনেছি, কোয়ালিটি একদম সেরা!", name: "- Salma Islam" },
    { text: "আপনাদের সার্ভিসে আমি মুগ্ধ।", name: "- Mahmud Hasan" },
    { text: "প্রোডাক্ট খুব ভালো, বন্ধুদেরকেও রেকমেন্ড করবো।", name: "- Taslima Akhter" },
    { text: "ডেলিভারি টাইম এবং প্যাকেজিং দুটোই ভালো ছিল।", name: "- Kazi Shakil" },
    { text: "খুব ভালো সার্ভিস, ইনশাআল্লাহ আবার নেবো।", name: "- Tania Rahman" },
    { text: "সাবাইকে রেকমেন্ড করছি, কোয়ালিটি খুব ভালো।", name: "- Anisur Rahman" },
    { text: "আপনাদের সার্ভিস নিয়ে আমি খুবই সন্তুষ্ট।", name: "- Nilufar Yasmin" },
    { text: "দ্রুত ডেলিভারি এবং ভালো প্যাকেজিং, ধন্যবাদ।", name: "- Shamim Hossain" },
    { text: "অনলাইন অর্ডার করেও এত ভালো সার্ভিস পাবো ভাবিনি।", name: "- Rina Akhter" }
];

const container = document.getElementById('customerFeedback');
let currentIndex = 0;

function showFeedback() {
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');
    feedbackItem.innerHTML = `<p style="margin: 0; font-size: 16px;">${feedbackData[currentIndex].text}</p><p style="margin: 0; font-size: 14px; color: #6c757d;">${feedbackData[currentIndex].name}</p>`;
    
    container.appendChild(feedbackItem);

    setTimeout(() => {
        feedbackItem.classList.add('show');
    }, 100); // delay for showing

    setTimeout(() => {
        feedbackItem.classList.remove('show');
        feedbackItem.classList.add('move-right');
    }, 2500); // hold for 2.5 seconds before moving right

    setTimeout(() => {
        feedbackItem.remove();
    }, 3500); // remove after animation

    currentIndex = (currentIndex + 1) % feedbackData.length;
}

setInterval(showFeedback, 3500); // Show feedback every 3.5 seconds




// Initialize LightGallery with Zoom and Title
lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom],
    speed: 500,
    zoom: true,
    controls: true, // Show zoom controls (+ and - buttons)
    download: false, // Disable download option if needed
    actualSize: true, // Show actual size button
    subHtmlSelectorRelative: true // Make sure the title (sub-html) appears
});
