//store button, input, and error span
let input = document.querySelector("input");
const submitBtn = document.querySelector("button");
let errorText = document.querySelector("span.error");

//add click event listener to button
submitBtn.addEventListener("click", () => {
  console.log({ input, submitBtn, errorText });
  //reset error text value to empty
  errorText.innerHTML = "";

  console.log("input value", input.value);

  if (
    input.value.length === 0 ||
    !(input.value.includes("@") && input.value.includes(".com"))
  ) {
    errorText.innerHTML = "Oops! Please check your email";
    return;
  }

  //reset input value to empty string after submit
  input.value = "";
});
