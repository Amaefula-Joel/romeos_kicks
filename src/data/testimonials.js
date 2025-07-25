const images = import.meta.glob('../assets/testimonials/*.jpg', {
    eager: true,
    import: 'default',
});

export const testimonials = [
    {
        name: "Afeez Adeosun Samuel",
        title: "Happy Customer",
        message: "The ordering process was smooth and straightforward. I appreciated the detailed product descriptions and the high-quality photos, which gave me a clear idea of what I was buying. The customer service was also excellent; I had a question about sizing, and they responded promptly and helpfully.",
        image: images['../assets/testimonials/afeez.jpg'],
    },
    {
        name: "Daniel Okolo",
        title: "Verified Buyer",
        message: "Affordable kick, quick delivery, 10/10 customer care. I was impressed with the quality of the shoes I received. They were exactly as described, and the fit was perfect. The materials used are durable, and you can tell they put a lot of thought into the design. I’ve already received several compliments on them!",
        image: images['../assets/testimonials/daniel.jpg'],
    },
    {
        name: "Philemon Usitaka",
        title: "Loyal Customer",
        message: "I got what I ordered – it’s really nice. Super fresh, well packaged, and just what I was hoping for. Thanks a lot! I’ll definitely be buying again.",
        image: images['../assets/testimonials/philemon.jpg'],
    },
];
