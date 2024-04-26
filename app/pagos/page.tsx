"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "components/organisms/PaymentModal";
import { MessageDialog } from "components/organisms/PayMessageDialog";

export default function Web() {
  const router = useRouter();

  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const ticketPrice = 50000;
  const taxes = 36966;
  const baggagePrice = 20000;
  const seatPrice = 5000;

  const totalTicketsAndTaxes = ticketPrice + taxes;
  const totalAdditionalCharges = baggagePrice + seatPrice;
  const totalToPay = totalTicketsAndTaxes + totalAdditionalCharges;


  const [isModalOpen, setModalOpen] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  const [wasReservationPayed, setWasReservationPayed] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const openModal2 = () => setModal2Open(true);
  const closeModal2 = () => setModal2Open(false);

  const payed = (value: boolean) => setWasReservationPayed(value);



  const [hola, setHola] = useState(false);
  const eyHola = () => { setHola(true); setSelectedPaymentOption("") };



  const handleStartPayment = () => {
    if (!selectedPaymentOption) {
      setErrorMessage("Debes seleccionar un método de pago.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }
    openModal()

  };

  return (
    <div className="flex min-h-screen justify-center bg-gray-100">
      <img src="./HomeReservas.png" alt="Home" style={{ width: "75%", height: "100%" }} />
      <div className="mx-auto mb-2 w-full max-w-md p-4">

        {/* VUELO COSTO */}
        <div className="mb-4 rounded-lg bg-white p-6">
          <h3 className="mb-2 text-lg font-bold" style={{ color: "#2196F3" }}>Vuelos</h3>

          <div className="mb-2 flex justify-between">
            <p className="text-base text-black">Tiquetes</p>
            <p className="text-base text-black">--</p>
          </div>

          <div className="mb-2 flex justify-between">
            <p className="text-base text-black">Inpuestos</p>
            <p className="text-base text-black">--</p>
          </div>

          <div className="mb-2 flex justify-between">
            <p className="text-base font-bold" style={{ color: "#2196F3" }}>Total</p>
            <p className="text-base font-bold text-black">${!hola ? totalToPay.toLocaleString() : "0"}</p>
          </div>

        </div>

        {/* Métodos de pago */}
        <div className="mb-6 rounded-lg bg-white p-6">
          <h3 className="mb-2 text-lg font-bold" style={{ color: "#2196F3" }}>Medios de pago</h3>
          <div className="mb-2">

            <div className="flex items-center">
              <input
                type="radio"
                id="tarjetaDebito"
                name="pago"
                value="tarjetaDebito"
                checked={selectedPaymentOption === "tarjetaDebito"}
                onChange={() => setSelectedPaymentOption("tarjetaDebito")}
                className="h-4 w-4 accent-sky-700 bg-grey-700 text-red-500 rounded cursor-pointer"
              />
              <label htmlFor="tarjetaDebito" className="ml-2 text-base text-black">
                Tarjeta débito
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="tarjetaCredito"
                name="pago"
                value="tarjetaCredito"
                checked={selectedPaymentOption === "tarjetaCredito"}
                onChange={() => setSelectedPaymentOption("tarjetaCredito")}
                className="h-4 w-4 accent-sky-700 bg-grey-700 text-red-500 rounded cursor-pointer"
              />
              <label htmlFor="tarjetaCredito" className="ml-2 text-base text-black">
                Tarjeta crédito
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="pse"
                name="pago"
                value="pse"
                checked={selectedPaymentOption === "pse"}
                onChange={() => setSelectedPaymentOption("pse")}
                className="h-4 w-4 accent-sky-700 bg-grey-700 text-red-500 rounded cursor-pointer"
              />
              <label htmlFor="pse" className="ml-2 text-base text-black">
                PSE
              </label>
            </div>
          </div>

          {errorMessage && (
            <div className="mt-4 rounded-md bg-red-100 p-2 text-red-600">{errorMessage}</div>
          )}
        </div>
        <div className="flex justify-center">
          {
            hola
              ?
              <button
                onClick={handleStartPayment}
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
                style={{ backgroundColor: "#2196F3" }}
                disabled
              >
                Iniciar Pago
              </button>

              :

              <button
                onClick={handleStartPayment}
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
                style={{ backgroundColor: "#2196F3" }}
              >
                Iniciar Pago
              </button>
          }


          <Modal paymentOption={selectedPaymentOption} payed={payed} isOpen={isModalOpen} onClose={closeModal} openModal2={openModal2} />
          <MessageDialog wasPayed={wasReservationPayed} isOpen={isModal2Open} onClose={closeModal2} eyHola={eyHola} />
        </div>
      </div>
    </div>
  );
}
