import React from "react";
import Carousal from "../components/Carousal";
import ShowModal from "./ShowModal";
import { useState } from "react";
import Swal from 'sweetalert2';
import axios from 'axios'


function Field() {

  const [name, setName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [BankName, setBankName] = useState("");
  const [amount, setAmount] = useState("");

  const [showModal, setShowModal] = useState(false);

  async function UserPost()
  {
    
        console.log(name,accountNo,BankName,amount)
        const userDetails = {
            "name" : name,
            "accountNo" : accountNo,
            "BankName" : BankName,
            "amount" : amount
        }
  
  await axios.post("https://bank123456-backend.herokuapp.com/addingTransactions", userDetails).then(()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: ' Yes '
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          {
            title: `<strong>Money sent</strong>`,
            icon: "success",
            showCloseButton: true,
          }
        );
        setShowModal(false)
      }
    })
  });
}

  function CancelTransaction()
  {
    Swal.fire({
      title: `<strong>Transaction cancelled</strong>`,
      icon: "error",
      showCloseButton: true,
    });
  }

  return (
    <div>
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex px-6 py-24 md:flex-row flex-row items-center">
          <div class="lg:max">
            <Carousal />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Welcome to
              <br class="hidden lg:inline-block" />
              The Sparks Foundation Bank
            </h1>
            <p class="mb-8 leading-relaxed">
              A good bank tagline is clear, memorable, and represents the bank’s
              brand in the most accurate way. For a good bank tagline, you must
              make it short and snappy, since that’s what people remember best.
              Try to incorporate your bank’s name and primary service in a
              memorable wa.
            </p>
            <div class="flex justify-center">
              <button
                onClick={() => setShowModal(true)}
                class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
              >
                Add transactions
              </button>

              {showModal ? (
                <>
                  <div
                    className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none"
                    style={{ marginTop: "10px;" }}
                  >
                    <div
                      className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
                      id="modal"
                    >
                      <div
                        role="alert"
                        className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
                      >
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                          <div className="w-full flex justify-start text-gray-600 mb-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-wallet"
                              width={52}
                              height={52}
                              viewBox="0 0 24 24"
                              strokeWidth={1}
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                            </svg>
                          </div>
                          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                            Enter Transaction Details
                          </h1>
                          <label
                            htmlFor="name"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            value = {name}
                            required='true'
                            onChange={(e)=>setName(e.target.value)}
                            className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                            placeholder="James"
                          />
                          <label
                            htmlFor="email2"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                          >
                            Account Number
                          </label>
                          <div className="relative mb-5 mt-2">
                            <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-credit-card"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect
                                  x={3}
                                  y={5}
                                  width={18}
                                  height={14}
                                  rx={3}
                                />
                                <line x1={3} y1={10} x2={21} y2={10} />
                                <line x1={7} y1={15} x2="7.01" y2={15} />
                                <line x1={11} y1={15} x2={13} y2={15} />
                              </svg>
                            </div>
                            <input
                              id="email2"
                              type="number"
                              value = {accountNo}
                              onChange={(e)=>setAccountNo(e.target.value)}
                              required='true'
                              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                              placeholder="XXXX - XXXX - XXXX - XXXX"
                            />
                          </div>
                          <label
                            htmlFor="expiry"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                          >
                            Bank Name
                          </label>
                          <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                          
                            </div>
                            <input
                              id="expiry"
                              type='text'
                              value = {BankName}
                              required='true'
                              onChange={(e)=>setBankName(e.target.value)}

                              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                              placeholder=""
                            />
                          </div>
                          <label
                            htmlFor="cvc"
                            className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                          >
                            Amount(Rs.)
                          </label>
                          <div className="relative mb-5 mt-2">
                            <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-info-circle"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={12} cy={12} r={9} />
                                <line x1={12} y1={8} x2="12.01" y2={8} />
                                <polyline points="11 12 12 12 12 16 13 16" />
                              </svg>
                            </div>
                            <input
                              id="cvc"
                              value = {amount}
                              onChange={(e)=>setAmount(e.target.value)}
                              type="number" required="true"
                              className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                              placeholder=""
                            />
                          </div>
                          <div className="flex items-center justify-start w-full">
                            <button onClick={()=>{UserPost()}} className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                              Submit
                            </button>
                            <button
                              className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                              onClick={() => {CancelTransaction();  setShowModal(false)}}
                            >
                              Cancel Transaction
                            </button>
                          </div>
                          <div
                            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                            onClick={() => setShowModal(false)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-label="Close"
                              className="icon icon-tabler icon-tabler-x"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="2.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <line x1={18} y1={6} x2={6} y2={18} />
                              <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full flex justify-center py-12"
                      id="button"
                    >
                    </div>
                  </div>
                </>
              ) : null}

              <button style = {{cursor:"pointer"}} onClick={()=>window.location.href="/Alltransactions"} class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                View transactions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Field
