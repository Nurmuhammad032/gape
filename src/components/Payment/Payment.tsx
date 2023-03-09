import "./Payment.scss";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
interface Props {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

const Payment = ({ close }: Props) => {
  const [increment, setIncrement] = useState(1);

  const inc = () => {
    setIncrement((prev) => prev + 1);
  };

  const dec = () => {
    if (increment) {
      setIncrement((prev) => prev - 1);
    }
  };

  return (
    <div className="payment">
      <div>
        <div className="payment__header">
          <p className="payment__title">Worem ipsum dolor sit </p>
          <p className="payment__close-icon" onClick={() => close(false)}>
            <GrClose />
          </p>
        </div>
        <div className="payment__wrapper">
          <div className="payment__inputs">
            <input type="text" placeholder="имя" />
            <input type="text" placeholder="имя" />
            <input type="text" placeholder="имя" />
            <input type="text" placeholder="имя" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input type="checkbox" placeholder="имя" />
              <span
                style={{
                  marginLeft: "1rem",
                  fontSize: "1.8rem",
                }}
              >
                jfldalfsafjkafdlfjsadkl kfjldsajfdsakl f
              </span>
            </div>
          </div>
          <div className="payment__right">
            <div className="payment__titles">
              <p>цена</p>
              <p>200.000 сум</p>
            </div>
            <div className="payment__titles">
              <p>цена</p>
              <div className="payment__incDec">
                <button onClick={dec}>-</button>
                <p>{increment}</p>
                <button onClick={inc}>+</button>
              </div>
            </div>

            <div>
              <input type="text" placeholder="fdsafdsa" />
              <input type="text" placeholder="fdsafdsa" />
              <input type="text" placeholder="fdsafdsa" />
            </div>
            <div className="payment__lastInput">
              <input type="text" placeholder=";fsdaf" />
              <input type="text" placeholder=";fsdaf" />
            </div>
            <div
              style={{
                textAlign: "center",
              }}
            >
              <button className="payment__submit-btn">оплатить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
