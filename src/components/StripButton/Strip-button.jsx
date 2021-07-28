import StripeCheckout from "react-stripe-checkout";

const StripButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey =
    "pk_test_51JIHEIB2dgAvXNQgVECHFybGNR1245sQ4owGWbUNhtIXVQO8OOMJpU1t1azmjWatNb1mPzOs62yIeXXmII5JxY3y00wJJnZJIj";

  const onToken = (token) => {
    console.log(3333, token);
    alert("payment successful.");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN clothing Ltd"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      stripeKey={publicKey}
      token={onToken}
    />
  );
};

export default StripButton;
