import './App.css';
import { useState } from "react";

function Header() {
  return <h2>Bu Sahifaning Yuqori Qismi</h2>;
}

function Content() {
  return <p>Bu Asosiy Kontent Bo‘limi</p>;
}

function Footer() {
  return <h3>Bu Sahifaning Pastki Qismi</h3>;
}

function Product({ name, price }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Bahosi: {price} so'm</p>
    </div>
  );
}

function Student({ name, age }) {
  return (
    <div style={{ margin: "5px", border: "1px solid gray", padding: "10px" }}>
      <h3>{name}</h3>
      <p>Yoshi: {age}</p>
    </div>
  );
}

function ToggleText() {
  const [text, setText] = useState("Salom, hush kelibsiz!");
  return (
    <div>
      <h2>{text}</h2>
      <button
        onClick={() =>
          setText(
            text === "Salom, hush kelibsiz!"
              ? "Yangilangan matn!"
              : "Salom, hush kelibsiz!"
          )
        }
      >
        Matnni Almashtir
      </button>
    </div>
  );
}

function LikeButton() {
  const [like, setLike] = useState(0);
  return <button onClick={() => setLike(like + 1)}>Yoqdi {like}</button>;
}

function Card({ img, title }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title} kartasi</h3>
    </div>
  );
}

// ⭐ Asosiy App komponentini qo‘shdik
function App() {
  return (
    <div>
      <Header />
      <Content />
      <ToggleText />
      <LikeButton />
      <Student name="Ali" age={20} />
      <Product name="Telefon" price={2500000} />
      <Card img="https://th.bing.com/th/id/OIP.Lids0tpdUgie40m-f-4Z7QHaEp?w=310&h=195&c=7&r=0&o=7&pid=1.7&rm=3" title="Sinov" />
      <Footer />
    </div>
  );
}

export default App;
