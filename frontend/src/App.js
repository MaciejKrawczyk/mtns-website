import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import MainHero from "./components/MainHero";

function App() {

    const [message, setMessage] = useState('')

    let showMessage = async () => {
        let response = await fetch('http://localhost:8000/')
        let data = await response.json()
        setMessage(data.message)
        console.log(data.message)
    }

    return (
    <div>
        <Header />
        <MainHero />


    </div>
  );
}

export default App;
