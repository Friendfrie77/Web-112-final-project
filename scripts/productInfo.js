const categoryList = {
    0 : 'Tools',
    1 : 'Seeds',
    2 : 'Materials',

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
        img: "images/store/items/drill/drill_front.webp",
        imgList:["images/store/items/drill/drill_front.webp", "images/store/items/drill/drill_side_branding.webp", "images/store/items/drill/drill_side_warning.webp"]
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
        img: "images/store/items/impact-drill.webp"
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
        img: "images/store/items/battery.webp"
    },
    {
        id: 4,
        brand: 'Dewalt',
        title: 'DCB115 20V Max Battery Charger',
        price: 60,
        category: 0,
        stock: 70,
        discription: "Keep your Dewalt 20V Max batteries charged with this reliable charger. It's compact, easy to use, and can charge multiple battery types, ensuring your tools are always ready for the job. An essential accessory for any Dewalt tool owner.",
        rating: 4,
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
        rating: 4,
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
        stock: 30,
        discription: "The Porter-Cable 8-Tool Combo Kit includes a drill/driver, circular saw, reciprocating saw, impact driver, jigsaw, oscillating tool, grinder, and flashlight. The kit comes with two 20V MAX lithium-ion batteries and a charger. This comprehensive set is ideal for tackling a variety of projects with ease and efficiency.",
        rating: 3.5,
        img: "images/store/items/porter_cable/combo_kit_front.webp",
        imgList:["images/store/items/porter_cable/combo_kit_front.webp", "images/store/items/porter_cable/combo_kit_tools.webp"]
    }
]

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

const reviewCount = (id) =>{
    let count = 0;
    productReviews.forEach(review =>{
        if(review.productId === id){
            count ++
        }
    })
    return count;
}

export {productList, productMap, productReviews, categoryList, reviewCount};