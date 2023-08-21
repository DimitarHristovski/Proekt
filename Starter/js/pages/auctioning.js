//imam nekoi greski ni AI ne mi pomaga...
/*
  


function auctionPage() {
    const timer = document.querySelector(".timer");
    const timeLeft = document.querySelector(".time-left");
    const bidForm = document.querySelector("#bidForm");
    const confirmBidBtn = document.querySelector("#confirmBid");
    const bidAmountInput = document.querySelector("#bidAmount");

    let time;
    let timerInterval;
    console.log("Starting auctionPage function...");

    if (localStorage.getItem("auctionTimer") !== null) {
        time = +localStorage.getItem("auctionTimer");
    } else {
        time = 120;
        localStorage.setItem("auctionTimer", time);
        time = +localStorage.getItem("auctionTimer");
    }
   

    Other variables and element selections...

    Check user type and bidding status, and set initial display
    if (localStorage.getItem("userType") == "artistsItems") {
        bidForm.style.display = "none";
    } else if (localStorage.getItem("noBid") !== null) {
        confirmBidBtn.disabled = true;
        bidAmountInput.value = "";
    } else {
        bidForm.style.display = "block";
    }
  
    Check if there are items on auction
    if (itemsOnAuction.length >= 1) {
      document.querySelector(".live-auctioning").style.display = "block";
  
      auctionInfo.classList.add("d-none");
      auctionActions.classList.remove("d-none");
      auctionCardContainer.classList.remove("d-none");
      currentBiddingItem = itemsOnAuction[0];
      let initialBidPrice = Math.floor(itemsOnAuction[0].price / 2);
      bidAmountInput.min = initialBidPrice;
  
      Create card elements for each item on auction
      itemsOnAuction.forEach((item) => {
        createCard(item);
      });
  
      Initialize auction page
      initAuctionPage();
    } else {
      document.querySelector(".live-auctioning").style.display = "none";
  
      auctionInfo.classList.remove("d-none");
      auctionCardContainer.classList.add("d-none");
      auctionActions.classList.add("d-none");
    }
    console.log("Finished initializing auctionPage.");

    function initAuctionPage() {
      Other code for initializing auction page
  
      Initialize timer with initial time
      initTimer(time);
  
      bidForm.removeEventListener("submit", onBidHandler);
      bidForm.addEventListener("submit", onBidHandler);
    }
  
    function initTimer(initialTime) {
        time = initialTime;
    
        if (timerInterval) {
            clearInterval(timerInterval);
        }
    
        updateTimerDisplay(time);
    
        timerInterval = setInterval(() => {
            if (time <= 0) {
                clearInterval(timerInterval);
                Other code for handling the end of auction
                return;
            }
    
            time--;
            localStorage.setItem("auctionTimer", time);
            updateTimerDisplay(time);
        }, 1000);
    }
    
    function updateTimerDisplay(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timeLeft.textContent = `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }
    function onBidHandler(e) {
      e.preventDefault();
      const li = document.createElement("li");
      li.classList.add("me");
      let p = document.createElement("p");
      p.innerText = `I bid ${bidAmountInput.value}`;
      li.appendChild(p);

      allBidsUl.appendChild(li);
      allBidsData.push(bidAmountInput.value);
      localStorage.setItem("allBidsData", JSON.stringify(allBidsData));

      makeBid(bidAmountInput.value).then((data) => {
        const { isBidding, bidAmount } = data;

        if is bidding == true
        if (isBidding) {
          initTimer(60);
          appending their bid to the ul list
          const li = document.createElement("li");
          const p = document.createElement("p");
          p.innerText = `I bid ${bidAmount}`;
          li.classList.add("them");
          li.appendChild(p);
          allBidsUl.append(li);

          allBidsData.push(bidAmount);
          localStorage.setItem("allBidsData", JSON.stringify(allBidsData));

          bidAmountInput.setAttribute("min", bidAmount + 10);
          bidAmountInput.value = bidAmount + 10;
        } else {
          confirmBidBtn.setAttribute("disabled", "");
          const li = document.createElement("li");
          const p = document.createElement("p");
          p.innerText = `Ah... You won... I'm done`;
          li.classList.add("them");
          li.appendChild(p);
          allBidsUl.append(li);
          localStorage.setItem("noBid", "true");
        }
      });
    }
    initTimer(time);

    bidForm.removeEventListener("submit", onBidHandler);
    bidForm.addEventListener("submit", onBidHandler);
  }
 

  console.log("Calling onAuctionPage...");
  onAuctionPage();
  console.log("onAuctionPage called.");

function makeBid(amount) {
    const url = "https://projects.brainster.tech/bidding/api";
    const data = { amount };
    console.log("Making bid with amount:", amount);

    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        referrerPolicy: "origin-when-cross-origin",
        body: JSON.stringify(data),
    }).then((res) => res.json());

}
*/
