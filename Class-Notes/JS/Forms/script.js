console.log("Script is running...");

function handleFormSubmit() {
  const formInputNames = [
    "eventName",
    "eventDetails",
    "eventEmail",
    "eventDate",
  ];
  const formData = formInputNames.map((inputName) => {
    const element = document.getElementById("event-form")[inputName];
    const inputValue = element.value;
    if (inputName == "eventName" && inputValue.length == 0) {
      alert("Please type a name for your event!");
      element.style.border = "2px solid red";
      return null;
    }
    // For the details, we want a length of more than 50 characters
    if (inputName == "eventDetails" && inputValue.length < 10) {
      alert("Please add more details to your event!");
      return null;
    }
    // For the email, it should have an '@' symbol, and a .com or .org or .edu or .ca
    if (inputName == "eventEmail" && !inputValue.includes("@")) {
      alert(
        "Please include the @ symbol and a terminating address to your email"
      );
      return null;
    }
    // For the event Date, it needs to be in the future!
    // TODO: Fix Bug
    // console.log(Date.parse(inputValue)); // 2024-04-11
    // console.log(Date.now()); // 171224790400

    const inputDateInSeconds = Date.parse(inputValue);
    const currentDateInSeconds = Date.now();
    if (inputName == "eventDate" && inputDateInSeconds < currentDateInSeconds) {
      alert("Event must be in the future!!!");
      return null;
    }
    return inputValue;
  });
}

function clearFormWarning(inputName) {
  const inputElement = document.getElementById("event-form")[inputName];
  inputElement.style.border = "unset";
  // inputElement.style.border = "1px solid black";
}

// TODO: Figure out how to include .com/.org etc.
// const symbolArray = [
//   ".com",
//   ".org",
//   ".ca",
//   ".edu",
//   ".gov",
//   ".io",
//   ".dev",
//   ".net",
// ];
// symbolArray.forEach((symbol) => {
//   if (
//     inputName == "eventEmail" &&
//     !inputValue.includes("@") &&
//     !inputValue.includes(symbol)
//   ) {
//     alert(
//       "Please include the @ symbol and a terminating address to your email"
//     );
//     return null;
//   }
// });
