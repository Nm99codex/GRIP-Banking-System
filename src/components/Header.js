import React from "react";
import logo from '../assets/logo.png';

function Header() {
  return (
    <div>
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src = {logo} style={({ height: "auto" }, { width: "15%" })}/>
            <span class="ml-3 text-xl">TSP BANK</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-white">Home</a>
            <a class="mr-5 hover:text-white">About Us</a>
            <a class="mr-5 hover:text-white">E-services</a>
            <a class="mr-5 hover:text-white">Locate Card</a>
            <a class="mr-5 hover:text-white">Investor Info</a>
            <a class="mr-5 hover:text-white">Loans</a>


          </nav>
          <button class="inline-flex items-center bg-gray-500 border-2 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-white mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
