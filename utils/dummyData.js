const dummyData = [
    {
        id: 'demo-sell-1',
        address: '123 Main St, Houston, TX',
        type: 'Sell',
        propertyType: 'Single Family House',
        bedroom: 4,
        bathroom: 3,
        parking: 2,
        area: 2450,
        price: 425000,
        active: true,
        coordinates: { lat: 29.7604, lng: -95.3698 },
        description: 'Updated family home with a bright kitchen and generous backyard.',
        listingImages: [
            { url: '/placeholder.svg', listing_id: 'demo-sell-1' }
        ],
        isDummy: true
    },
    {
        id: 'demo-sell-2',
        address: '782 Greenbriar Ln, Katy, TX',
        type: 'Sell',
        propertyType: 'Town House',
        bedroom: 3,
        bathroom: 2,
        parking: 2,
        area: 1840,
        price: 318000,
        active: true,
        coordinates: { lat: 29.7858, lng: -95.8245 },
        description: 'Low-maintenance townhome close to shopping and commuter routes.',
        listingImages: [
            { url: '/placeholder.svg', listing_id: 'demo-sell-2' }
        ],
        isDummy: true
    },
    {
        id: 'demo-rent-1',
        address: '456 Elm St, Midtown Houston, TX',
        type: 'Rent',
        propertyType: 'Condo',
        bedroom: 2,
        bathroom: 2,
        parking: 1,
        area: 1180,
        price: 2350,
        active: true,
        coordinates: { lat: 29.7415, lng: -95.3761 },
        description: 'Modern condo with skyline views and easy access to downtown.',
        listingImages: [
            { url: '/placeholder.svg', listing_id: 'demo-rent-1' }
        ],
        isDummy: true
    },
    {
        id: 'demo-rent-2',
        address: '980 Westview Dr, Sugar Land, TX',
        type: 'Rent',
        propertyType: 'Single Family House',
        bedroom: 3,
        bathroom: 2,
        parking: 2,
        area: 1725,
        price: 2895,
        active: true,
        coordinates: { lat: 29.6197, lng: -95.6349 },
        description: 'Spacious rental with a fenced yard in a quiet neighborhood.',
        listingImages: [
            { url: '/placeholder.svg', listing_id: 'demo-rent-2' }
        ],
        isDummy: true
    }
];

export default dummyData;
