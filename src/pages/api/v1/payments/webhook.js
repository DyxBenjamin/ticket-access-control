import getRawBody from "raw-body";
import {getStripeInstance} from "@api/v1/payments/checkout-sessions";

export const config = { api: { bodyParser: false } };

export default async function handler (req, res) {
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const webhookStripeSignatureHeader = String( req.headers["stripe-signature"] );
    const webhookRawBody = await getRawBody(req);
    const stripe = getStripeInstance();

    let event;

    // console.log('%c << 📌 webhookRawBody >>', 'color: white; font-size: 12px');
    // console.log(webhookRawBody);
    //
    // console.log('%c << 📌 webhookStripeSignatureHeader >>', 'color: white; font-size: 12px');
    // console.log(webhookStripeSignatureHeader);
    //
    // console.log('%c << 📌 webhookSecret >>', 'color: white; font-size: 12px');
    // console.log(webhookSecret);

    try {
        event = stripe.webhooks.constructEvent(webhookRawBody, webhookStripeSignatureHeader, webhookSecret);
    } catch (error) {
        console.log(error);
        return res.status(400).send(`Webhook error: ${error.message}`);
    }

    console.log({ event });

    res.send({ received: true });
};
