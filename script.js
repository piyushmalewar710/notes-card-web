let x=0;
// Main containers
const main = document.querySelector(".main");
const boxForm = document.querySelector(".box-form");
const box = document.querySelector(".box");
const card = document.querySelector(".card");

// Form inputs
const form = document.querySelector("form");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const dateInput = document.querySelector(".date-input");
const descriptionInput = document.querySelector(".description-input");

// Category container
const category = document.querySelector(".category");
const selectedCategory = form.querySelectorAll("input[name='category']");

// Radio buttons
const emergencyRadio = document.querySelector("#emergency");
const importantRadio = document.querySelector("#important");
const urgentRadio = document.querySelector("#urgent");
const noRushRadio = document.querySelector("#norush");

// Labels
const emergencyLabel = document.querySelector(".emergency");
const importantLabel = document.querySelector(".important");
const urgentLabel = document.querySelector(".urgent");
const noRushLabel = document.querySelector(".norush");

// Form buttons
const createBtn = document.querySelector(".create");
const closeBtn = document.querySelector(".close");

// Left side buttons
const addBtn = document.querySelector(".add");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");

// Cards
const cardOne = document.querySelector(".one");
const cardTwo = document.querySelector(".two");
const cardThree = document.querySelector(".three");

// Text inside first card
const titleText = document.querySelector(".title-text");
const nameText = document.querySelector(".name-text");
const dateText = document.querySelector(".date-text");
const descriptionText = document.querySelector(".discription-text");
const count = document.querySelector(".count");

// Right side buttons
const allBtn = document.querySelector(".all-button");
const emergencyBtn = document.querySelector(".emergency-button");
const importantBtn = document.querySelector(".important-button");
const urgentBtn = document.querySelector(".urgent-button");
const noRushBtn = document.querySelector(".norush-button");


addBtn.addEventListener("click",()=>{
    boxForm.style.display = "initial";
});

closeBtn.addEventListener("click",()=>{
    boxForm.style.display = "none";
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    //get all notes data in alldata array
    if (!localStorage.getItem("1")) {
        localStorage.setItem("1", "[]");
    }
    let alldata = JSON.parse(localStorage.getItem("1"));

    const title = titleInput.value.trim();
    const name = authorInput.value.trim();
    const description = descriptionInput.value.trim();

    // const selectedCategory = document.querySelector('input[name="category"]:checked');

    if (title === "") {
        alert("Please enter a title");
        return;
    }

    if (name === "") {
        alert("Please enter author name");
        return;
    }

    if (description === "") {
        alert("Please enter description");
        return;
    }

    // if (!selectedCategory) {
    //     alert("Please select a category");
    //     return;
    // }
    let selectedValue=null;
    selectedCategory.forEach((val) => {
        if(val.checked){
            selectedValue=val.value;
        }
    });
    if(!selectedValue){
        alert("Please select a category");
        return;
    }
    // console.log(selectedValue);
    // console.log("Form Submitted Successfully");

    let note = {
        "title" : titleInput.value,
        "autherName" : authorInput.value,
        "date" : dateInput.value,
        "discription" : descriptionInput.value,
        "category" : selectedValue,
    };
    alldata.push(note);
    localStorage.setItem(1,JSON.stringify(alldata));
    boxForm.style.display = "none";
    // localStorage.setItem(localStorage.length+1,JSON.stringify(note));
});

if (!localStorage.getItem("1")) {
        localStorage.setItem("1", "[]");
    }
let alldata = JSON.parse(localStorage.getItem("1"));
let showdata = [...alldata];

function show(){
    titleText.textContent = showdata[x]["title"];
    nameText.textContent = "- " + showdata[x]["autherName"];
    dateText.textContent = showdata[x]["date"];
    descriptionText.textContent = showdata[x]["discription"];
    cardOne.style.backgroundColor = giveColor(showdata[x]["category"]);
    count.textContent = x+1;
    // let note = JSON.parse(localStorage.getItem(x));
    // titleText.textContent = note["title"];
    // nameText.textContent = "- " + note["autherName"];
    // dateText.textContent = note["date"];
    // descriptionText.textContent = note["discription"];
    // cardOne.style.backgroundColor = note["category"];
    // count.textContent = x;
}

// upBtn.addEventListener("click",()=>{
//     if(alldata.length>x) x++;
//     else x=1;
//         if(alldata.length>=x){
//             show();
//         }
//         if((x-1)>=1) cardTwo.style.backgroundColor = JSON.parse(localStorage.getItem(x-1))["category"];
//         else cardTwo.style.backgroundColor = "rgb(17, 17, 17)";
//         if((x-2)>=1) cardThree.style.backgroundColor = JSON.parse(localStorage.getItem(x-2))["category"];
//         else cardThree.style.backgroundColor = "rgb(17, 17, 17)";
// });

// downBtn.addEventListener("click",()=>{
//     if(x>1) x--;
//     else x = alldata.length;
//         if(x>0){
//             show();
//         }
//         if((x-1)>=1) cardTwo.style.backgroundColor = JSON.parse(localStorage.getItem(x-1))["category"];
//         else cardTwo.style.backgroundColor = "rgb(17, 17, 17)";
//         if((x-2)>=1) cardThree.style.backgroundColor = JSON.parse(localStorage.getItem(x-2))["category"];
//         else cardThree.style.backgroundColor = "rgb(17, 17, 17)";
// });

function noNote(){
    nameText.textContent = "- " + "Add Name";
    dateText.textContent = "Add Date";
    descriptionText.textContent = "Add discription";
    cardOne.style.backgroundColor ="rgb(17, 17, 17)";
    count.textContent = x;
}
function giveColor( val ){
    if(val === "emergency") return "rgb(241, 72, 72)";
    if(val === "important") return "rgb(204, 113, 44)";
    if(val === "urgent") return "rgb(178, 186, 25)";
    return "rgb(83, 162, 88)";
}

upBtn.addEventListener("click",()=>{
    if(showdata.length>(x+1)) {x++;}
    else {x=0;}
        if(showdata.length>x){
            show();
        }
        if((x-1)>=0) {cardTwo.style.backgroundColor = giveColor(showdata[x-1]["category"]);}
        else {cardTwo.style.backgroundColor = "rgb(17, 17, 17)";}
        if((x-2)>=0) {cardThree.style.backgroundColor = giveColor(showdata[x-2]["category"]);}
        else {cardThree.style.backgroundColor = "rgb(17, 17, 17)";}
});

downBtn.addEventListener("click",()=>{
    if(x>0) {x--;}
    else {x = showdata.length-1;}
        if(x>=0){
            show();
        }
        if((x-1)>=0) {cardTwo.style.backgroundColor = giveColor(showdata[x-1]["category"]);}
        else {cardTwo.style.backgroundColor = "rgb(17, 17, 17)";}
        if((x-2)>=0) {cardThree.style.backgroundColor = giveColor(showdata[x-2]["category"]);}
        else {cardThree.style.backgroundColor = "rgb(17, 17, 17)";}
});

if(showdata.length>x){
        show();
}
else {
    titleText.textContent = "No Note ,Add note";
    noNote();
}

// const emergencyBtn = document.querySelector(".emergency-button");
// const importantBtn = document.querySelector(".important-button");
// const urgentBtn = document.querySelector(".urgent-button");
// const noRushBtn = document.querySelector(".norush-button");


allBtn.addEventListener("click",()=>{
    showdata = [...alldata];
    x=0;
    if(showdata.length>x){
        show();
    }
    else {
        titleText.textContent = "No Emergency Note";
        noNote();
    }
});
emergencyBtn.addEventListener("click",()=>{
    let emergencyData = alldata.filter((data)=>{
        if(data["category"] === "emergency") return true;
    });
    showdata = [...emergencyData];
    x=0;
    if(showdata.length>x){
        show();
    }
    else {
        titleText.textContent = "No Emergency Note";
        noNote();
    }
});
importantBtn.addEventListener("click",()=>{
    let importantData = alldata.filter((data)=>{
        if(data["category"] === "important") return true;
    });
    showdata = [...importantData];
    x=0;
    if(showdata.length>x){
        show();
    }
    else {
        titleText.textContent = "No important Note";
        noNote();
    }
});
urgentBtn.addEventListener("click",()=>{
    let urgentData = alldata.filter((data)=>{
        if(data["category"] === "urgent") return true;
    });
    showdata = [...urgentData];
    x=0;
    if(showdata.length>x){
        show();
    }
    else {
        titleText.textContent = "No urgrnt Note";
        noNote();
    }
});
noRushBtn.addEventListener("click",()=>{
    let norushData = alldata.filter((data)=>{
        if(data["category"] === "norush") return true;
    });
    showdata = [...norushData];
    x=0;
    if(showdata.length>x){
        show();
    }
    else {
        titleText.textContent = "No NoRush Note";
        noNote();
    }
});

// let notes = [
//     {
//   title: "Build Portfolio Website",
//   autherName: "Aarav",
//   date: "2026-06-24",
//   discription: "🎨 Design the homepage layout.\n💻 Add responsive sections.\n🚀 Deploy it on Netlify.",
//   category: "important"
// },
// {
//   title: "Morning Run",
//   autherName: "Kiara",
//   date: "2026-06-25",
//   discription: "🏃 Run 5 kilometers in the park.\n💧 Stay hydrated throughout.\n🌅 Enjoy the sunrise.",
//   category: "norush"
// },
// {
//   title: "Prepare Presentation",
//   autherName: "Rohan",
//   date: "2026-06-26",
//   discription: "📊 Create clean slides.\n📝 Practice speaking points.\n🎯 Be ready before deadline.",
//   category: "urgent"
// },
// {
//   title: "Doctor Appointment",
//   autherName: "Ananya",
//   date: "2026-06-27",
//   discription: "🏥 Visit the clinic at 10 AM.\n📋 Carry previous reports.\n💊 Discuss medications.",
//   category: "emergency"
// },
// {
//   title: "Learn React",
//   autherName: "Vivaan",
//   date: "2026-06-28",
//   discription: "⚛️ Understand components.\n🔄 Practice state management.\n📚 Build a small project.",
//   category: "important"
// },
// {
//   title: "Family Dinner",
//   autherName: "Ishita",
//   date: "2026-06-29",
//   discription: "🍽️ Book a nice restaurant.\n👨‍👩‍👧 Invite everyone.\n📸 Capture some memories.",
//   category: "norush"
// },
// {
//   title: "Hackathon Registration",
//   autherName: "Kabir",
//   date: "2026-06-30",
//   discription: "💡 Finalize team members.\n🖥️ Register online.\n🏆 Prepare project ideas.",
//   category: "urgent"
// },
// {
//   title: "Pay Electricity Bill",
//   autherName: "Mehak",
//   date: "2026-07-01",
//   discription: "⚡ Check due amount.\n💳 Complete payment online.\n✅ Save receipt safely.",
//   category: "emergency"
// },
// {
//   title: "Photography Walk",
//   autherName: "Aditya",
//   date: "2026-07-02",
//   discription: "📷 Visit nearby lake.\n🌄 Capture nature shots.\n✨ Edit best photos later.",
//   category: "norush"
// },
// {
//   title: "Competitive Coding",
//   autherName: "Sara",
//   date: "2026-07-03",
//   discription: "💻 Solve 3 hard problems.\n📈 Improve rating.\n🔥 Learn new techniques.",
//   category: "important"
// },
// {
//   title: "Team Meeting",
//   autherName: "Yash",
//   date: "2026-07-04",
//   discription: "🤝 Discuss project progress.\n📋 Assign new tasks.\n⏰ Set next milestone.",
//   category: "urgent"
// },
// {
//   title: "Book Flight Tickets",
//   autherName: "Priya",
//   date: "2026-07-05",
//   discription: "✈️ Compare ticket prices.\n🧳 Choose travel dates.\n📧 Save booking details.",
//   category: "important"
// },
// {
//   title: "Laptop Service",
//   autherName: "Arjun",
//   date: "2026-07-06",
//   discription: "💻 Backup important files.\n🔧 Get hardware checked.\n⚡ Improve performance.",
//   category: "emergency"
// },
// {
//   title: "Yoga Session",
//   autherName: "Sneha",
//   date: "2026-07-07",
//   discription: "🧘 Practice breathing exercises.\n🌿 Relax the mind.\n💪 Improve flexibility.",
//   category: "norush"
// },
// {
//   title: "Resume Update",
//   autherName: "Reyansh",
//   date: "2026-07-08",
//   discription: "📄 Add latest projects.\n🏅 Mention achievements.\n📤 Apply for internships.",
//   category: "important"
// },
// {
//   title: "Birthday Planning",
//   autherName: "Tanya",
//   date: "2026-07-09",
//   discription: "🎂 Order a cake.\n🎈 Decorate the venue.\n🎉 Invite close friends.",
//   category: "norush"
// },
// {
//   title: "Database Revision",
//   autherName: "Dhruv",
//   date: "2026-07-10",
//   discription: "🗄️ Revise SQL queries.\n📚 Practice normalization.\n✅ Solve previous questions.",
//   category: "urgent"
// },
// {
//   title: "Emergency Backup",
//   autherName: "Naina",
//   date: "2026-07-11",
//   discription: "☁️ Backup all documents.\n🔒 Secure sensitive files.\n📂 Verify backup integrity.",
//   category: "emergency"
// },
// {
//   title: "Movie Night",
//   autherName: "Harsh",
//   date: "2026-07-12",
//   discription: "🎬 Pick a good movie.\n🍿 Prepare snacks.\n😄 Enjoy with friends.",
//   category: "norush"
// },
// {
//   title: "Open Source Contribution",
//   autherName: "Aditi",
//   date: "2026-07-13",
//   discription: "🌍 Find beginner issues.\n🛠️ Submit a pull request.\n⭐ Learn from reviews.",
//   category: "important"
// }];

// localStorage.setItem("1", JSON.stringify(notes));
