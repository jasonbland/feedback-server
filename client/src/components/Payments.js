import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return <StripeCheckout />;
  }
}

export default Payments;
