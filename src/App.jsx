import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Checkout from "./Checkout";

const initialOptions = {
    "client-id": "YOUR-CLIENT-ID-HERE",
    currency: "EUR",
    intent: "capture",
  };

  const App = () => {

    return (
  <PayPalScriptProvider options={initialOptions}>
        <Checkout/>
</PayPalScriptProvider>
    );
  }
export default App