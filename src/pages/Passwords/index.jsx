import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from "@/components/icons/TrashIcon"
import { Container } from '@/components/Container.jsx';
import { PasswordsContainer } from '@/components/PasswordsContainer.jsx';

export const Passwords = () => {
  const [text, setText] = useState("");
  const textRef = useRef([]);
  const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];

  const deletedPasswords = () => {
    localStorage.removeItem('passwords');
    window.location.reload();
  };

  const deletedPassword = (id) => {
    const updatedPasswords = savedPasswords.filter((password) => password.id !== id);
    localStorage.setItem('passwords', JSON.stringify(updatedPasswords));

    window.location.reload();
  }

  const handleCopy = (index) => {
    const textToCopy = textRef.current[index].innerText;
    setText(textToCopy);

    setInterval(() => setText(""), 3000);

    navigator.clipboard.writeText(textToCopy)
  };

  return (
    <Container>
      <div className="bg-white rounded-lg px-11 py-7">
        <h1 className="text-yellow-500 text-3xl font-bold text-center mb-7">
          Contraseñas guardadas.
        </h1>

        {text && <p className="absolute bottom-11 right-4 text-yellow-500 font-bold  sm:right-28">Copiado</p>}

        <PasswordsContainer
          textRef={textRef}
          passwords={savedPasswords}
          deletedPassword={deletedPassword}
          handleCopy={handleCopy}
        />

        {savedPasswords.length > 0 && (
          <div className="flex justify-center">
            <button
              className="text-white font-semibold rounded-md p-2 mt-2 block w-max text-center transition-all duration-300 ease-in-out hover:scale-105"
              onClick={deletedPasswords}
              title="Eliminar todas las contraseñas"
            >
              <TrashIcon className="w-11 h-11 text-transparent" color="red" />
            </button>
          </div>
        )}
        
        <div className="flex justify-center">
          <Link
            className="text-black font-semibold bg-gray-400 rounded-md p-2 mt-2 block w-max text-center hover:bg-gray-400 hover:text-white transition duration-300 ease-in-out"
            to="/"
          >
            Generar contraseña
          </Link>
        </div>
      </div>
    </Container>
  )
}
