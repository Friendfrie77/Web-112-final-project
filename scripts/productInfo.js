const categoryList = {
    0 : 'Tools',
    1 : 'Seeds',
    2 : 'Materials',

}
const productList = [
    {
        id: 0,
        brand: 'Dewalt',
        title : 'DCD777B 20V 0/2" Brushless Cordless Compact Drill/Driver',
        price: 100,
        category: 0,
        stock: 100,
        discription: "This 20v cordless drill comes complete with one battery and charge. It is light weight at 3 ½ pounds without the battery. The drill features 3 modes, including a standard drilling mode, one for working on masonry, and the last mode for screwing in screws with a torque limiter. It is a essential tool to have for any project, and will come in handy for doing small jobs around the house.",
        rating: 4,
        img: "images/store/items/drill/drill_front.webp",
        imgList:["images/store/items/drill/drill_front.webp", "images/store/items/drill/drill_side_branding.webp", "images/store/items/drill/drill_side_warning.webp"]
    },
    {
        id: 1,
        brand: 'Dewalt',
        title: 'Impact Driver',
        price: 100,
        category: 0,
        stock: 50,
        discription: "Are you looking for a little more power to drive home nuts or loosen bolt that have rusted from being outside for a long time? An impact drill is perfect your you. With more power than your standard drill, it can really get that nut or bolt where you want it. The impact drill comes with a battery and charger to get you started. It is the perfect tool for any project that you need to be sure is going to hold together.",
        rating: 5,
        img: "images/store/items/impact-drill.webp"
    },
    {
        id: 2,
        brand: 'Dewalt',
        title: 'Cordless saw',
        price: 140,
        category: 0,
        stock: 20,
        discription: "Do you find yourself constantly working outside and needing a cordless saw to make cuts for your projects? This lightweight saw is perfect for you. It shares batteries with the rest of the tools that we sell, making it the perfect tool to add to your collection. While it might not have the power of the larger corded tools, it is a lot more convenient when you are working on a project.",
        rating: 4.5,
        img: "images/store/items/saw.webp"
    },
    {
        id: 3,
        brand: 'Dewalt',
        title: 'Spare battery',
        price: 50,
        category: 0,
        stock: 150,
        discription: "Looking to get more run time out of your tools? Picking up a spare battery can help extend the amount of time that you can use your tools before you need to take a break. Having at least one spare battery allows you to have a battery charging while you use the tool, allowing almost no down time in your work.",
        rating: 4,
        img: "images/store/items/battery.webp"
    },
    {
        id: 4,
        brand: 'Dewalt',
        title: 'Battery Charge',
        price: 60,
        category: 0,
        stock: 70,
        discription: "Having another charger can come in handy as you can have one packed away with the drill while having one set up to charge batteries. It also allows charging more than one battery at a time. We offer models that support more than one battery at a time, just select that option at checkout",
        rating: 4,
        img: "images/store/items/battery-charger.webp"
    },
    {
        id: 5,
        
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