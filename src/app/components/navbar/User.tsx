"use client";

import React, { useState } from "react";
import Button from "../general/Button"
import Link from "next/link";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <div className="flex items-center space-x-4 hidden md:flex">
  
      <button
        onClick={openModal}
        className="text-white hover:text-gray-300 flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zm0 0c2 0 4 1 4 3v5H8v-5c0-2 2-3 4-3z"
          />
        </svg>
        <span>Hesap</span>
      </button>
        {isModalOpen && (
              <div
                id="modal-overlay"
                className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
                onClick={handleOutsideClick}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
                  <h3 className="text-black font-semibold text-center mb-4">
                    Hoş Geldiniz!
                  </h3>
                  <div className="justify-center align-center flex flex-row space-x-4">
                    <Link href="/login">
                      <Button
                        text="Giriş Yap"
                        onClick={closeModal}
                        small={false}
                        disabled={false}
                        outline={false}
                      />
                    </Link>

                    <Link href="/register">
                      <Button
                        text="Kayıt Ol"
                        onClick={closeModal}
                        small={false}
                        disabled={false}
                        outline={true}
                      />
                    </Link>
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}

      
    </div>
  );
};

export default User;
