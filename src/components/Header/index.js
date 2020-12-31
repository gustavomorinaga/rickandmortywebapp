import logo from '../../assets/images/logo.png';

import './index.css';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="Logotipo da Série" />
    </header>
  );
}

export default Header;
