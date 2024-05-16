const dummyData = [
    {
        id: 1,
        title: "Beautiful House in the Suburbs",
        address: "123 Main St, Suburbia",
        type: "house",
        bedroom: 3,
        bathroom: 2,
        parking: 2,
        price: 250000,
        listingImages: [
            { url: "https://example.com/image1.jpg", listing_id: 1 },
            { url: "https://example.com/image2.jpg", listing_id: 1 },
            { url: "https://example.com/image3.jpg", listing_id: 1 }
        ]
    },
    {
        id: 2,
        title: "Cozy Apartment in the City",
        address: "456 Elm St, Cityville",
        type: "apartment",
        bedroom: 2,
        bathroom: 1,
        parking: 1,
        price: 150000,
        listingImages: [
            { url: "https://example.com/image4.jpg", listing_id: 2 },
            { url: "https://example.com/image5.jpg", listing_id: 2 }
        ]
    },
    // Add more dummy listings as needed
];

export default dummyData;
