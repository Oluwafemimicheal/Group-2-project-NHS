import PaymentHeading from "../components/payment/PaymentHeading"
import PaymentList from "../components/payment/PaymentList"

const Payments = () => {
  return (
    <div className="space-y-10">
      <PaymentHeading />
      <PaymentList />
    </div>
  )
}

export default Payments
