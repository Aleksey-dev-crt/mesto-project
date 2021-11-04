import { config } from "./config";

const isFormValid = (inputList) => {
  return inputList.every((inputElement) => inputElement.validity.valid);
};

const clearValidationErrors = (inputList) => {
  inputList.forEach(inputElement => hideInputError(inputElement))
}

const hideInputError = (inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent = "";
  inputElement.classList.remove(config.inputErrorClass);
};

const showInputError = (inputElement) => {
  const errorElement = document.querySelector(`#${inputElement.name}-error`);
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(config.inputErrorClass);
};

const toggleButtonState = (inputList, buttonElement) => {
  if (isFormValid(inputList)) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }
};

const checkInputValidity = (inputElement) => {
  if (inputElement.validity.valid) {
    hideInputError(inputElement);
  } else {
    showInputError(inputElement);
  }
};

const formValidate = (inputList, buttonElement) => {
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(inputElement);
      toggleButtonState(inputList, buttonElement)
    });
  });
};

const enableValidation = () => {
  const forms = Array.from(document.forms)
  forms.forEach(form => {
    const submitButton = Array.from(form.elements).filter(element => element.type == "submit").pop()
    const inputList = Array.from(form.elements).filter(element => element.type != "submit")
    formValidate(inputList, submitButton)
  })
};

export { enableValidation, clearValidationErrors, toggleButtonState };
