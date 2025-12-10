import logoWhite from "../assets/logo-white.png";
import mobileLogoWhite from "../assets/mobile-logo-white.png";
import searchIcon from "../assets/icons/search-icon.png";
import cartIcon from "../assets/icons/cart-icon.png";
import "./header.css";
import { NavLink } from "react-router";

export const Header = ({ cartItems }) => {
  return (
    <div className="header">
      <div className="left-section">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header-link active" : "header-link"
          }
          end
        >
          <img className="logo" src={logoWhite} />
          <img className="mobile-logo" src={mobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "orders-link header-link active"
              : "orders-link header-link"
          }
          to="/orders"
        >
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "cart-link header-link active" : "cart-link header-link"
          }
          to="/checkout"
        >
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{cartItems?.length || 0}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
};
