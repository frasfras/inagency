import React, { useEffect, useState } from "react";
import { Star, Clock, Check, MessageSquare } from "lucide-react";

const PayPalButton = ({ amount }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=PHP`;
    script.async = true;
    script.onload = () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Transaction completed by " + details.payer.name.given_name);
              // Here you can handle the successful payment, e.g., updating your backend
            });
          },
        })
        .render("#paypal-button-container");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [amount]);

  return <div id="paypal-button-container"></div>;
};

const DirectPayPalButton = ({ email, amount, itemName }) => {
  const paypalHref = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=${encodeURIComponent(email)}&currency_code=PHP&amount=${amount}&item_name=${encodeURIComponent(itemName)}`;

  return (
    <a href={paypalHref} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-[#0070ba] text-white py-2 rounded-md mb-2 hover:bg-[#003087] transition-colors">
      Pay with PayPal
    </a>
  );
};

const GPTReactAppOffer = () => {
  const [paymentOption, setPaymentOption] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      <div className="flex-1">
        {/* <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#404145">
            <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
          </g>
          <g fill="#1dbf73">
            <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
          </g>
        </svg> */}
        <h1 className="text-3xl font-bold mb-4">Our agency will develop chatgpt or gpt based, ai saas, ai app, ai website, ai chatbot in React</h1>
        <div className="flex items-center gap-2 mb-4">
          <img src="/api/placeholder/32/32" alt="Nestedpie logo" className="rounded-full" />
          <span className="font-semibold">Trident</span>
          <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded">Top Rated</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1">5.0 (3)</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Among our clients:</span>
          <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/e31393865c2a5055edce9554944cb819-1649314948845/think3dots.png" alt="Client logo" className="inline-block ml-2" />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4">GPT Based React App Development</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Startup App</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Business App</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>App release on web</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-80">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">Basic</h3>
          <div className="text-3xl font-bold mb-4">₱17,472</div>
          <p className="mb-4">design and development of an AI-powered chat app with GPT API</p>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4" />
            <span>14-day delivery</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Unlimited Revisions</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Functional app</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>AI model integration</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Application/Website Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Source code</span>
            </div>
          </div>
          {paymentOption === "smart" && <PayPalButton amount="17472" />}
          {paymentOption === "direct" && <DirectPayPalButton email="kikfree00@gmail.com" amount="17472" itemName="GPT Based React App Development" />}
          {!paymentOption && (
            <>
              {/* <button className="w-full bg-black text-white py-2 rounded-md mb-2" onClick={() => setPaymentOption("smart")}>
                Pay with PayPal (Smart Button)
              </button> */}
              <button className="w-full bg-[#0070ba] text-white py-2 rounded-md mb-2" onClick={() => setPaymentOption("direct")}>
                Pay with PayPal (Direct)
              </button>
            </>
          )}
          <button className="w-full border border-gray-300 py-2 rounded-md mb-2">Compare packages</button>
          <button className="w-full border border-gray-300 py-2 rounded-md mb-4">Contact us</button>
          <div className="text-center text-sm">
            <Clock className="inline-block w-4 h-4 mr-1" />
            Offers hourly rates
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPTReactAppOffer;
