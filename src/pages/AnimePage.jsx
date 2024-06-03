import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Modal from "./Modal";

const AnimePage = () => {
  const navigate = useNavigate();

  const goToCharacter = () => {
    navigate("/character");
  };

  /*
Replace "YOUR_ACCESS_TOKEN" with the token you got from the Kohai Bot and the endpoint.
*/
  const [isOpen, setIsOpen] = useState(false);
  const [quote, setQuote] = useState("");

  const parameter = "anime";

  function value() {
    let name = document.getElementById("anime");
    let nameValue = name.value;
    return nameValue;
  }

  function animeName() {
    let name = value();
    return name;
  }

  const api = async () => {
    let name = animeName();
    const url = `https://waifu.it/api/v4/quote?${parameter}=${name}`;
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization:
            "MTEwMDE0MTc1ODY1NjAzMjk3OQ--.MTcxNTY4NTI3Mw--.c086c921ff53",
        },
      });
      setIsOpen(true);
      console.log(data.quote);
      console.log(data);
      let quote = data.quote;
      setQuote(quote);
    } catch (err) {
      alert("Please try a new entry");
      throw new Error(err.message);
    }
  };

  return (
    <>
      <div className="anime-body body">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div id="quote">{quote}</div>
        </Modal>
        <div className="flex-container">
          <div className="choice-btn-container">
            <button className="choice-btn btn-1">Anime</button>
            <button
              className="choice-btn  btn-2"
              onClick={() => goToCharacter()}
            >
              Character
            </button>
          </div>
          <h1 htmlFor="anime">Enter the name of an anime to get a quote!</h1>
          <div className="input-box">
            <input
              className="input-box"
              type="text"
              id="anime"
              placeholder="Anime"
            />
          </div>
          <button className="btn" id="anime-btn" onClick={api}>
            Generate
          </button>
        </div>
      </div>
    </>
  );
};

export default AnimePage;
