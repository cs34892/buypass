function buypass() {
  if (!window.PaymentRequest) return alert("Payment Request APIに未対応なため使えません");

  new PaymentRequest(
    [
      {
        supportedMethods: "cs34892.github.io/buypass/payment-manifest.json",
        data: {
          url: document.querySelector("input").value
        },
      },
    ],
    {
      total: {
        label: "_",
        amount: {
          value: "1", currency: "USD"
        },
      },
    }
  ).show();
}

document.querySelector("button").onclick = buypass;
