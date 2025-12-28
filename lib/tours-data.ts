export interface TourItinerary {
    day: string;
    title: string;
    desc: string;
}

export interface Tour {
    id: string;
    title: string;
    duration: string;
    category: string;
    image: string;
    description: string;
    inclusions: string[];
    itinerary: TourItinerary[];
}

export const toursData: Tour[] = [
    // ==========================================
    // MULTI-DAY TOURS (4+ DAYS)
    // ==========================================

    // 1. Classic Island Loop (6 Days)
    {
        id: "classic-island-loop",
        title: "Classic Island Loop: Kandy to Coast",
        duration: "6 Days / 5 Nights",
        category: "Heritage",
        image: "/tours/tour-card-tea.jpg",
        description: "The ultimate introductory tour covering the Elephant Orphanage, Temple of the Tooth, Tea Country, Yala Wildlife, and golden beaches.",
        inclusions: [
            "Private A/C vehicle with English-speaking chauffeur-guide",
            "Licensed national guide throughout",
            "3-star hotels (upgradeable to 4★/5★)",
            "Breakfast, lunch, and dinner (local & international cuisine)",
            "All Entrance Fees: Cultural sites, safari, train, and activities",
            "Bottled water daily, taxes included"
        ],
        itinerary: [
            { day: "Day 1", title: "Colombo → Pinnawala → Kandy", desc: "Pick-up from Colombo. Visit Pinnawala Elephant Orphanage. Drive to Kandy. Visit Kandy Lake & View Point. Evening Kandyan Cultural Show. Overnight in Kandy." },
            { day: "Day 2", title: "Kandy → Ramboda Falls → Nuwara Eliya", desc: "Visit Temple of the Tooth Relic. Scenic drive via Ramboda Falls. Tea factory visit + tasting. Explore Gregory Lake & Victoria Park. Overnight in Nuwara Eliya." },
            { day: "Day 3", title: "Nuwara Eliya → Scenic Train Ride → Ella", desc: "Depart to Nanu Oya station. Scenic train ride to Ella (2nd class reserved). Visit Nine Arches Bridge. Short hike to Little Adam’s Peak. Overnight in Ella." },
            { day: "Day 4", title: "Ella → Yala National Park", desc: "En route sightseeing. Check-in near Yala. Evening Jeep Safari at Yala National Park to spot leopards. Overnight near Yala." },
            { day: "Day 5", title: "Yala → Galle Fort → Bentota", desc: "Explore Galle Dutch Fort (Lighthouse, old city walls). Visit Unawatuna or Jungle Beach. Arrive in Bentota. Overnight in Bentota." },
            { day: "Day 6", title: "Bentota → Madu River → Colombo", desc: "Boat safari at Madu River (Cinnamon Island). Visit Kosgoda Turtle Hatchery. Scenic drive back to Colombo. Drop-off." }
        ]
    },

    // 2. Heritage, Nature & Hills (6 Days)
    {
        id: "heritage-nature-hills",
        title: "Heritage, Nature & Hills",
        duration: "6 Days / 5 Nights",
        category: "Heritage",
        image: "/tours/tour-card-heritage.jpg",
        description: "A deep dive into the Cultural Triangle, ancient capitals, and the misty hills of Nuwara Eliya.",
        inclusions: [
            "A/C Transport with English-speaking chauffeur-guide",
            "3-star Hotels (upgradeable)",
            "All Meals: Breakfast, lunch & dinner",
            "Licensed Tour Guide",
            "Entrance Fees: All heritage sites, safari, train tickets",
            "Bottled water, taxes & service charges"
        ],
        itinerary: [
            { day: "Day 1", title: "Colombo → Sigiriya Rock Fortress", desc: "Pick-up. Break at Kurunegala. Climb Sigiriya Rock Fortress (UNESCO). Sunset & return to hotel. Overnight in Sigiriya." },
            { day: "Day 2", title: "Polonnaruwa Ruins + Minneriya Safari", desc: "Explore Polonnaruwa Ancient City. Lunch by Parakrama Samudraya. Minneriya/Kaudulla Safari (Elephant Gathering). Overnight in Sigiriya." },
            { day: "Day 3", title: "Dambulla → Kandy City Tour", desc: "Visit Dambulla Cave Temple. Spice Garden visit. Kandy View Point & Lake Walk. Temple of the Tooth Relic. Cultural Dance Show. Overnight in Kandy." },
            { day: "Day 4", title: "Kandy → Tea Region → Nuwara Eliya", desc: "Royal Botanical Gardens (Peradeniya). Tea Factory Tour (tasting + plucking). Visit Ramboda Waterfall. Overnight in Nuwara Eliya." },
            { day: "Day 5", title: "Nuwara Eliya → Ella", desc: "Scenic Train to Ella. Visit Nine Arches Bridge. Optional Little Adam’s Peak hike. Relax at café. Overnight in Ella." },
            { day: "Day 6", title: "Ella → Colombo", desc: "Optional stop at Diyaluma Falls or Ravana Falls. Lunch in Bandarawela/Hatton. Return to Colombo/Airport." }
        ]
    },

    // 3. Southern Explorer (6 Days)
    {
        id: "southern-explorer",
        title: "Southern Explorer: Coastal Beauty",
        duration: "6 Days / 5 Nights",
        category: "Beach",
        image: "/tours/tour-card-wildlife.jpg",
        description: "From the colonial charm of Galle to the wild leopards of Yala and the peaks of Ella.",
        inclusions: [
            "A/C Private Transport with English-speaking chauffeur-guide",
            "Comfortable 3★ Hotels (Upgrade available)",
            "Daily Breakfast, Lunch & Dinner",
            "English-speaking licensed guide",
            "All entrance & activity fees",
            "Bottled water, taxes"
        ],
        itinerary: [
            { day: "Day 1", title: "Colombo → Galle Fort → Unawatuna Beach", desc: "Visit Galle Fort (UNESCO). Lunch at oceanside café. Unawatuna Beach leisure. Overnight in Unawatuna/Galle." },
            { day: "Day 2", title: "Mirissa Whale Watching → Transfer to Yala", desc: "Morning Whale Watching cruise (Season: Nov–Apr). Scenic drive to Yala. Check-in at safari lodge. Overnight near Yala." },
            { day: "Day 3", title: "Yala Safari → Ella Hill Country", desc: "Morning Jeep Safari in Yala National Park. Depart for Ella. Visit Nine Arches Bridge at sunset. Overnight in Ella." },
            { day: "Day 4", title: "Ella Sightseeing + Train to Nuwara Eliya", desc: "Sunrise hike to Little Adam’s Peak. Visit Ravana Falls. Scenic train ride to Nanu Oya. Relax at Gregory Lake. Overnight in Nuwara Eliya." },
            { day: "Day 5", title: "Tea Country Exploration", desc: "Tea Factory Tour & Plantation Walk. Visit Victoria Park & Local Market. Overnight in Nuwara Eliya." },
            { day: "Day 6", title: "Return to Colombo via Kitulgala", desc: "Stop at Kitulgala (Optional White Water Rafting). Lunch at riverside eco-lodge. Drop off at Airport/Hotel." }
        ]
    },

    // 4. Wildlife, History & Culture (6 Days)
    {
        id: "wildlife-history-culture",
        title: "Wildlife, History & Culture (North-West Loop)",
        duration: "6 Days / 5 Nights",
        category: "Wildlife",
        image: "/tours/tour-card-heritage.jpg",
        description: "Dolphins, leopards, and ancient capitals. A unique route through Kalpitiya and Wilpattu.",
        inclusions: [
            "Private A/C Transport",
            "3★ Hotels (Upgradable)",
            "Daily Breakfast, Lunch & Dinner",
            "English-speaking National Guide",
            "All Entrance & Safari Tickets Included",
            "Bottled water, taxes"
        ],
        itinerary: [
            { day: "Day 1", title: "Colombo → Kalpitiya Dolphin Watching", desc: "Dolphin Watching Boat Tour (Nov–Apr). Leisure time on beach or lagoon-side cycling. Overnight in Kalpitiya." },
            { day: "Day 2", title: "Lagoon Safari → Wilpattu National Park", desc: "Kalpitiya Lagoon Safari. Evening Jeep Safari at Wilpattu National Park (Leopards). Overnight near Wilpattu." },
            { day: "Day 3", title: "Anuradhapura Sacred City → Sigiriya", desc: "Tour Anuradhapura Ancient City (Bodhi Tree, Stupas). Drive to Sigiriya. Overnight in Sigiriya." },
            { day: "Day 4", title: "Sigiriya → Dambulla → Kandy", desc: "Climb Sigiriya Rock Fortress. Visit Dambulla Cave Temple. Visit Temple of the Tooth in Kandy. Cultural Show. Overnight in Kandy." },
            { day: "Day 5", title: "Peradeniya Garden + Spice Garden Tour", desc: "Royal Botanical Gardens. Spice Garden (herbal demo). Leisure shopping in Kandy. Overnight in Kandy." },
            { day: "Day 6", title: "Kandy → Colombo", desc: "Scenic drive to Colombo. Optional City tour. Drop-off." }
        ]
    },

    // 5. Complete Heritage & Nature (7 Days)
    {
        id: "complete-heritage-nature",
        title: "Complete Heritage & Nature Tour",
        duration: "7 Days / 6 Nights",
        category: "Heritage",
        image: "/tours/tour-card-hiking.jpg",
        description: "An extensive journey through Anuradhapura, Wilpattu, Sigiriya, Kandy, Horton Plains, and Udawalawe.",
        inclusions: ["A/C transport", "3-star hotels", "All meals", "Entrance fees", "Safaris", "Guides", "Bottled water"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Anuradhapura", desc: "Explore Anuradhapura Sacred City. Evening stroll near Tissa Wewa. Overnight in Anuradhapura." },
            { day: "Day 2", title: "Mihintale → Wilpattu Safari", desc: "Visit Mihintale Sacred Site. Afternoon Jeep Safari in Wilpattu. Overnight near Wilpattu." },
            { day: "Day 3", title: "Dambulla → Sigiriya → Kandy", desc: "Visit Dambulla Cave Temple. Climb Sigiriya Rock Fortress. Travel to Kandy. Overnight in Kandy." },
            { day: "Day 4", title: "Kandy → Nuwara Eliya", desc: "Temple of the Tooth Relic. Peradeniya Botanical Gardens. Drive to Nuwara Eliya. Overnight in Nuwara Eliya." },
            { day: "Day 5", title: "Horton Plains → Ella", desc: "Early morning trek to World’s End. Drive to Ella. Visit Nine Arches Bridge. Overnight in Ella." },
            { day: "Day 6", title: "Ella → Udawalawe Safari", desc: "Udawalawe National Park Safari. Travel to Ratnapura. Overnight in Ratnapura." },
            { day: "Day 7", title: "Gem Mines → Colombo", desc: "Visit Ratnapura Gem Mines and Museum. Return to Colombo." }
        ]
    },

    // 6. East Coast Adventure (7 Days)
    {
        id: "east-coast-adventure",
        title: "East Coast Adventure (May–Sept)",
        duration: "7 Days / 6 Nights",
        category: "Beach",
        image: "/tours/tour-card-beach.jpg",
        description: "Perfect for the summer season: Trincomalee beaches, Pigeon Island snorkeling, and the Cultural Triangle.",
        inclusions: ["Private A/C transport", "3-star hotels", "Meals", "Entrance fees", "Snorkeling", "Guides", "Bottled water"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Sigiriya", desc: "Visit Sigiriya Rock Fortress. Village walk. Overnight in Sigiriya." },
            { day: "Day 2", title: "Sigiriya → Trincomalee", desc: "Depart for Trincomalee. Visit Fort Frederick & Koneswaram Temple. Overnight in Trincomalee." },
            { day: "Day 3", title: "Pigeon Island Snorkeling", desc: "Boat transfer to Pigeon Island. Snorkeling & coral reef exploration. Relax on Nilaveli Beach. Overnight in Trincomalee." },
            { day: "Day 4", title: "Hot Springs + Nilaveli", desc: "Visit Kanniya Hot Springs. Relax at Nilaveli Beach. Overnight in Trincomalee." },
            { day: "Day 5", title: "Trincomalee → Dambulla → Kandy", desc: "Visit Dambulla Cave Temple. Continue to Kandy. Overnight in Kandy." },
            { day: "Day 6", title: "Kandy Cultural Tour", desc: "Temple of the Tooth Relic. Peradeniya Botanical Gardens. Overnight in Kandy." },
            { day: "Day 7", title: "Kandy → Colombo", desc: "Depart for Colombo. City orientation tour. Drop off." }
        ]
    },

    // 7. Family Fun & Beach Leisure (7 Days)
    {
        id: "family-fun-beach",
        title: "Family Fun & Beach Leisure",
        duration: "7 Days / 6 Nights",
        category: "Family",
        image: "/tours/tour-card-beach.jpg",
        description: "A fun-filled tour with water parks, boat safaris, turtle hatcheries, and whale watching.",
        inclusions: ["Private A/C transport", "3-star hotels", "Meals", "Entrance fees", "Guides", "Bottled water"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Negombo", desc: "Visit Negombo Dutch Fort. Lagoon boat ride. Relax on Negombo Beach. Overnight in Negombo." },
            { day: "Day 2", title: "Water Park & Lagoon", desc: "Transfer to Leisure Water Park. Afternoon lagoon boat safari. Overnight in Negombo." },
            { day: "Day 3", title: "Bentota Water Sports", desc: "Drive to Bentota. Water sports (jet ski, banana boat). Visit Turtle Hatchery. Overnight in Bentota." },
            { day: "Day 4", title: "Madu River Safari + Galle", desc: "Madu River Safari. Explore Galle Fort. Overnight in Bentota." },
            { day: "Day 5", title: "Mirissa Whale Watching", desc: "Early morning Whale Watching boat tour (Nov–Apr). Beach time. Overnight in Bentota." },
            { day: "Day 6", title: "Leisure Day", desc: "Relax at Bentota Beach. Optional spa. Evening walk. Overnight in Bentota." },
            { day: "Day 7", title: "Return to Colombo", desc: "Drive to Colombo. Drop-off." }
        ]
    },

    // 8. Spiritual Sri Lanka (7 Days)
    {
        id: "spiritual-sri-lanka",
        title: "Spiritual Sri Lanka Pilgrimage",
        duration: "7 Days / 6 Nights",
        category: "Heritage",
        image: "/tours/tour-card-heritage.jpg",
        description: "A journey through sacred sites including Anuradhapura, Mihintale, Kandy, and Kataragama.",
        inclusions: ["Private A/C transport", "3-star hotels", "Meals", "Entrance fees", "Guides", "Bottled water"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Anuradhapura", desc: "Visit Kelaniya Raja Maha Vihara. Proceed to Anuradhapura. Visit Sri Maha Bodhi. Overnight in Anuradhapura." },
            { day: "Day 2", title: "Mihintale & Sacred Sites", desc: "Climb Mihintale. Visit Isurumuniya Temple. Overnight in Anuradhapura." },
            { day: "Day 3", title: "Wilpattu Safari → Dambulla", desc: "Morning Jeep Safari in Wilpattu. Travel to Dambulla. Overnight in Sigiriya/Dambulla." },
            { day: "Day 4", title: "Sigiriya → Kandy", desc: "Climb Sigiriya Rock Fortress. Travel to Kandy. Cultural Dance Show. Overnight in Kandy." },
            { day: "Day 5", title: "Kandy → Nuwara Eliya", desc: "Temple of the Tooth Relic. Tea Factory Visit. Overnight in Nuwara Eliya." },
            { day: "Day 6", title: "Nuwara Eliya → Kataragama", desc: "Travel to Ella. Proceed to Kataragama. Overnight in Kataragama." },
            { day: "Day 7", title: "Pilgrimage → Colombo", desc: "Visit Kataragama Temple. Return to Colombo." }
        ]
    },

    // 9. Adventure & Trekking (7 Days)
    {
        id: "adventure-trekking",
        title: "Adventure & Trekking Tour",
        duration: "7 Days / 6 Nights",
        category: "Adventure",
        image: "/tours/tour-card-adventure.jpg",
        description: "For the thrill-seekers: rafting, night climbs, and scenic treks.",
        inclusions: ["Private A/C transport", "3-star hotels", "Meals", "Entrance fees", "Guides", "Bottled water"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Kitulgala", desc: "White Water Rafting on Kelani River. Overnight in Kitulgala." },
            { day: "Day 2", title: "Adam’s Peak Night Climb", desc: "Seasonal night climb (Nov-May) for sunrise. (Off-season hike available)." },
            { day: "Day 3", title: "Rest & Nuwara Eliya", desc: "Travel to Nuwara Eliya. Leisure time. Overnight in Nuwara Eliya." },
            { day: "Day 4", title: "Horton Plains → Ella", desc: "Trek to World’s End. Travel to Ella. Visit Nine Arches Bridge. Overnight in Ella." },
            { day: "Day 5", title: "Ella Rock Hike", desc: "Guided hike to Ella Rock. Ravana Falls. Overnight in Ella." },
            { day: "Day 6", title: "Diyaluma Falls Trek", desc: "Trekking & swimming at Diyaluma Falls. Return to Colombo." },
            { day: "Day 7", title: "Departure", desc: "Drop-off at airport or hotel." }
        ]
    },

    // 10. Wild Sri Lanka Safari (7 Days)
    {
        id: "wild-sri-lanka-safari",
        title: "Wild Sri Lanka Safari Trail",
        duration: "7 Days / 6 Nights",
        category: "Wildlife",
        image: "/tours/tour-card-wildlife.jpg",
        description: "The ultimate wildlife loop: Wilpattu, Minneriya, Udawalawe, Yala, and Bundala.",
        inclusions: ["Private A/C transport", "3-star hotels", "Meals", "Entrance fees", "Jeep safaris", "Guides", "Bottled water"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Wilpattu", desc: "Evening Jeep Safari in Wilpattu National Park. Overnight near Wilpattu." },
            { day: "Day 2", title: "Wilpattu → Sigiriya", desc: "Morning Safari (optional). Visit Sigiriya Rock Fortress. Overnight in Sigiriya." },
            { day: "Day 3", title: "Minneriya Safari → Kandy", desc: "Morning Safari at Minneriya. Visit Temple of the Tooth. Overnight in Kandy." },
            { day: "Day 4", title: "Kandy → Udawalawe", desc: "Botanical Gardens. Travel to Udawalawe. Evening Jeep Safari. Overnight in Udawalawe." },
            { day: "Day 5", title: "Udawalawe → Yala", desc: "Travel to Yala. Evening Jeep Safari in Yala National Park. Overnight near Yala." },
            { day: "Day 6", title: "Bundala → Tangalle", desc: "Morning Bird Watching Safari at Bundala. Relax at Tangalle Beach. Overnight in Tangalle." },
            { day: "Day 7", title: "Tangalle → Colombo", desc: "Beach walk. Return to Colombo." }
        ]
    },

    // 11. Coastal Circle Tour (7 Days)
    {
        id: "coastal-circle-tour",
        title: "Coastal Circle Tour",
        duration: "7 Days / 6 Nights",
        category: "Beach",
        image: "/tours/tour-card-beach.jpg",
        description: "A loop around the coast: dolphins in Kalpitiya, turtles in Bentota, and whales in Mirissa.",
        inclusions: ["Private A/C transport", "3-star hotels", "Meals", "Entrance fees", "Boat safaris", "Guides", "Bottled water"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Kalpitiya", desc: "Visit Chilaw. Travel to Kalpitiya. Kite surfing intro or beach time. Overnight in Kalpitiya." },
            { day: "Day 2", title: "Dolphin Watching", desc: "Dolphin watching boat trip. Lagoon safari. Overnight in Kalpitiya." },
            { day: "Day 3", title: "Kalpitiya → Bentota", desc: "Visit Negombo. Travel to Bentota. Water sports. Overnight in Bentota." },
            { day: "Day 4", title: "Madu River + Turtle Hatchery", desc: "Madu Ganga boat safari. Kosgoda Turtle Hatchery. Overnight in Bentota." },
            { day: "Day 5", title: "Bentota → Galle → Mirissa", desc: "Explore Galle Fort. Travel to Mirissa. Beach time. Overnight in Mirissa." },
            { day: "Day 6", title: "Whale Watching", desc: "Whale watching tour. Visit Hiriketiya Beach. Overnight in Mirissa." },
            { day: "Day 7", title: "Return to Colombo", desc: "Drive back to Colombo." }
        ]
    },

    // 12. Leisure & Heritage Retreat (6 Days)
    {
        id: "leisure-heritage-retreat",
        title: "Leisure & Heritage Retreat",
        duration: "6 Days / 5 Nights",
        category: "Family",
        image: "/tours/tour-card-tea.jpg",
        description: "A relaxed pace tour focusing on beaches, boat safaris, colonial heritage, and turtle conversation.",
        inclusions: ["Private A/C vehicle", "3★ hotels", "Breakfast, lunch & dinner", "Entrance fees", "Bottled water"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Negombo", desc: "Check-in to Negombo hotel. Sunset by Indian Ocean." },
            { day: "Day 2", title: "Negombo Canal + Dutch Fort", desc: "Boat safari on Hamilton Canal. Visit Dutch Fort." },
            { day: "Day 3", title: "Bentota Beach + Turtle Hatchery", desc: "Drive to Bentota. Visit Kosgoda Turtle Hatchery. Optional water sports." },
            { day: "Day 4", title: "Galle Fort + Hikkaduwa", desc: "Galle Fort walking tour. Glass-bottom boat at Hikkaduwa. Overnight in Bentota." },
            { day: "Day 5", title: "Colombo City Tour", desc: "Colombo National Museum. Independence Square. Gangaramaya Temple." },
            { day: "Day 6", title: "Departure", desc: "Shopping. Transfer to airport." }
        ]
    },

    // ==========================================
    // 3-DAY TOURS
    // ==========================================

    {
        id: "cultural-triangle-mini",
        title: "Cultural Triangle Essentials",
        duration: "3 Days / 2 Nights",
        category: "Heritage",
        image: "/destinations/sigiriya.jpg",
        description: "A condensed journey through Sri Lanka's ancient capitals and rock fortresses.",
        inclusions: ["Private A/C transport", "3-star hotels", "Breakfast & Dinner", "Entrance fees", "Driver/Guide"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Dambulla → Sigiriya", desc: "Visit Dambulla Cave Temple. Climb Sigiriya Rock Fortress. Overnight in Sigiriya." },
            { day: "Day 2", title: "Sigiriya → Polonnaruwa → Minneriya", desc: "Explore Polonnaruwa Ancient City. Afternoon Minneriya Elephant Safari. Overnight in Sigiriya." },
            { day: "Day 3", title: "Sigiriya → Pidurangala → Colombo", desc: "Morning hike to Pidurangala Rock. Return to Colombo." }
        ]
    },
    {
        id: "hill-country-escape",
        title: "Hill Country Escape",
        duration: "3 Days / 2 Nights",
        category: "Nature",
        image: "/destinations/redesign/nuwara-eliya.jpg",
        description: "Escape to the cool climate of Kandy and Nuwara Eliya with scenic train rides and tea plantations.",
        inclusions: ["Private A/C transport", "3-star hotels", "Breakfast & Dinner", "Train tickets", "Driver/Guide"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Kandy", desc: "Drive to Kandy. Visit Temple of the Tooth. Cultural Show. Overnight in Kandy." },
            { day: "Day 2", title: "Kandy → Nuwara Eliya", desc: "Botanical Gardens. Scenic drive/train to Nuwara Eliya. Tea Factory tour. Overnight in Nuwara Eliya." },
            { day: "Day 3", title: "Nuwara Eliya → Colombo", desc: "Visit Gregory Lake. Strawberry Farm. Return to Colombo via Kitulgala (Waterfalls)." }
        ]
    },

    // ==========================================
    // 2-DAY TOURS
    // ==========================================

    {
        id: "2day-kandy-pinnawala",
        title: "Kandy & Pinnawala Cultural Combo",
        duration: "2 Days / 1 Night",
        category: "Heritage",
        image: "/destinations/kandy.jpg",
        description: "Elephants, Temples, and Botanical Gardens in a quick 2-day getaway.",
        inclusions: ["Private A/C transport", "Hotel (1 Night)", "Meals", "Entrance Tickets", "Guide"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Pinnawala → Kandy", desc: "Visit Pinnawala Elephant Orphanage. Spice Garden. Kandy City Tour. Cultural Dance Show. Overnight in Kandy." },
            { day: "Day 2", title: "Kandy → Colombo", desc: "Royal Botanical Gardens. Temple of the Tooth Relic. Return to Colombo." }
        ]
    },
    {
        id: "2day-sigiriya-dambulla",
        title: "Sigiriya & Dambulla Rock Tour",
        duration: "2 Days / 1 Night",
        category: "Heritage",
        image: "/destinations/sigiriya.jpg",
        description: "Explore the two most iconic rock formations and ancient temples of the Cultural Triangle.",
        inclusions: ["Private A/C transport", "Hotel (1 Night)", "Meals", "Entrance Tickets", "Guide"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Dambulla → Sigiriya", desc: "Visit Dambulla Cave Temple. Arrive in Sigiriya. Village Walk. Overnight in Sigiriya." },
            { day: "Day 2", title: "Sigiriya → Pidurangala → Colombo", desc: "Climb Sigiriya Lion Rock Fortress. Hike Pidurangala Rock. Return to Colombo." }
        ]
    },
    {
        id: "2day-galle-unawatuna",
        title: "Galle Fort & Unawatuna Escape",
        duration: "2 Days / 1 Night",
        category: "Beach",
        image: "/destinations/galle.jpg",
        description: "Colonial heritage meets tropical beaches on the southern coast.",
        inclusions: ["Private A/C transport", "Hotel (1 Night)", "Meals", "Entrance Tickets", "Guide"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Hikkaduwa → Galle", desc: "Stop at Hikkaduwa Beach. Galle Fort Heritage Walking Tour. Sunset at Unawatuna. Overnight in Unawatuna." },
            { day: "Day 2", title: "Unawatuna → Bentota → Colombo", desc: "Jungle Beach swim. Stilt Fishermen. Stop at Bentota Beach. Return to Colombo." }
        ]
    },
    {
        id: "2day-nuwara-eliya",
        title: "Nuwara Eliya Tea & Hills",
        duration: "2 Days / 1 Night",
        category: "Nature",
        image: "/destinations/redesign/nuwara-eliya.jpg",
        description: "Experience 'Little England' with waterfalls, tea factories, and cool mountain air.",
        inclusions: ["Private A/C transport", "Hotel (1 Night)", "Meals", "Entrance Tickets", "Guide"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Ramboda → Nuwara Eliya", desc: "View Ramboda Falls. Tea Plantation & Factory Tour. Explore Nuwara Eliya town. Overnight in Nuwara Eliya." },
            { day: "Day 2", title: "Nuwara Eliya → Colombo", desc: "Gregory Lake Walk. Strawberry Farm visit. Return to Colombo." }
        ]
    },
    {
        id: "2day-ella-train",
        title: "Ella Train & Mountain Escape",
        duration: "2 Days / 1 Night",
        category: "Adventure",
        image: "/destinations/ella.jpg",
        description: "Ride the famous scenic train and hike the green peaks of Ella.",
        inclusions: ["Private A/C transport", "Hotel (1 Night)", "Meals", "Train Tickets", "Guide"],
        itinerary: [
            { day: "Day 1", title: "Colombo → Kandy → Ella", desc: "Drive to Kandy. Scenic Train Ride to Ella (or drive). Visit Nine Arch Bridge. Overnight in Ella." },
            { day: "Day 2", title: "Ella → Colombo", desc: "Hike Little Adam’s Peak. Visit Ravana Falls. Return scenic drive to Colombo." }
        ]
    },

    // ==========================================
    // 1-DAY TOURS
    // ==========================================

    {
        id: "day-tour-sigiriya-dambulla",
        title: "Sigiriya & Dambulla Day Tour",
        duration: "1 Day",
        category: "Heritage",
        image: "/destinations/sigiriya.jpg",
        description: "Climb the majestic Sigiriya Rock Fortress and explore the Dambulla Cave Temple in a single day.",
        inclusions: ["Private A/C transport", "Breakfast & Lunch", "Entrance tickets", "Driver/Guide"],
        itinerary: [
            { day: "04:30 AM", title: "Departure", desc: "Depart from Colombo." },
            { day: "10:00 AM", title: "Dambulla Cave Temple", desc: "Explore the ancient cave temple." },
            { day: "01:00 PM", title: "Sigiriya Climb", desc: "Climb Sigiriya Lion Rock." },
            { day: "02:30 PM", title: "Pidurangala (Optional)", desc: "Hike Pidurangala for views." },
            { day: "05:30 PM", title: "Return", desc: "Drive back to Colombo." }
        ]
    },
    {
        id: "day-tour-kandy",
        title: "Kandy Cultural Day Tour",
        duration: "1 Day",
        category: "Heritage",
        image: "/destinations/redesign/elephant.jpg",
        description: "Visit the Temple of the Tooth, Botanical Gardens, and Elephant Orphanage.",
        inclusions: ["Private A/C transport", "Breakfast & Lunch", "Entrance tickets", "Driver/Guide"],
        itinerary: [
            { day: "05:00 AM", title: "Departure", desc: "Depart from Colombo." },
            { day: "09:00 AM", title: "Botanical Gardens", desc: "Visit Peradeniya Royal Botanical Gardens." },
            { day: "10:30 AM", title: "Temple of the Tooth", desc: "Visit the Sacred Tooth Relic Temple." },
            { day: "01:30 PM", title: "City Tour", desc: "Kandy Viewpoint and shopping." },
            { day: "03:30 PM", title: "Tea Factory", desc: "Visit a tea factory en route back." }
        ]
    },
    {
        id: "day-tour-whale-watching",
        title: "Mirissa Whale Watching Day Tour",
        duration: "1 Day",
        category: "Wildlife",
        image: "/destinations/redesign/trincomalee.jpg",
        description: "Witness the majestic Blue Whales off the coast of Mirissa (Season: Nov-Apr).",
        inclusions: ["Private A/C transport", "Whale Watching Tickets", "Breakfast", "Driver/Guide"],
        itinerary: [
            { day: "04:00 AM", title: "Departure", desc: "Early departure from Colombo." },
            { day: "06:30 AM", title: "Whale Watching", desc: "3-4 hour cruise to spot whales and dolphins." },
            { day: "12:30 PM", title: "Beach Time", desc: "Relax at Mirissa Beach or Coconut Tree Hill." },
            { day: "03:00 PM", title: "Galle En Route", desc: "Short stop at Galle Fort on return (optional)." }
        ]
    },
    {
        id: "day-tour-kitulgala",
        title: "Kitulgala White Water Rafting",
        duration: "1 Day",
        category: "Adventure",
        image: "/destinations/ella.jpg",
        description: "Adrenaline-pumping white water rafting on the Kelani River.",
        inclusions: ["Private A/C transport", "Rafting Gear & Guide", "Lunch", "Driver"],
        itinerary: [
            { day: "05:30 AM", title: "Departure", desc: "Depart from Colombo." },
            { day: "09:00 AM", title: "Rafting", desc: "White Water Rafting at Kelani River." },
            { day: "11:00 AM", title: "Canyoning", desc: "Waterfall abseiling and rock sliding." },
            { day: "02:00 PM", title: "Trekking", desc: "Jungle trekking and river bath." }
        ]
    },
    {
        id: "day-tour-galle",
        title: "Galle Heritage & Beach Day",
        duration: "1 Day",
        category: "Beach",
        image: "/destinations/galle.jpg",
        description: "Explore the UNESCO World Heritage Galle Fort and relax on the southern beaches.",
        inclusions: ["Private A/C transport", "Guide", "Lunch", "Entrance fees"],
        itinerary: [
            { day: "06:30 AM", title: "Departure", desc: "Depart from Colombo via Highway." },
            { day: "09:30 AM", title: "Galle Fort", desc: "Walking tour of the Dutch Fort." },
            { day: "02:00 PM", title: "Unawatuna", desc: "Relax at Unawatuna Beach." },
            { day: "04:00 PM", title: "Stilt Fishermen", desc: "See traditional stilt fishermen (seasonal)." }
        ]
    },
    {
        id: "day-tour-colombo",
        title: "Colombo City & Cultural Tour",
        duration: "1 Day",
        category: "Heritage",
        image: "/hero-bg.png",
        description: "Discover the vibrant capital, from colonial buildings to modern shopping.",
        inclusions: ["Private A/C transport", "Guide", "Lunch", "Entrance fees"],
        itinerary: [
            { day: "08:00 AM", title: "Temples & History", desc: "Gangaramaya Temple and Independence Square." },
            { day: "09:30 AM", title: "Museum", desc: "Colombo National Museum." },
            { day: "11:00 AM", title: "Lotus Tower", desc: "Visit Colombo Lotus Tower." },
            { day: "02:00 PM", title: "Pettah Market", desc: "Shopping experience in Pettah." },
            { day: "04:00 PM", title: "Galle Face", desc: "Sunset at Galle Face Green." }
        ]
    }
];
