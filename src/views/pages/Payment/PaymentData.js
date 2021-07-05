import BankCard from "../../../Images/Payment/bankcard.svg";
import union from "../../../Images/Payment/union.svg";
import master from "../../../Images/Payment/master.svg";
import Visa from "../../../Images/Payment/Visa.svg";
import Jcb from "../../../Images/Payment/Jcb.svg";
import easypaisa from "../../../Images/Payment/easypaisa.svg";
import Jazzcash from "../../../Images/Payment/Jazzcash.svg";

export const PaymentData = [
  {
    id: 1,
    BankCard: BankCard,
    title: "Pay with Credit/Debit Card",
    union: union,
    master: master,
    Visa: Visa,
    Jcb: Jcb,
    clickData: {
      img: BankCard,
      desc: "Please enter your Credit/Debit card details to make payment",
      namePlacehoder: "Name on Card",
      Card_Number: "Card Number",
      Cvv: "CVV",
      expiry: "Expiry Date",
    },
  },
  {
    id: 2,
    BankCard: Jazzcash,
    title: "Pay with JazzCash",
    clickData: {
      img: Jazzcash,
      desc: "Please enter your JazzCash account details to make payment",
      namePlacehoder: "Mobile Account Number",
      Card_Number: "Last 6 Digits of CNIC",
    },
  },
  {
    id: 3,
    BankCard: easypaisa,
    title: "Pay with easy paisa",
    clickData: {
      img: easypaisa,
      desc: "Please enter your Easypaisa account details to make payment",
      namePlacehoder: "Mobile Account Number",
    },
  },
];
