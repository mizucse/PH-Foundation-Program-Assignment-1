// Question 1: Value Detective
function describeValue(inputVal){
    if (inputVal) {
        console.log(typeof(inputVal) + " | truthy");
    }else{
        console.log(typeof(inputVal) + "| falsy");
    }
}
describeValue("hello");
describeValue("");
describeValue(25);
describeValue(0);
describeValue(true);
describeValue(null);
describeValue(undefined);
describeValue("0");
describeValue(NaN);
describeValue(null);

// End Question 1: Value Detective

// Question 2: Bangladesh Weekend Machine

function getDayType(dayNameInput){
    let dayName = dayNameInput.toLowerCase();
    let dayType = "";
    // console.log("input: " + dayName);
    
    switch (true) {
        case (dayName == "friday" || dayName == "saturday"):
            dayType = "Weekend";
            break;
        case (dayName == "sunday" || dayName == "monday" || dayName == "tuesday" || dayName == "wednesday" || dayName == "thursday"):
            dayType = "Working Day";
            break;
        default:
            dayType = "Invalid Day";
            break;
    }
    return dayType;
}
console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));
console.log(getDayType("xyz"));
console.log(getDayType("XYZ"));


// End Question 2: Bangladesh Weekend Machine

// Question 3: Username Gatekeeper · 10 marks
function validateUsername(inputUsername) {
    let username = inputUsername;
    let userNameLength = username.length;
    let findText = username.toLowerCase();
    let msg = "";
    if (userNameLength < 4) {
        msg = "Too Short";
    }else if(findText.includes('admin')){
        msg = "Reserved Word"; 
    }else if(findText.includes(' ')){
        msg = "No Space Allowed"; 
    }else {
        msg = "Available";
    }
    return msg;
}
console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));
// end Question 3: Username Gatekeeper · 10 marks

// Question 4: Dhaka CNG Fare Meter · 15 marks
function getCngFare(distance, isNight, waitingMinutes=0) {
    let totalAmount = 0;
    let minFare = 50;
    let firstKm = 2;
    let afterTwoKmCost = 15;
    let waitingCharge = 2;
    let totalWaitingCharge = 0;
    let nightFare = 0.2;

    if (waitingMinutes > 0) {
        totalWaitingCharge = waitingMinutes * waitingCharge;
    }
    
    if(isNight){        
        if(distance > firstKm){
            let amount = minFare + (distance-firstKm)*afterTwoKmCost + totalWaitingCharge;
            totalAmount = amount + amount*nightFare;
            // return amount;
            // console.log(totalAmount)
        }else{
            totalAmount = (minFare + totalWaitingCharge)*nightFare;
            // console.log(totalAmount);
        }
    }else{
        if(distance > firstKm){
            totalAmount = minFare + (distance-firstKm)*afterTwoKmCost + totalWaitingCharge;
            // console.log(totalAmount);
        }else{
            totalAmount = minFare + totalWaitingCharge;
            // console.log(totalAmount);
        }
    }
    return totalAmount;
    
}
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));

// end Question 4: Dhaka CNG Fare Meter · 15 marksc

// Question 5: Run Chase Commentator
getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";
    let msg = "";
    
    if(requiredRate <= 6){
        verdict = "Comfortable ";
    }else if(requiredRate > 6 && requiredRate <= 12){
        verdict = "Tough";
    }else {
        verdict = "Almost Impossible"; 
    } 
    
    if(runsNeeded <= 0){
        msg = "Won";
    }else if(ballsLeft <= 0){
        msg = "lost";
    }else if(requiredRate ){
        msg = `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`
    } 
    return msg;
};
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));


// end Question 5: Run Chase Commentator