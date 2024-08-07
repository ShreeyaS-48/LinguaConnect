document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){
        console.log("ReadyState: Complete");
        initApp();
    }
});
const initApp = ()=>{
    const languagesButton = document.querySelector(".languages-button");
    const languagesDropDownArrow = languagesButton.querySelector(".languages-drop-down-arrow");
    languagesButton.addEventListener("mouseover", (event)=>{
        languagesDropDownArrow.style.transform = "rotate(180deg)";
        languagesButton.querySelector(".display-languages").style.display = "flex";
        languagesButton.querySelector(".display-languages").style.flexDirection = "column";
    });
    languagesButton.addEventListener("mouseout", (event)=>{
        languagesDropDownArrow.style.transform = "rotate(360deg)";
    });
    languagesButton.querySelector(".display-languages").addEventListener("mouseout",(event)=>{
        languagesButton.querySelector(".display-languages").style.display = "none";
    });
    const loginButton = document.querySelector(".login-button");
    const loginDropDownArrow = loginButton.querySelector(".login-drop-down-arrow");
    loginButton.addEventListener("mouseover", (event)=>{
        loginDropDownArrow.style.transform = "rotate(180deg)";
        loginButton.querySelector(".display-login").style.display = "flex";
        loginButton.querySelector(".display-login").style.flexDirection = "column";
    });
    loginButton.addEventListener("mouseout", (event)=>{
        loginDropDownArrow.style.transform = "rotate(360deg)";
    });
    loginButton.querySelector(".display-login").addEventListener("mouseout",(event)=>{
        loginButton.querySelector(".display-login").style.display = "none";
    });
    const menuButton = document.querySelector(".menu-button");
    const menuDropDownArrow = menuButton.querySelector(".menu-drop-down-arrow");
    menuButton.addEventListener("mouseover", (event)=>{
        menuDropDownArrow.style.transform = "rotate(180deg)";
    });
    menuButton.addEventListener("mouseout", (event)=>{
        menuDropDownArrow.style.transform = "rotate(360deg)";
    });
    menuButton.addEventListener("mouseover", (event)=>{
        const menuList = menuButton.querySelector(".menu-list");
        menuList.style.display = "flex";
        menuList.style.flexDirection = "column";
    });
    menuButton.querySelector(".menu-list").addEventListener("mouseout", (event)=>{
        const menuList = menuButton.querySelector(".menu-list");
        menuList.style.display = "none";
    });
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", (event)=>{
        document.querySelector(".nav-list").style.display = "none";
        document.querySelector(".title").style.display = "none";
        document.querySelector(".search-button-clicked").style.display="flex";
        document.querySelector(".search-button-clicked").style.gap="5px";
        document.querySelector(".search-button-clicked").style.alignItems="center";
    });
    const closeSearch = document.querySelector(".close-search");
    closeSearch.addEventListener("click", (event)=>{
        document.querySelector(".nav-list").style.display = "flex";
        document.querySelector(".title").style.display = "flex";
        document.querySelector(".search-button-clicked").style.display="none";
    });
    document.getElementById("search").addEventListener("input", (event)=>{
        search();
    });

    // english page
    const form =document.querySelector(".enrollment-form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        form.style.display = "none";
        document.querySelector(".tutors-section").style.display = "none";
        const proceedToPayment = document.querySelector(".proceed-to-payment");
        proceedToPayment.style.display = "flex";
        const accountName = form.querySelector("#account-name").value;
        const accountNumber = form.querySelector("#account-number").value;
        const tutorSelected = form.querySelector("#tutor-preference").value;
        const batchSelected = form.querySelector("#batch-preference").value == "one" ? "14:00 to 15:00" : "18:00 to 19:00";
        const durationSelected = form.querySelector("#duration-preference").value == "one" ? "45 minutes" : form.querySelector("#duration-preference").value == "two" ? "60 minutes" : "90 minutes";
        proceedToPayment.querySelector(".details").innerHTML=`
        <tr>
            <td>Name:</td>
            <td>${accountName}</td>
        </tr>
        <tr>
            <td>Phone Number:</td>
            <td>${accountNumber}</td>
        </tr> 
        <tr>
            <td>Tutor Selected:</td>
            <td>${tutorSelected}</td> 
        </tr>
        <tr>
            <td>Batch Selected:</td>
            <td>${batchSelected}</td> 
        </tr>
        <tr>
            <td>Duration:</td>
            <td>${durationSelected}</td>
        </tr>    
        `;
        proceedToPayment.querySelector("button:first-of-type").addEventListener("click", (event)=>{
            proceedToPayment.style.display = "none";
            form.style.display="grid";
        });
        proceedToPayment.querySelector("button:last-of-type").addEventListener("click", (event)=>{
            document.querySelector("header").style.display = "none";
            document.querySelectorAll("section").forEach((sec)=>{
                sec.style.display = "none";
            })
            document.querySelector("footer").style.display = "none";
            document.querySelector("main").innerHTML="<h2>Directing to payment gateway</h2><h2>Do not refresh the page<h2>";
        });
    });
    const tutorPreference = form.querySelector(".tutor-preference");
    tutorPreference.addEventListener("click", (event)=>{tutorPreference.options[0].disabled = "true"});
    const batchPreference = form.querySelector(".batch-preference");
    batchPreference.addEventListener("click", (event)=>{batchPreference.options[0].disabled = "true"});
    const durationPreference = form.querySelector(".duration-preference");
    durationPreference.addEventListener("click", (event)=>{durationPreference.options[0].disabled = "true"});
    handleRating();
    form.querySelector("button:nth-of-type(1)").addEventListener("click", (event)=>{
        location.reload();
    });
    
    handleMediaQueries();
}   

const search = ()=>{
    const inputValue = document.querySelector("#search").value;
    const searchButtonBox = document.querySelector(".search-button-box");
    searchButtonBox.addEventListener("click", (event)=>{
    const generatedURL = "https://www.google.com/search?q=" + generateURL(inputValue);
    window.open(generatedURL);
    document.querySelector(".nav-list").style.display = "flex";
    document.querySelector(".title").style.display = "flex";
    document.querySelector(".search-button-clicked").style.display="none";
    });
}
const generateURL = (inputValue)=>{
    return inputValue.trim().replaceAll(" ", "%20");
}


const handleRating = ()=>{
    const starsDiv = document.querySelectorAll(".stars");
    starsDiv.forEach((stars)=> {
        const color = (num)=>{
            for(var i = 1; i<= num; i+=2){
                stars.querySelector(`:nth-child(${i})`).style.display = "none";
                stars.querySelector(`:nth-child(${i + 1})`).style.display = "inline";
            }
        }
        const removeColor = (num)=>{
            for(var i=10;i>=num;i-=2){
                stars.querySelector(`:nth-child(${i})`).style.display = "none";
                stars.querySelector(`:nth-child(${i-1})`).style.display = "inline";
            } 
        }
        stars.querySelector(".unfilled-one").addEventListener("click", (event)=>{
            color(1);
        })
        stars.querySelector(".unfilled-two").addEventListener("click", (event)=>{
            color(3);
        })
        stars.querySelector(".unfilled-three").addEventListener("click", (event)=>{
            color(5);
        })
        stars.querySelector(".unfilled-four").addEventListener("click", (event)=>{
            color(7);
        })
        stars.querySelector(".unfilled-five").addEventListener("click", (event)=>{
            color(9);
        });
        stars.querySelector(".filled-one").addEventListener("click", (event)=>{
            removeColor(2);
        });
        stars.querySelector(".filled-two").addEventListener("click", (event)=>{
            removeColor(4);
        });
        stars.querySelector(".filled-three").addEventListener("click", (event)=>{
            removeColor(6);
        });
        stars.querySelector(".filled-four").addEventListener("click", (event)=>{
            removeColor(8);
        });
        stars.querySelector(".filled-five").addEventListener("click", (event)=>{
            removeColor(10);
        });
    });
}

const handleMediaQueries = ()=>{
    const tutors = document.querySelectorAll(".tutor-profile");
    console.log(tutors);
    const leftArrow = document.querySelector(".arrows:first-of-type");
    const rightArrow = document.querySelector(".arrows:last-of-type");
    var currentIndex = 0;
    rightArrow.addEventListener("click", (event)=>{ 
        tutors[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1)%tutors.length;
        if(tutors[currentIndex].style.display === "none")
        tutors[currentIndex].style.display = "flex";
        else
        tutors[(currentIndex + 1)%tutors.length].style.display = "flex";
    });
    leftArrow.addEventListener("click", (event)=>{
        tutors[currentIndex].style.display = "none";
        currentIndex = (currentIndex - 1 + tutors.length)%tutors.length;
        if(tutors[currentIndex].style.display === "none")
        tutors[currentIndex].style.display = "flex";
        else
        tutors[(currentIndex - 1 + tutors.length)%tutors.length].style.display = "flex";
    });
}