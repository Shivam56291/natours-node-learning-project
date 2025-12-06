import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51SbBIwEXYPoz40PtUGLiMILAuyK2SX7qGpr7NsAqthLsZ8ciU3f8DSuTonOBX8n6XbQnVdTXQr6Oi8BOnYANnP2P00FBU8wsnC'
);

export const bookTour = async (tourId) => {
  // 1) Get the tour from the URL
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }

  // 2) Create checkout form + change payment method to card
};
