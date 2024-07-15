import React from "react";

function Footer({ isOpen, startHour, endHour }) {
  return isOpen ? (
    <footer>
      <p>Come visit us or order online.</p>
      <button className="order-btn">Order</button>
    </footer>
  ) : (
    <footer>
      <p>{`Sorry, We're closed now. You can visit us from ${startHour}:00 to ${endHour}:00.`}</p>
    </footer>
  );
}

export default Footer;
