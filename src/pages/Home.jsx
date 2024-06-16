import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '../components/Container';
import { Form } from '../components/Form';

export const Home = () => {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecial, setIncludeSpecial] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const [newPasswordName, setNewPasswordName] = useState('');

  useEffect(() => {
    const savedPasswords = JSON.parse(localStorage.getItem('passwords'));
    if (savedPasswords) {
      setPasswords(savedPasswords);
    }
  }, []);

  const generatePassword = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '@#$%&*?';

    let allCharacters = characters;
    if (includeNumbers) allCharacters += numbers;
    if (includeSpecial) allCharacters += specialCharacters;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters[randomIndex];
    }

    return password;
  };

  const savePassword = () => {
    const password = generatePassword();
    const passwordEntry = { id: uuidv4(), name: newPasswordName, password };

    const updatedPasswords = [...passwords, passwordEntry];
    setPasswords(updatedPasswords);
    localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
    setNewPasswordName('');
  };

  return (
    <Container>
      <h1 className="text-yellow-500 text-3xl font-bold text-center mb-7">Generador de Contraseñas</h1>
      
      <Form
        length={length}
        setLength={setLength}
        includeNumbers={includeNumbers}
        setIncludeNumbers={setIncludeNumbers}
        includeSpecial={includeSpecial}
        setIncludeSpecial={setIncludeSpecial}
        newPasswordName={newPasswordName}
        setNewPasswordName={setNewPasswordName}
        savePassword={savePassword}
      />

      <div className="flex justify-center">
        <Link to="/passwords" className="block-inline bg-white font-semibold text-center mt-4 p-3 rounded-lg text-black hover:text-blue-600 hover:bg-gray-800">
          Ver todas las contraseñas
        </Link>
      </div>
    </Container>
  );
};