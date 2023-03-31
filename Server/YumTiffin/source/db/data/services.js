const mongoose = require("mongoose");

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
];

const services = [{
    "_id": {
        "$oid": "6423381a3cd3e073da207d73"
    },
    "name": "The Krishnas",
    "description": "Best tiffin service in Anand! We welcome you to the Krishnas!!",
    "city": "Anand",
    "tiffins": [{
        "tiffin": "Small"
    }],
    "owner": "Jash",
    "email": "support@thekrishnas.com"
}, {
    "_id": {
        "$oid": "642338e43cd3e073da207d78"
    },
    "name": "Mom's Cafe",
    "description": "Pizzas, burgers & other fast food served with freakshakes & desserts in an exposed-brick space.",
    "city": "Anand",
    "tiffins": [{
        "tiffin": "Large"
    }],
    "owner": "Mom",
    "email": "momscafe@gmail.com:"
}, {
    "_id": {
        "$oid": "642338e43cd3e073da207d69"
    },
    "name": "The Ackermans",
    "description": "Best tiffins for the students, titans not allowed. Hungry from killing the titans, order from The Ackermans",
    "city": "Anand",
    "tiffins": [{
        "tiffin": "Large"
    }],
    "owner": "Levi Ackerman",
    "email": "theackemans@gmail.com:"
}, {
    "_id": {
        "$oid": "642338e43cd3e073da207d70"
    },
    "name": "Gigil Tiffin Service",
    "description": "Who's the best tiffin service in Anand? You know it, so do I.",
    "city": "Anand",
    "tiffins": [{
        "tiffin": "Large"
    }],
    "owner": "Ayush J Luhar",
    "email": "gigilTiffins.com:"
}, {
    "_id": {
        "$oid": "642338e43cd3e073da207d01"
    },
    "name": "APC Tiffin Services",
    "description": "God's Angel",
    "city": "Anand",
    "tiffins": [{
        "tiffin": "Large"
    }],
    "owner": "Jinesh Dolia",
    "email": "jineshD@apc.com"
}, {
    "_id": {
        "$oid": "642338e43cd3e073da207d10"
    },
    "name": "Gandhis",
    "description": "Jain tiffins available!!",
    "city": "Anand",
    "tiffins": [{
        "tiffin": "Large"
    }],
    "owner": "Kavan Gandhi",
    "email": "kavan.gandhi@gmail.com"
}, {
    "_id": {
        "$oid": "642338e43cd3e073da207420"
    },
    "name": "BTS",
    "description": "The BTS, Ahmedabad's oldest tiffin services, was founded in 1856 when, according to legend. Today, no one can pinpoint the house’s exact location, but it was most likely on the edge of present-day new Ahmedabad. ",
    "city": "Ahemdabad",
    "tiffins": [{
        "tiffin": "Large"
    }],
    "owner": "Jung Kook",
    "email": "jung@bts.com"
}, {
    "_id": {
        "$oid": "642338e43cd3e073da207d45"
    },
    "name": "Ichiraku",
    "description": "Best Ramen tiffin services in the Konoha. And now its available in Ahmedabad!",
    "city": "Ahmedabad",
    "tiffins": [{
        "tiffin": "Large"
    }],
    "owner": "Teuchi",
    "email": "support.ichiraku@naruto.com"
}, {
    "_id": {
        "$oid": "642338e43cd3e073da207d34"
    },
    "name": "Baratie",
    "description": "The Baratie is an ocean-going restaurant, run by Zeff. Also serves best tiffins and your time!! We have the best workers like Vinsmoke Sanji.",
    "city": "Ahmedabad",
    "tiffins": [{
        "tiffin": "Large"
    }],
    "owner": "Zeff",
    "email": "support.zeff@onepiece.com"
}]

module.exports = services;