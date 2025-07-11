import headlogo from "../assets/headimg.png";

export default function Header() {
  return (
    <header className="head">
      <img className="head__logo" src={headlogo} alt="Chef AI Logo" />
      <span className="head_title">Chef Claude</span>
    </header>
  );
}
