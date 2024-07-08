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
    },
    {
        productId: 1,
        reviewTitle: 'Powerful Impact Driver',
        rating: 5,
        review: 'This impact driver is incredibly powerful and perfect for heavy-duty jobs. It drives screws and bolts with ease, saving me a lot of time and effort. The battery life is excellent and the build quality is top-notch. Highly recommended for anyone needing a reliable and strong impact driver.',
        reviewName: 'Karen Thompson'
    },
    {
        productId: 1,
        reviewTitle: 'Excellent Tool for Tough Jobs',
        rating: 5,
        review: 'I’m extremely satisfied with this impact driver. It’s compact, lightweight, and delivers a lot of power. I’ve used it for various projects, including deck building and automotive repairs, and it has performed flawlessly every time. The battery lasts a long time, and the charger works quickly.',
        reviewName: 'David Martinez'
    },
    {
        productId: 1,
        reviewTitle: 'High Torque and Durable',
        rating: 5,
        review: 'This Dewalt impact driver is a beast when it comes to torque. It’s handled everything I’ve thrown at it without any issues. The grip is comfortable, and the tool feels balanced in hand. It’s a great addition to my toolkit and makes driving screws and bolts much easier and faster.',
        reviewName: 'Linda Clark'
    },
    {
        productId: 1,
        reviewTitle: 'Top-Notch Impact Driver',
        rating: 5,
        review: 'The Dewalt impact driver is a fantastic tool for both professionals and DIY enthusiasts. It’s powerful, easy to use, and built to last. The battery life is impressive, and it charges quickly. I’ve used it for a variety of tasks, and it has performed exceptionally well every time. I highly recommend it.',
        reviewName: 'Brian Wilson'
    },
    {
        productId: 1,
        reviewTitle: 'Perfect for Heavy-Duty Tasks',
        rating: 5,
        review: 'This impact driver has exceeded my expectations in every way. It’s powerful, reliable, and the battery life is outstanding. I’ve used it for several heavy-duty projects, and it has never let me down. The build quality is excellent, and it’s very comfortable to use. A must-have for anyone serious about their tools.',
        reviewName: 'Jessica Hernandez'
    },
    {
        productId: 2,
        reviewTitle: 'Powerful and Lightweight',
        rating: 5,
        review: 'This circular saw is a powerhouse! It cuts through wood like butter and is incredibly easy to handle. The battery lasts long enough to get through most of my projects without needing a recharge. It’s lightweight and the ergonomic design makes it comfortable to use for extended periods. Highly recommended!',
        reviewName: 'Robert Lee'
    },
    {
        productId: 2,
        reviewTitle: 'Great Circular Saw for the Price',
        rating: 4,
        review: 'I’ve been very impressed with this saw so far. It’s powerful and the battery life is good. It’s also compatible with my other Dewalt 20V tools, which is a huge plus. The only minor issue I’ve had is with the blade guard, which can sometimes get in the way. Overall, a great tool at a reasonable price.',
        reviewName: 'Patricia Anderson'
    },
    {
        productId: 2,
        reviewTitle: 'Solid Performance',
        rating: 4,
        review: 'I use this saw regularly for my woodworking projects and it has performed reliably. It’s easy to adjust the depth and angle of the cut, and the battery charges quickly. The saw is a bit heavier than I expected, but it’s manageable. Overall, I’m very satisfied with its performance.',
        reviewName: 'Steven Harris'
    },
    {
        productId: 2,
        reviewTitle: 'Good Value for Money',
        rating: 4,
        review: 'This circular saw offers good value for money. It’s powerful, versatile, and the battery life is decent. I’ve used it for various DIY projects and it has worked well every time. The saw can get a bit warm during prolonged use, but it hasn’t been a major issue for me. A solid choice for the price.',
        reviewName: 'Jennifer Miller'
    },
    {
        productId: 2,
        reviewTitle: 'Excellent Cordless Saw',
        rating: 5,
        review: 'This Dewalt circular saw is excellent for on-the-go cutting. It’s powerful, and the battery life is impressive. The saw is easy to handle and the cuts are clean and precise. I’m very happy with this purchase and would highly recommend it to anyone looking for a reliable cordless saw.',
        reviewName: 'Paul White'
    },
    {
        productId: 3,
        reviewTitle: 'Essential Spare Battery',
        rating: 5,
        review: 'This spare battery is a must-have for anyone using Dewalt 20V tools. It provides long-lasting power and charges relatively quickly. Having an extra battery on hand means I can keep working without any interruptions. Highly recommended!',
        reviewName: 'Amanda Lopez'
    },
    {
        productId: 3,
        reviewTitle: 'Great Backup Battery',
        rating: 4,
        review: 'This battery works well and lasts a good amount of time. It’s perfect as a backup for my Dewalt tools. The only downside is the price, which is a bit high for a single battery. However, it’s worth it for the convenience of having a spare.',
        reviewName: 'James Garcia'
    },
    {
        productId: 3,
        reviewTitle: 'Reliable and Long-Lasting',
        rating: 4,
        review: 'I’ve been using this spare battery for a few months now and it has been very reliable. It holds a charge well and powers my tools effectively. It’s a bit pricey, but the quality and performance make it worth the investment. A good choice for anyone needing extra power for their Dewalt tools.',
        reviewName: 'Mary Martinez'
    },
    {
        productId: 3,
        reviewTitle: 'Solid Battery Performance',
        rating: 4,
        review: 'This battery performs solidly and provides a good amount of run time. It’s perfect for longer projects where a single battery isn’t enough. The charging time is reasonable, and the build quality is excellent. Overall, I’m very happy with this purchase.',
        reviewName: 'Robert Brown'
    },
    {
        productId: 3,
        reviewTitle: 'Dependable Spare Battery',
        rating: 4,
        review: 'This spare battery is dependable and ensures I always have enough power for my tools. It charges quickly and holds a charge well. The price is a bit steep, but the performance and reliability make it a worthwhile investment. Highly recommended for anyone using Dewalt 20V tools.',
        reviewName: 'Patricia Wilson'
    },
    {
        productId: 4,
        reviewTitle: 'Fast and Reliable Charger',
        rating: 5,
        review: 'This charger works very quickly and is reliable. It charges my Dewalt batteries faster than I expected, which is great when I’m in the middle of a project. It’s also compact and doesn’t take up much space. Highly recommended for anyone using Dewalt tools.',
        reviewName: 'John Smith'
    },
    {
        productId: 4,
        reviewTitle: 'Good Charger but Pricey',
        rating: 3,
        review: 'The charger works well and charges my batteries fairly quickly. However, I find the price to be a bit high for a single charger. It’s a good product, but I wish it were a bit more affordable.',
        reviewName: 'Sarah Johnson'
    },
    {
        productId: 4,
        reviewTitle: 'Solid Performance',
        rating: 4,
        review: 'This charger performs solidly and charges my batteries efficiently. It’s easy to use and compact, making it convenient to carry around. The only downside is that it can get a bit warm during use. Overall, I’m satisfied with its performance.',
        reviewName: 'Michael Brown'
    },
    {
        productId: 4,
        reviewTitle: 'Decent Charger',
        rating: 3,
        review: 'The charger does its job, but it’s nothing exceptional. It charges the batteries, but it takes a bit longer than I would like. It’s also a bit bulky compared to other chargers I’ve used. It works, but there’s room for improvement.',
        reviewName: 'Emily Davis'
    },
    {
        productId: 4,
        reviewTitle: 'Works Well but Overpriced',
        rating: 3,
        review: 'This charger works well and charges my batteries without any issues. However, I think it’s overpriced for what it is. It’s a good product, but I would expect a lower price point. It’s reliable, but not worth the high cost in my opinion.',
        reviewName: 'James Wilson'
    },
    {
        productId: 5,
        reviewTitle: 'Amazing Combo Kit',
        rating: 5,
        review: 'This combo kit is fantastic! Both the drill and impact driver are powerful and easy to use. The batteries last a long time and the rapid charger is very convenient. The build quality is excellent, and the tools are comfortable to hold. Highly recommended for anyone looking for a reliable combo kit.',
        reviewName: 'Chris Evans'
    },
    {
        productId: 5,
        reviewTitle: 'Great Value for Money',
        rating: 5,
        review: 'I’m very pleased with this combo kit. The tools are powerful and the battery life is impressive. The charger works quickly, and the overall build quality is top-notch. It’s a bit pricey, but considering the quality and performance, it’s definitely worth the investment.',
        reviewName: 'Jessica Johnson'
    },
    {
        productId: 5,
        reviewTitle: 'Solid Performance',
        rating: 4,
        review: 'The Makita combo kit offers solid performance. The tools are powerful and the batteries last a long time. The charger is fast and the tools are comfortable to use. The only downside is the price, which is a bit high, but the quality makes it worth it.',
        reviewName: 'Daniel Lee'
    },
    {
        productId: 5,
        reviewTitle: 'High-Quality Tools',
        rating: 5,
        review: 'These Makita tools are of very high quality. The drill and impact driver are both powerful and efficient. The batteries last a long time and the charger is very fast. The tools are comfortable to hold and easy to use. I highly recommend this combo kit to anyone looking for reliable tools.',
        reviewName: 'Rebecca Smith'
    },
    {
        productId: 5,
        reviewTitle: 'Excellent Combo Kit',
        rating: 5,
        review: 'This combo kit is excellent. The tools are powerful and the battery life is great. The rapid charger is very convenient and the overall build quality is impressive. The tools are easy to use and handle. Highly recommended for both professionals and DIY enthusiasts.',
        reviewName: 'Matthew Davis'
    },
    {
        productId: 6,
        reviewTitle: 'Versatile but Lacks Power',
        rating: 2,
        review: 'This drill/driver system is very versatile with its multiple attachments, but it lacks the power I expected. It’s great for small, light-duty tasks, but struggles with anything more demanding. The battery life is also quite short. Overall, it’s a bit disappointing given the price.',
        reviewName: 'Michael Taylor'
    },
    {
        productId: 6,
        reviewTitle: 'Good for Tight Spaces',
        rating: 3,
        review: 'This tool is useful for working in tight spaces and difficult angles. However, the power is quite limited and it’s not suitable for heavy-duty tasks. The battery life is also relatively short. It’s a decent tool for specific tasks, but not very versatile for larger projects.',
        reviewName: 'Lisa Thompson'
    },
    {
        productId: 6,
        reviewTitle: 'Not Worth the Price',
        rating: 2,
        review: 'I had high hopes for this drill/driver system, but it has not lived up to my expectations. The attachments are useful, but the tool lacks power and the battery life is poor. It’s overpriced for what it offers. I would not recommend it for anyone needing a robust and reliable tool.',
        reviewName: 'David Wilson'
    },
    {
        productId: 6,
        reviewTitle: 'Handy but Underpowered',
        rating: 2,
        review: 'This tool is handy for certain tasks, especially in tight spaces, but it’s seriously underpowered. It struggles with even moderately tough materials and the battery life is disappointing. It’s also a bit pricey for what it offers. I would not buy it again.',
        reviewName: 'Sarah Brown'
    },
    {
        productId: 6,
        reviewTitle: 'Useful but Flawed',
        rating: 3,
        review: 'The Flexiclick system is useful for working in tight spaces, but the overall performance is lacking. The power is insufficient for many tasks and the battery life is short. It’s a decent tool for very specific uses, but not versatile or powerful enough for general use.',
        reviewName: 'Mark Johnson'
    },
    {
        productId: 7,
        reviewTitle: 'Outstanding Combo Kit',
        rating: 5,
        review: 'This Milwaukee combo kit is outstanding! Both the hammer drill and impact driver are incredibly powerful and efficient. The batteries last a long time and the charger is quick. The tools are well-built and comfortable to use. Highly recommended for anyone needing reliable and powerful tools.',
        reviewName: 'Emily Clark'
    },
    {
        productId: 7,
        reviewTitle: 'Best Combo Kit I’ve Used',
        rating: 5,
        review: 'This is by far the best combo kit I’ve ever used. The tools are extremely powerful and the battery life is excellent. The charger is very fast and the build quality is superb. The tools are comfortable to handle and easy to use. I highly recommend this combo kit to anyone looking for top-quality tools.',
        reviewName: 'Brian Martinez'
    },
    {
        productId: 7,
        reviewTitle: 'Top-Quality Tools',
        rating: 5,
        review: 'The Milwaukee M18 Fuel combo kit is top-quality. The hammer drill and impact driver are both very powerful and efficient. The batteries last a long time and the charger is quick. The tools are well-designed and easy to use. I’m very happy with this purchase and highly recommend it.',
        reviewName: 'Karen Thompson'
    },
    {
        productId: 7,
        reviewTitle: 'Excellent Performance',
        rating: 5,
        review: 'This combo kit offers excellent performance. The tools are powerful, the batteries last a long time, and the charger is fast. The build quality is exceptional and the tools are comfortable to use. Highly recommended for anyone needing reliable and high-performing tools.',
        reviewName: 'John Lee'
    },
    {
        productId: 7,
        reviewTitle: 'Worth Every Penny',
        rating: 5,
        review: 'This Milwaukee combo kit is worth every penny. The tools are incredibly powerful and efficient, and the batteries last a long time. The charger is fast and the build quality is top-notch. The tools are easy to use and handle. I highly recommend this combo kit to anyone looking for reliable and high-quality tools.',
        reviewName: 'Susan Walker'
    },
    {
        productId: 8,
        reviewTitle: 'Great Value for Money',
        rating: 5,
        review: 'This Ryobi contractor kit is an excellent value for money. The tools are powerful and versatile, and the batteries last a long time. The charger is quick and the overall build quality is impressive. I highly recommend this kit for both DIY enthusiasts and professionals.',
        reviewName: 'Laura White'
    },
    {
        productId: 8,
        reviewTitle: 'Solid Performance',
        rating: 4,
        review: 'The Ryobi contractor kit offers solid performance. The tools are powerful and the batteries last a decent amount of time. The charger works quickly and the tools are comfortable to use. The only downside is that the tools are a bit bulky, but overall, it’s a great kit.',
        reviewName: 'David Brown'
    },
    {
        productId: 8,
        reviewTitle: 'Versatile and Reliable',
        rating: 5,
        review: 'This kit is very versatile and reliable. The tools are powerful and the batteries last a long time. The charger is quick and the tools are well-built. The only minor issue is that the tools are a bit heavier than expected. Overall, a great purchase.',
        reviewName: 'Samantha Green'
    },
    {
        productId: 8,
        reviewTitle: 'Good Quality Tools',
        rating: 4,
        review: 'The Ryobi contractor kit includes good quality tools. They are powerful and the batteries last a decent amount of time. The charger is efficient and the tools are comfortable to use. The only downside is that the tools are a bit bulky, but overall, it’s a solid kit.',
        reviewName: 'Michael Black'
    },
    {
        productId: 8,
        reviewTitle: 'Impressive Kit',
        rating: 5,
        review: 'This Ryobi contractor kit is impressive. The tools are powerful and versatile, and the batteries last a long time. The charger is quick and the overall build quality is excellent. I highly recommend this kit for both DIY enthusiasts and professionals.',
        reviewName: 'James Brown'
    },
    {
        productId: 9,
        reviewTitle: 'Great Variety of Tools',
        rating: 4,
        review: 'This combo kit includes a great variety of tools, making it very versatile. The tools are powerful and the batteries last a decent amount of time. The charger is quick and the tools are comfortable to use. The only downside is that some of the tools feel a bit cheap, but overall, it’s a good kit.',
        reviewName: 'Laura White'
    },
    {
        productId: 9,
        reviewTitle: 'Decent Performance',
        rating: 3,
        review: 'The Porter-Cable combo kit offers decent performance. The tools are powerful enough for most tasks, but the battery life is shorter than I expected. The charger works quickly, but some of the tools feel a bit flimsy. It’s a good kit, but there’s room for improvement.',
        reviewName: 'David Brown'
    },
    {
        productId: 9,
        reviewTitle: 'Good Value for Money',
        rating: 4,
        review: 'This kit is a good value for money. The tools are versatile and the batteries last a decent amount of time. The charger is quick and the tools are comfortable to use. The only downside is that some of the tools feel a bit cheap, but overall, it’s a solid kit.',
        reviewName: 'Samantha Green'
    },
    {
        productId: 9,
        reviewTitle: 'Versatile but Not Durable',
        rating: 3,
        review: 'The combo kit is versatile, but the durability of the tools is questionable. Some of the tools feel flimsy and the battery life is shorter than expected. The charger works well, but overall, I’m a bit disappointed with the quality. It’s a good kit for light-duty tasks, but not for heavy-duty work.',
        reviewName: 'Michael Black'
    },
    {
        productId: 9,
        reviewTitle: 'Good Starter Kit',
        rating: 4,
        review: 'This combo kit is a good starter kit for someone new to DIY projects. The tools are versatile and the batteries last a decent amount of time. The charger is quick and the tools are comfortable to use. The only downside is that some of the tools feel a bit cheap, but overall, it’s a solid kit.',
        reviewName: 'James Brown'
    },
    {
        productId: 10,
        reviewTitle: 'Excellent Solar Panel',
        rating: 5,
        review: 'This solar panel is excellent. It’s very efficient and easy to install. The build quality is great and it performs well even in low light conditions. I’m very happy with this purchase and highly recommend it to anyone looking for a reliable solar panel.',
        reviewName: 'John Smith'
    },
    {
        productId: 10,
        reviewTitle: 'Great Performance',
        rating: 5,
        review: 'The Renogy solar panel performs exceptionally well. It’s very efficient and provides a good amount of power even on cloudy days. The build quality is solid and it’s easy to install. I highly recommend this panel to anyone looking for a high-quality solar solution.',
        reviewName: 'Sarah Johnson'
    },
    {
        productId: 10,
        reviewTitle: 'Highly Efficient',
        rating: 5,
        review: 'This solar panel is highly efficient and provides a good amount of power. It’s easy to install and the build quality is excellent. I’m very satisfied with its performance and would highly recommend it to others.',
        reviewName: 'Michael Brown'
    },
    {
        productId: 10,
        reviewTitle: 'Great Value for Money',
        rating: 4,
        review: 'The Renogy solar panel offers great value for money. It’s very efficient and easy to install. The build quality is solid and it performs well even in low light conditions. The only downside is that it’s a bit pricey, but overall, it’s a great product.',
        reviewName: 'Emily Davis'
    },
    {
        productId: 10,
        reviewTitle: 'Reliable and Efficient',
        rating: 5,
        review: 'This solar panel is very reliable and efficient. It provides a good amount of power even on cloudy days and is easy to install. The build quality is excellent and it’s very durable. I highly recommend this panel to anyone looking for a reliable solar solution.',
        reviewName: 'James Wilson'
    },
];


const reviewCount = (id) =>{
    let count = 0;
    productReviews.forEach(review =>{
        if(review.productId === id){
            count ++
        }
    })
    return count;
}

const reviewSpread = (id) =>{
    let reviewSpreadCount = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    }
    const filteredReviews = productReviews.filter(review => review.productId === id)
    filteredReviews.forEach(review =>{
        reviewSpreadCount[review.rating] += 1
    })
    console.log(reviewSpreadCount)
    return reviewSpreadCount
}

export {productReviews, reviewCount, reviewSpread}