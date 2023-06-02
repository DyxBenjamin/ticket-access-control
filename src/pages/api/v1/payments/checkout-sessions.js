import Stripe from 'stripe';



export function getStripeInstance() {
    return new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15'});
}


export default async function handler(req, res) {
    const stripe = getStripeInstance();

    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: 'price_1N8TmNKrIfQBoZAFQvrU1C2V',
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/app/shop?success=true`,
            cancel_url: `${req.headers.origin}/app/shop?canceled=true`,
        });
        res.redirect(303, session.url);
    }
    catch (error) {
        res.status(error.statusCode || 500).json(error.message);
    }
}
