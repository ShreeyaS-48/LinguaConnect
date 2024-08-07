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
    //index-page
    const flags = document.querySelectorAll(".language-flag");
    flags.forEach((flag)=>{
        const languageList = flag.querySelector(".language-list");
        flag.addEventListener("mouseover", (event)=>{
            languageList.style.display = "flex";
            languageList.style.flexDirection = "column";
            languageList.style.justifyContent = "space-evenly";
            flag.querySelector(".flag-text-content").classList.add("change-height");
        });
        flag.addEventListener("mouseout", (event)=>{
            languageList.style.display = "none";
            flag.querySelector(".flag-text-content").classList.remove("change-height");
        });
    });
    getQuote();
    document.getElementById("search").addEventListener("input", (event)=>{
        search();
    });
    const quoteButton=document.querySelector(".quote-button");
    quoteButton.addEventListener("click",(event)=>{
        document.querySelector(".block-quote").style.display = "none";
        quoteButton.style.display="none";
        document.querySelector(".quote").style.display = "flex";
        document.querySelector(".buttons-for-user-quote").style.display = "flex";
        document.querySelector(".quote-reset").addEventListener("click", (event)=>{document.querySelector(".quote").textContent=""});
    });
}   
const getQuote = async()=>{
    const response = await fetch("https://api.quotable.io/random", {
        method:"GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonQuote = await response.json();
    const quote = "\"" + jsonQuote.content + "\"";
    const author = "- " + jsonQuote.author;
    const quoteContent = document.querySelector(".quote-content");
    quoteContent.textContent= quote;
    const quoteAuthor = document.querySelector(".quote-author");
    quoteAuthor.textContent = author;
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