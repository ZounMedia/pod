//store button, input, and error span as variables
let input = document.querySelector("input");
const submitBtn = document.querySelector("button");
let errorText = document.querySelector("span.error");

//add click event listener to button
submitBtn.addEventListener("click", (event) => {
  //   console.log({ input, submitBtn, errorText, inputValue: input.value });

  //reset error text value to empty
  errorText.innerHTML = "";

  if (
    input.value.length === 0 ||
    !(input.value.includes("@") && input.value.includes(".com"))
  ) {
    errorText.innerHTML = "Oops! Please check your email";
    //prevent form from submitting
    event.preventDefault();
    return;
  }

  //reset input value to empty string after submit
  input.value = "";
});
