"use client"
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Autocomplete, Button } from "@mui/material";
import { Buttom } from "components/atoms/buttoms";

interface ModalProps extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  wasPayed: boolean;
  isOpen: boolean;
  onClose: () => void;
  eyHola: () => void;
}

export function MessageDialog({ wasPayed, isOpen, onClose, eyHola, ...props }: ModalProps) {
  if (!isOpen) return null;


  const [cardHolderName, setCardHolderName] = useState("");
  const [cardType, setCardType] = useState("Seleccionar");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [installments, setInstallments] = useState("Seleccionar");
  const [errorMessage, setErrorMessage] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [identificationType, setIdentificationType] = useState("");
  const [identificationNumber, setIdentificationNumber] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
  };

  const handleCardHolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    setCardHolderName(inputName.slice(0, 40)); // Limitar a 40 caracteres
    setErrorMessage("");
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCardNumber = e.target.value;
    setCardNumber(inputCardNumber);
    setErrorMessage("");

    // Expresión regular para validar que sean solo caracteres numéricos y máximo 16
    const regex = /^[0-9]*$/;

    if (inputCardNumber.length > 16 || !regex.test(inputCardNumber)) {
      setErrorMessage("El número de tarjeta debe contener solo números y máximo 16 dígitos.");
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputCvv = e.target.value;
    setCvv(inputCvv);
    setErrorMessage("");

    // Expresión regular para validar que sean como máximo 3 dígitos numéricos
    const regex = /^\d{0,3}$/;

    if (!regex.test(inputCvv)) {
      setErrorMessage("El CVC debe contener como máximo 3 dígitos numéricos.");
    }
  };

  const handleExpiryMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryMonth(e.target.value);
  };

  const handleExpiryYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryYear(e.target.value);
  };

  const handleIdentificationTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdentificationType(e.target.value);
  };

  const handleIdentificationNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdentificationNumber(e.target.value);
  };






  const [bankEntity, setBankEntity] = useState("");
  const [personType, setPersonType] = useState("");
  const [socialReason, setSocialReason] = useState("");
  const [email, setEmail] = useState("");


  const handleSocialReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSocialReason(inputValue);
    setErrorMessage("");
    // Add validation for social reason if needed
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setErrorMessage("");
    // Add validation for email if needed
  };

  function name() {
    onClose()
    eyHola()
  }


  if (wasPayed) {

    return (
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div style={{ background: "white", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

          <div className="rounded-lg bg-white shadow-md py-8 px-16 flex flex-col items-center" style={{ width: "520px" }}>

            <img src="./cancel.png" alt="Rechazado" className="w-14" />

            <h2 className="mt-4 mb-8 text-left text-lg bg-custom-blue text-gray-600">EL PAGO FUE RECHAZADO</h2>

            <button
              onClick={onClose}
              className="focus:shadow-outline rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              style={{ backgroundColor: "#2196F3" }}
            >
              Aceptar
            </button>
          </div>



        </div>
      </div>
    );
  }
  else {
    return (
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div style={{ background: "white", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>

          <div className="rounded-lg bg-white shadow-md py-10 px-16 flex flex-col items-center" style={{ width: "520px" }}>

            <img src="./yes.png" alt="Aceptado" className="w-14" />

            <h2 className="mt-4 mb-8 text-left text-lg bg-custom-blue text-gray-600">EL PAGO FUE REALIZADO CON EXITO!</h2>

            <button
              onClick={name}
              className="focus:shadow-outline rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              style={{ backgroundColor: "#2196F3" }}
            >
              Aceptar
            </button>
          </div>



        </div>
      </div >
    );


  }

}
