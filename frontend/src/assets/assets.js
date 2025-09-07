import basket_icon from './basket_icon.png'
import search_icon from './search_icon.png'


// Product images
import jewelry_1 from './products/jewellery-1.jpg'
import jewelry_2 from './products/jewellery-2.jpg'
import jewelry_3 from './products/jewellery-3.jpg'
import perfume from './products/perfume.jpg'
import shampoo from './products/shampoo.jpg'
import w_clothes_1 from './products/w-clothes-1.jpg'
import w_clothes_2 from './products/w-clothes-2.jpg'
import w_clothes_3 from './products/w-clothes-3.jpg'
import w_clothes_4 from './products/w-clothes-4.jpg'
import m_clothing_1 from './products/m-clothing-1.jpg'
import m_clothing_2 from './products/m-clothing-2.jpg'
import jacket_1 from './products/jacket-1.jpg'
import jacket_2 from './products/jacket-2.jpg'
import jacket_3 from './products/jacket-3.jpg'
import jacket_4 from './products/jacket-4.jpg'
import jacket_5 from './products/jacket-5.jpg'
import jacket_6 from './products/jacket-6.jpg'
import watch_1 from './products/watch-1.jpg'
import watch_2 from './products/watch-2.jpg'
import watch_3 from './products/watch-3.jpg'
import watch_4 from './products/watch-4.jpg'
import sports_1 from './products/sports-1.jpg'
import sports_2 from './products/sports-2.jpg'
import sports_3 from './products/sports-3.jpg'
import sports_4 from './products/sports-4.jpg'
import sports_5 from './products/sports-5.jpg'
import sports_6 from './products/sports-6.jpg'
import shoe_1 from './products/shoe-1.jpg'
import shoe_2 from './products/shoe-2.jpg'
import shoe_3 from './products/shoe-3.jpg'
import shoe_4 from './products/shoe-4.jpg'
import shoe_5 from './products/shoe-5.jpg'
import shoe_6 from './products/shoe-6.jpg'
import shoe_7 from './products/shoe-7.jpg'
import belt from './products/belt.jpg'
import shorts_1 from './products/shorts-1.jpg'
import shorts_2 from './products/shorts-2.jpg'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    basket_icon,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const category_list = [
    {
        category_name: "Jewelry",
        category_image: jewelry_1
    },
    {
        category_name: "Beauty Products",
        category_image: perfume
    },
    {
        category_name: "Women's Clothes",
        category_image: w_clothes_1
    },
    {
        category_name: "Men's Clothes",
        category_image: m_clothing_1
    },
    {
        category_name: "Watches",
        category_image: watch_1
    },
    {
        category_name: "Sports",
        category_image: sports_1
    },
    {
        category_name: "Footwear",
        category_image: shoe_1
    },
    {
        category_name: "Jackets",
        category_image: jacket_1
    }
]

export const product_list = [
    {
        _id: "1",
        name: "Gold Chain Necklace",
        image: jewelry_1,
        price: 299,
        description: "Elegant gold chain necklace perfect for any occasion",
        category: "Jewelry"
    },
    {
        _id: "2",
        name: "Diamond Ring",
        image: jewelry_2,
        price: 899,
        description: "Beautiful diamond ring with premium quality stones",
        category: "Jewelry"
    },
    {
        _id: "3",
        name: "Silver Bracelet",
        image: jewelry_3,
        price: 149,
        description: "Stylish silver bracelet with intricate design",
        category: "Jewelry"
    },
    {
        _id: "4",
        name: "Luxury Perfume",
        image: perfume,
        price: 89,
        description: "Premium fragrance with long-lasting scent",
        category: "Beauty Products"
    },
    {
        _id: "5",
        name: "Organic Shampoo",
        image: shampoo,
        price: 24,
        description: "Natural organic shampoo for healthy hair",
        category: "Beauty Products"
    },
    {
        _id: "6",
        name: "Summer Dress",
        image: w_clothes_1,
        price: 79,
        description: "Comfortable and stylish summer dress for women",
        category: "Women's Clothes"
    },
    {
        _id: "7",
        name: "Casual Blouse",
        image: w_clothes_2,
        price: 49,
        description: "Elegant casual blouse perfect for office wear",
        category: "Women's Clothes"
    },
    {
        _id: "8",
        name: "Evening Gown",
        image: w_clothes_3,
        price: 199,
        description: "Sophisticated evening gown for special occasions",
        category: "Women's Clothes"
    },
    {
        _id: "9",
        name: "Winter Coat",
        image: w_clothes_4,
        price: 129,
        description: "Warm winter coat with premium insulation",
        category: "Women's Clothes"
    },
    {
        _id: "10",
        name: "Formal Shirt",
        image: m_clothing_1,
        price: 59,
        description: "Classic formal shirt for professional look",
        category: "Men's Clothes"
    },
    {
        _id: "11",
        name: "Casual T-Shirt",
        image: m_clothing_2,
        price: 29,
        description: "Comfortable casual t-shirt for everyday wear",
        category: "Men's Clothes"
    },
    {
        _id: "12",
        name: "Leather Jacket",
        image: jacket_1,
        price: 249,
        description: "Premium leather jacket with modern design",
        category: "Jackets"
    },
    {
        _id: "13",
        name: "Denim Jacket",
        image: jacket_2,
        price: 89,
        description: "Classic denim jacket for casual outings",
        category: "Jackets"
    },
    {
        _id: "14",
        name: "Winter Jacket",
        image: jacket_3,
        price: 159,
        description: "Warm winter jacket with water resistance",
        category: "Jackets"
    },
    {
        _id: "15",
        name: "Bomber Jacket",
        image: jacket_4,
        price: 119,
        description: "Trendy bomber jacket for modern style",
        category: "Jackets"
    },
    {
        _id: "16",
        name: "Sports Jacket",
        image: jacket_5,
        price: 139,
        description: "Lightweight sports jacket for active lifestyle",
        category: "Jackets"
    },
    {
        _id: "17",
        name: "Casual Blazer",
        image: jacket_6,
        price: 179,
        description: "Smart casual blazer for semi-formal occasions",
        category: "Jackets"
    },
    {
        _id: "18",
        name: "Luxury Watch",
        image: watch_1,
        price: 599,
        description: "Premium luxury watch with Swiss movement",
        category: "Watches"
    },
    {
        _id: "19",
        name: "Sports Watch",
        image: watch_2,
        price: 199,
        description: "Durable sports watch with fitness tracking",
        category: "Watches"
    },
    {
        _id: "20",
        name: "Classic Watch",
        image: watch_3,
        price: 299,
        description: "Elegant classic watch for formal occasions",
        category: "Watches"
    },
    {
        _id: "21",
        name: "Smart Watch",
        image: watch_4,
        price: 399,
        description: "Advanced smart watch with multiple features",
        category: "Watches"
    },
    {
        _id: "22",
        name: "Running Shoes",
        image: sports_1,
        price: 129,
        description: "Professional running shoes for athletes",
        category: "Sports"
    },
    {
        _id: "23",
        name: "Gym Equipment",
        image: sports_2,
        price: 89,
        description: "Essential gym equipment for home workouts",
        category: "Sports"
    },
    {
        _id: "24",
        name: "Sports Jersey",
        image: sports_3,
        price: 49,
        description: "Comfortable sports jersey for team activities",
        category: "Sports"
    },
    {
        _id: "25",
        name: "Basketball",
        image: sports_4,
        price: 39,
        description: "Professional basketball for indoor and outdoor play",
        category: "Sports"
    },
    {
        _id: "26",
        name: "Tennis Racket",
        image: sports_5,
        price: 159,
        description: "High-quality tennis racket for competitive play",
        category: "Sports"
    },
    {
        _id: "27",
        name: "Yoga Mat",
        image: sports_6,
        price: 29,
        description: "Non-slip yoga mat for meditation and exercise",
        category: "Sports"
    },
    {
        _id: "28",
        name: "Casual Sneakers",
        image: shoe_1,
        price: 79,
        description: "Comfortable casual sneakers for everyday wear",
        category: "Footwear"
    },
    {
        _id: "29",
        name: "Formal Shoes",
        image: shoe_2,
        price: 149,
        description: "Elegant formal shoes for business occasions",
        category: "Footwear"
    },
    {
        _id: "30",
        name: "Sport Shoes",
        image: shoe_3,
        price: 99,
        description: "High-performance sport shoes for training",
        category: "Footwear"
    },
    {
        _id: "31",
        name: "Boot Shoes",
        image: shoe_4,
        price: 179,
        description: "Sturdy boot shoes for outdoor adventures",
        category: "Footwear"
    },
    {
        _id: "32",
        name: "Canvas Shoes",
        image: shoe_5,
        price: 59,
        description: "Lightweight canvas shoes for casual wear",
        category: "Footwear"
    },
    {
        _id: "33",
        name: "Designer Heels",
        image: shoe_6,
        price: 199,
        description: "Stylish designer heels for special occasions",
        category: "Footwear"
    },
    {
        _id: "34",
        name: "Athletic Shoes",
        image: shoe_7,
        price: 119,
        description: "Professional athletic shoes for sports activities",
        category: "Footwear"
    },
    {
        _id: "35",
        name: "Leather Belt",
        image: belt,
        price: 39,
        description: "Premium leather belt with classic buckle design",
        category: "Men's Clothes"
    },
    {
        _id: "36",
        name: "Summer Shorts",
        image: shorts_1,
        price: 34,
        description: "Comfortable summer shorts for hot weather",
        category: "Men's Clothes"
    },
    {
        _id: "37",
        name: "Casual Shorts",
        image: shorts_2,
        price: 29,
        description: "Relaxed fit casual shorts for weekend wear",
        category: "Men's Clothes"
    }
]