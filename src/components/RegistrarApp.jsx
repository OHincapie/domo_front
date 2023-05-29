import { useState } from "react";

export const RegistrarApp = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor
  
      // Luego, puedes restablecer los campos del formulario
      setNombre('');
      setEmail('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    )
}
