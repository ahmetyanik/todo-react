import React from "react";
import "../style/footer.scss";

function Footer() {
  return (
    <div style = {{position:"fixed", bottom:"0", width:"100vw"}}>
      <footer className="mainfooter d-flex justify-content-center align-items-center p-3" role="contentinfo">
        TODO LIST APPLICATION
      </footer>
    </div>
  );
}

export default Footer;
