const categoryList = {
    0 : 'Tools',
    1 : 'Seeds',
    2 : 'Supplies',

}
const productList = [
    {
        id: 0,
        brand: 'Dewalt',
        title : 'DCD777B 20V Max Brushless Compact Drill/Driver',
        price: 100,
        category: 0,
        stock: 100,
        discription: "This 20V Max cordless drill comes with a battery and charger. Weighing just 3 ½ pounds without the battery, it features three modes: standard drilling, masonry work, and screw driving with torque limiter. This versatile tool is essential for any project, from small home repairs to larger tasks.",
        rating: 4,
        img: "images/store/items/tools/dewalt/DCD777B/drill_front.webp",
        imgList:["images/store/items/tools/dewalt/DCD777B/drill_front.webp", "images/store/items/tools/dewalt/DCD777B/drill_side_branding.webp", "images/store/items/tools/dewalt/DCD777B/drill_side_warning.webp"],
        limit: 5,
    },
    {
        id: 1,
        brand: 'Dewalt',
        title: 'DCF885C1 20V Max Impact Driver Kit',
        price: 100,
        category: 0,
        stock: 50,
        discription: "The Dewalt 20V Max Impact Driver offers high torque for driving screws and bolts with ease. This kit includes one battery and a charger. Ideal for heavy-duty fastening applications, it ensures you have the power you need to complete tough jobs efficiently.",
        rating: 5,
        img: "images/store/items/tools/dewalt/DCF885C1/full_kit.webp",
        imgList:["images/store/items/tools/dewalt/DCF885C1/full_kit.webp","images/store/items/tools/dewalt/DCF885C1/drill.webp","images/store/items/tools/dewalt/DCF885C1/drill_with_text.webp"],
        limit: 1
    },
    {
        id: 2,
        brand: 'Dewalt',
        title: 'DCS391B 20V Max Cordless Circular Saw',
        price: 140,
        category: 0,
        stock: 20,
        discription: "The Dewalt 20V Max Cordless Circular Saw is perfect for cutting wood and other materials on the go. Lightweight and versatile, it shares batteries with other Dewalt 20V tools, making it a great addition to your toolkit. Includes one battery and charger.",
        rating: 4.5,
        img: "images/store/items/saw.webp"
    },
    {
        id: 3,
        brand: 'Dewalt',
        title: 'DCB205 20V Max Spare Battery Pack',
        price: 50,
        category: 0,
        stock: 150,
        discription: "Extend your tool usage with the Dewalt 20V Max Spare Battery Pack. This high-capacity lithium-ion battery provides longer run time, ensuring less downtime on your projects. Compatible with all Dewalt 20V Max tools.",
        rating: 4,
        img: "images/store/items/battery.webp",
        limit: 5
    },
    {
        id: 4,
        brand: 'Dewalt',
        title: 'DCB115 20V Max Battery Charger',
        price: 60,
        category: 0,
        stock: 70,
        discription: "Keep your Dewalt 20V Max batteries charged with this reliable charger. It's compact, easy to use, and can charge multiple battery types, ensuring your tools are always ready for the job. An essential accessory for any Dewalt tool owner.",
        rating: 3,
        img: "images/store/items/battery-charger.webp"
    },
    {
        id: 5,
        brand: 'Makita',
        title: 'XT269M 18V LXT Brushless Cordless Combo Kit',
        price: 299,
        category: 0,
        stock: 80,
        discription: "This Makita combo kit includes a powerful brushless drill and impact driver. The kit comes with two 18V LXT lithium-ion 4.0Ah batteries and a rapid charger. Both tools feature variable speed control and ergonomic design for comfort and control. Perfect for tackling a variety of projects around the home or on the job site.",
        rating: 4.5,
        img: "images/store/items/makita/combo_kit_front.webp",
        imgList:["images/store/items/makita/combo_kit_front.webp", "images/store/items/makita/combo_kit_side.webp"]
    },
    {
        id: 6,
        brand: 'Bosch',
        title: 'GSR12V-140FCB22 12V Max Flexiclick 5-In-1 Drill/Driver System',
        price: 199,
        category: 0,
        stock: 60,
        discription: "The Bosch Flexiclick Drill/Driver System is versatile with 4 attachments—a locking bit holder, keyless chuck, right angle, and offset angle. This 12V kit includes two batteries and a charger, making it ideal for tight spaces and difficult angles. The compact design and power efficiency make it an essential tool for professionals.",
        rating: 2,
        img: "images/store/items/bosch/flexiclick_front.webp",
        imgList:["images/store/items/bosch/flexiclick_front.webp", "images/store/items/bosch/flexiclick_attachments.webp"]
    },
    {
        id: 7,
        brand: 'Milwaukee',
        title: '2897-22 M18 Fuel 2-Tool Combo Kit',
        price: 399,
        category: 0,
        stock: 45,
        discription: "The Milwaukee M18 Fuel Combo Kit includes a hammer drill and impact driver. Both tools feature POWERSTATE brushless motors and REDLITHIUM batteries, providing longer run-time and increased power. The kit comes with two 18V batteries and a charger, perfect for demanding applications and heavy-duty projects.",
        rating: 4.9,
        img: "images/store/items/milwaukee/combo_kit_front.webp",
        imgList:["images/store/items/milwaukee/combo_kit_front.webp", "images/store/items/milwaukee/combo_kit_side.webp"]
    },
    {
        id: 8,
        brand: 'Ryobi',
        title: 'P883 One+ 18V Lithium Ion Cordless Contractor Kit',
        price: 159,
        category: 0,
        stock: 100,
        discription: "The Ryobi One+ Contractor Kit includes a drill/driver, impact driver, reciprocating saw, and circular saw. This versatile kit comes with two 18V lithium-ion batteries and a charger, providing the power and flexibility for various projects. Ideal for DIY enthusiasts and professionals alike.",
        rating: 4.6,
        img: "images/store/items/ryobi/contractor_kit_front.webp",
        imgList:["images/store/items/ryobi/contractor_kit_front.webp", "images/store/items/ryobi/contractor_kit_side.webp"]
    },
    {
        id: 9,
        brand: 'Porter-Cable',
        title: 'PCCK619L8 20V MAX 8-Tool Combo Kit',
        price: 499,
        category: 0,
        stock: 0,
        discription: "The Porter-Cable 8-Tool Combo Kit includes a drill/driver, circular saw, reciprocating saw, impact driver, jigsaw, oscillating tool, grinder, and flashlight. The kit comes with two 20V MAX lithium-ion batteries and a charger. This comprehensive set is ideal for tackling a variety of projects with ease and efficiency.",
        rating: 3.5,
        img: "images/store/items/porter_cable/combo_kit_front.webp",
        imgList:["images/store/items/porter_cable/combo_kit_front.webp", "images/store/items/porter_cable/combo_kit_tools.webp"]
    },
    {
        id: 10,
        brand: 'Renogy',
        title: '100W 12V Monocrystalline Solar Panel',
        price: 100,
        category: 2,
        stock: 120,
        discription: "Renogy 100W monocrystalline solar panel provides high efficiency per space and is perfect for off-grid applications. Suitable for RVs, boats, and homes.",
        rating: 4.8,
        img: "images/store/items/solar_panel_100w.webp",
        imgList: ["images/store/items/solar_panel_100w.webp"]
    },
    {
        id: 11,
        brand: 'EcoFlow',
        title: 'RIVER Pro Portable Power Station',
        price: 599,
        category: 2,
        stock: 50,
        discription: "The EcoFlow RIVER Pro is a portable power station designed to provide reliable power on the go. It has a large capacity, fast recharge times, and is ideal for camping, off-grid living, and emergency situations.",
        rating: 4.5,
        img: "images/store/items/river_pro.webp",
        imgList: ["images/store/items/river_pro.webp"]
    },
    {
        id: 12,
        brand: 'Eccotemp',
        title: 'L10 Portable Outdoor Tankless Water Heater',
        price: 280,
        category: 2,
        stock: 80,
        discription: "Eccotemp L10 is a portable tankless water heater that provides hot water wherever you need it. It's perfect for outdoor showers, washing pets, and off-grid living.",
        rating: 1.5,
        img: "images/store/items/tankless_water_heater.webp",
        imgList: ["images/store/items/tankless_water_heater.webp"]
    },
    {
        id: 13,
        brand: 'AquaRain',
        title: 'Model 404 Gravity Water Filter',
        price: 150,
        category: 2,
        stock: 90,
        discription: "The AquaRain Model 404 gravity water filter is a highly effective water purification system that provides clean drinking water from almost any source.",
        rating: 4.9,
        img: "images/store/items/water_filter.webp",
        imgList: ["images/store/items/water_filter.webp"]
    },
    {
        id: 14,
        brand: 'Vivosun',
        title: '330GPH Submersible Water Pump',
        price: 30,
        category: 2,
        stock: 200,
        discription: "The Vivosun 330GPH submersible water pump is perfect for hydroponics, aquariums, and water features. It's reliable, energy-efficient, and easy to use.",
        rating: 4.3,
        img: "images/store/items/water_pump.webp",
        imgList: ["images/store/items/water_pump.webp"]
    },
    {
        id: 15,
        brand: 'Goal Zero',
        title: 'Yeti 400 Portable Power Station',
        price: 449,
        category: 2,
        stock: 60,
        discription: "Goal Zero Yeti 400 is a portable power station that provides backup power during emergencies and power outages. It's perfect for off-grid living, camping, and tailgating.",
        rating: 3.5,
        img: "images/store/items/yeti_400.webp",
        imgList: ["images/store/items/yeti_400.webp"]
    },
    {
        id: 16,
        brand: 'Nature’s Head',
        title: 'Self-Contained Composting Toilet',
        price: 960,
        category: 2,
        stock: 25,
        discription: "Nature’s Head composting toilet is a self-contained, waterless toilet system. It’s odorless and perfect for cabins, RVs, boats, and off-grid homes.",
        rating: 4.8,
        img: "images/store/items/composting_toilet.webp",
        imgList: ["images/store/items/composting_toilet.webp"]
    },
    {
        id: 17,
        brand: 'Mr. Heater',
        title: 'MH9BX Buddy Portable Heater',
        price: 90,
        category: 2,
        stock: 150,
        discription: "Mr. Heater MH9BX Buddy is a portable propane heater that provides safe and reliable heat for indoor and outdoor spaces. It’s perfect for camping, workshops, and emergency heating.",
        rating: 4.4,
        img: "images/store/items/portable_heater.webp",
        imgList: ["images/store/items/portable_heater.webp"]
    },
    {
        id: 18,
        brand: 'BioLite',
        title: 'BaseCamp Wood Burning Stove',
        price: 200,
        category: 2,
        stock: 75,
        discription: "The BioLite BaseCamp is a wood-burning stove that converts heat into electricity. It’s ideal for cooking and charging devices in off-grid environments.",
        rating: 3,
        img: "images/store/items/wood_stove.webp",
        imgList: ["images/store/items/wood_stove.webp"]
    },
    {
        id: 19,
        brand: 'SunJack',
        title: '14W Solar Charger',
        price: 70,
        category: 2,
        stock: 110,
        discription: "The SunJack 14W solar charger is portable and powerful, allowing you to charge your devices on the go. It’s perfect for hiking, camping, and emergency preparedness.",
        rating: 2.5,
        img: "images/store/items/solar_charger.webp",
        imgList: ["images/store/items/solar_charger.webp"]
    },
    {
        id: 20,
        brand: 'Prairie Moon Nursery',
        title: 'Midwest Wildflower Seed Mix',
        price: 35,
        category: 1,
        stock: 100,
        description: "This Midwest Wildflower Seed Mix is perfect for creating a vibrant meadow in the Midwest region of the United States. The mix includes a variety of native wildflowers that thrive in the Midwest climate.",
        rating: 4.8,
        region: 'Midwest',
        img: "images/store/items/midwest_wildflower_mix.webp",
        imgList: ["images/store/items/midwest_wildflower_mix.webp"]
    },
    {
        id: 21,
        brand: 'American Meadows',
        title: 'Northeast Wildflower Seed Mix',
        price: 30,
        category: 1,
        stock: 120,
        description: "This Northeast Wildflower Seed Mix is designed to grow well in the Northeast region of the United States. It contains a variety of wildflowers that are native to the area and provide beautiful blooms throughout the season.",
        rating: 4.5,
        region: 'Northeast',
        img: "images/store/items/northeast_wildflower_mix.webp",
        imgList: ["images/store/items/northeast_wildflower_mix.webp"]
    },
    {
        id: 22,
        brand: 'Seed Needs',
        title: 'Southeast Wildflower Seed Mix',
        price: 28,
        category: 1,
        stock: 90,
        description: "The Southeast Wildflower Seed Mix is tailored for the Southeastern United States. It includes a variety of native wildflowers that are perfect for creating a colorful meadow in the Southeast.",
        rating: 4.7,
        region: 'Southeast',
        img: "images/store/items/southeast_wildflower_mix.webp",
        imgList: ["images/store/items/southeast_wildflower_mix.webp"]
    },
    {
        id: 23,
        brand: 'Wildseed Farms',
        title: 'Southwest Wildflower Seed Mix',
        price: 32,
        category: 1,
        stock: 80,
        description: "This Southwest Wildflower Seed Mix contains a blend of wildflowers that are well-suited for the arid conditions of the Southwestern United States. Perfect for creating a desert meadow.",
        rating: 4.6,
        region: 'Southwest',
        img: "images/store/items/southwest_wildflower_mix.webp",
        imgList: ["images/store/items/southwest_wildflower_mix.webp"]
    },
    {
        id: 24,
        brand: 'High Country Gardens',
        title: 'Western Wildflower Seed Mix',
        price: 34,
        category: 1,
        stock: 70,
        description: "The Western Wildflower Seed Mix is ideal for the Western United States. It includes a variety of wildflowers that thrive in the unique climates found throughout the Western region.",
        rating: 4.9,
        region: 'West',
        img: "images/store/items/western_wildflower_mix.webp",
        imgList: ["images/store/items/western_wildflower_mix.webp"]
    },
    {
        id: 25,
        brand: 'Eden Brothers',
        title: 'Southern Plains Wildflower Seed Mix',
        price: 31,
        category: 1,
        stock: 95,
        description: "This Southern Plains Wildflower Seed Mix is perfect for the Southern Plains region of the United States. The mix includes a variety of wildflowers that are native to the area and provide vibrant blooms.",
        rating: 4.4,
        region: 'Southern Plains',
        img: "images/store/items/southern_plains_wildflower_mix.webp",
        imgList: ["images/store/items/southern_plains_wildflower_mix.webp"]
    },
    {
        id: 26,
        brand: 'Outsidepride',
        title: 'Pacific Northwest Wildflower Seed Mix',
        price: 29,
        category: 1,
        stock: 85,
        description: "The Pacific Northwest Wildflower Seed Mix is designed for the Pacific Northwest region. It contains a blend of native wildflowers that thrive in the moist, cool climate of the area.",
        rating: 4.7,
        region: 'Pacific Northwest',
        img: "images/store/items/pacific_northwest_wildflower_mix.webp",
        imgList: ["images/store/items/pacific_northwest_wildflower_mix.webp"]
    },
    {
        id: 27,
        brand: 'American Meadows',
        title: 'Central Wildflower Seed Mix',
        price: 33,
        category: 1,
        stock: 60,
        description: "This Central Wildflower Seed Mix is perfect for the Central region of the United States. The mix includes a variety of native wildflowers that provide colorful blooms throughout the season.",
        rating: 4.5,
        region: 'Central',
        img: "images/store/items/central_wildflower_mix.webp",
        imgList: ["images/store/items/central_wildflower_mix.webp"]
    },
    {
        id: 28,
        brand: 'Seed Needs',
        title: 'California Wildflower Seed Mix',
        price: 35,
        category: 1,
        stock: 75,
        description: "The California Wildflower Seed Mix is tailored for the diverse climates of California. It includes a variety of native wildflowers that create a vibrant and colorful meadow.",
        rating: 4.8,
        region: 'California',
        img: "images/store/items/california_wildflower_mix.webp",
        imgList: ["images/store/items/california_wildflower_mix.webp"]
    },
    {
        id: 29,
        brand: 'Prairie Moon Nursery',
        title: 'Texas-Oklahoma Wildflower Seed Mix',
        price: 30,
        category: 1,
        stock: 100,
        description: "This Texas-Oklahoma Wildflower Seed Mix is designed for the unique climates of Texas and Oklahoma. The mix includes a variety of wildflowers that provide beautiful blooms throughout the growing season.",
        rating: 4.6,
        region: 'Texas-Oklahoma',
        img: "images/store/items/texas_oklahoma_wildflower_mix.webp",
        imgList: ["images/store/items/texas_oklahoma_wildflower_mix.webp"]
    }
];

const productReviews = [
    {
        productId: 0,
        reviewTitle: 'Excellent Drill, Highly Recommended!',
        rating: 5,
        review: 'This cordless drill exceeded my expectations! The battery life is fantastic, lasting through multiple projects without needing a recharge. It’s lightweight, yet powerful enough to handle tough jobs. The variable speed control is smooth, and the build quality feels solid. Highly recommended for both DIY enthusiasts and professionals.',
        reviewName: 'John Smith'
    },
    {
        productId: 0,
        reviewTitle: 'Great Drill with Minor Flaws',
        rating: 4,
        review: 'This drill works very well for most of my home projects. It’s easy to handle and the battery life is decent. My only complaint is that the chuck can sometimes loosen up a bit during heavy use, which can be annoying. Otherwise, it’s a great tool and a good value for the price.',
        reviewName: 'Sarah Johnson'
    },
    {
        productId: 0,
        reviewTitle: 'Solid Performance, Good Value',
        rating: 4,
        review: 'I’ve been using this cordless drill for a few months now and it performs reliably. It has enough power for all my DIY tasks and the battery charges quickly. The only downside is that it gets a bit warm after extended use, but it hasn’t been a major issue so far. Overall, it’s a good value for the money.',
        reviewName: 'Michael Brown'
    },
    {
        productId: 0,
        reviewTitle: 'Decent, But Has Room for Improvement',
        rating: 3,
        review: 'This drill is okay for light-duty work, but it struggles with tougher materials. The battery life is shorter than I expected, and I find myself recharging it often. It’s also a bit heavier than other drills I’ve used. It’s not a bad product, but it could definitely be improved in terms of power and weight.',
        reviewName: 'Emily Davis'
    },
    {
        productId: 0,
        reviewTitle: 'Good Drill for Everyday Use',
        rating: 4,
        review: 'This drill is quite good for everyday household tasks. It’s easy to use and the grip is comfortable. The battery life is sufficient for most jobs, though it’s not exceptional. It’s a bit noisy, but nothing too bothersome. Overall, a solid choice for general use around the house.',
        reviewName: 'James Wilson'
    }
];

const productMap = {};

productList.forEach(product =>{
    productMap[product.id] = product
})


export {productList, productMap, categoryList};