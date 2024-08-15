import { useState } from "react";
import "./App.css";

function App() {
  const [mail, setMail] = useState("");

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const Submit = () => {
    let ObligatoryText = '@gmail.com';
      if (mail.includes(ObligatoryText)) {
        console.log(mail);
      } else {
        console.log("Email no existente, asegurese de que sea un email");
      }
  };

  return (
    <>
      <form>
        <h2>Email</h2>
        <input type="text" value={mail} onChange={handleChangeMail}></input>
      </form>
      <button type="submit" onClick={Submit}>
        Enviar
      </button>
    </>
  );
}

export default App;
