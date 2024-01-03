import pic1 from "./img/classicGuitar.jpg"
import pic2 from "./img/גיטרה אקוסטית.jpg"
import pic3 from "./img/גיטרה חשמלית.jpg"
import pic4 from "./img/יוקולילי.jpg"
import pic5 from "./img/כינור.png"
import pic6 from "./img/צלו.png"
import pic7 from "./img/חליל צד.jpg"
import pic8 from "./img/חליל.jpg"
import pic9 from "./img/חצוצרה.jpg"
import pic10 from "./img/טרומבון.jpg"
import pic11 from "./img/קרן יער.jpg"
import pic12 from "./img/סקסופון.jpg"
import pic13 from "./img/אורגנית.jpg"
import pic14 from "./img/פסנתר.jpg"
import pic15 from "./img/פסנתרי-כנף.png"
import pic16 from "./img/מערכת תופים חשמלית.jpg"
import pic17 from "./img/תופים.jpg"
import pic18 from "./img/דרבוקה טורקית.jpg"
import pic19 from "./img/דרבוקה מצרית.jpg"
import pic20 from "./img/דרבוקת עץ.jpg"
import pic21 from "./img/אקורדיון.jpg"
import pic22 from "./img/מלודיקה.jpg"
import pic23 from "./img/מפוחית.jpg"

const products = [
    {
        id: "100",
        name: "Classic Guitar",
        qty: 1,
        price: 400,
        img: pic1,
        description: "the best guitar"

    },
    {
        id: "101",
        name: "Acoustic Guitar",
        qty: 30,
        price: 800,
        img: pic2,
        description: "the best  acoustic guitar"

    },
    {
        id: "102",
        name: "Electric Guitar",
        qty: 20,
        price: 1000,
        img: pic3,
        description: "the best Electric Guitar"

    },
    {
        id: "103",
        name: "Ukulele",
        qty: 10,
        price: 250,
        img: pic4,
        description: "the best Ukulele"

    },
    {
        id: "104",
        name: "Violin",
        qty: 40,
        price: 1500,
        img: pic5,
        description: "the best Violin"

    },
    {
        id: "105",
        name: "Cello",
        qty: 10,
        price: 2000,
        img: pic6,
        description: "the best Cello"

    },
    {
        id: "106",
        name: "Flute",
        qty: 30,
        price: 300,
        img: pic7,
        description: "the best Flute"

    },
    {
        id: "107",
        name: "Recorder",
        qty: 15,
        price: 150,
        img: pic8,
        description: "the best Recorder"

    },
    {
        id: "108",
        name: "Trumpet",
        qty: 25,
        price: 500,
        img: pic9,
        description: "the best Trumpet"

    },
    {
        id: "109",
        name: "Trombone",
        qty: 20,
        price: 600,
        img: pic10,
        description: "the best Trombone"

    },
    {
        id: "110",
        name: "French Horn",
        qty: 10,
        price: 1200,
        img: pic11,
        description: "the best French Horn"

    },
    {
        id: "111",
        name: "Saxophone",
        qty: 85,
        price: 800,
        img: pic12,
        description: "the best Saxophone"

    },
    {
        id: "112",
        name: "Electronic keyboard",
        qty: 20,
        price: 1000,
        img: pic13,
        description: "the best Recorder"

    },
    {
        id: "113",
        name: "Piano",
        qty: 10,
        price: 5000,
        img: pic14,
        description: "the best Piano"

    },
    {
        id: "114",
        name: "Grand Piano",
        qty: 10,
        price: 8000,
        img: pic15,
        description: "the best Grand Piano"

    },
    {
        id: "115",
        name: "Electric Drum Set",
        qty: 15,
        price: 2000,
        img: pic16,
        description: "the best Electric Drum Set"

    },
    {
        id: "116",
        name: "Drum Set",
        qty: 15,
        price: 2000,
        img: pic17,
        description: "the best Electric Drumm System"

    },
    {
        id: "117",
        name: "Turkish Darbuka",
        qty: 30,
        price: 200,
        img: pic18,
        description: "the best Turkish Darbuka"

    },
    {
        id: "118",
        name: "Egyptian Darbuka",
        qty: 30,
        price: 200,
        img: pic19,
        description: "the best Egyptian Darbuka"

    },
    {
        id: "119",
        name: "Wooden Darbuka",
        qty: 30,
        price: 200,
        img: pic20,
        description: "the best Wooden Darbuka"

    },
    {
        id: "120",
        name: "Accordion",
        qty: 30,
        price: 600,
        img: pic21,
        description: "the best Accordion"

    },
    {
        id: "121",
        name: "Melodica",
        qty: 100,
        price: 150,
        img: pic22,
        description: "the best Melodica"

    },
    {
        id: "122",
        name: "Harmonica",
        qty: 100,
        price: 150,
        img: pic23,
        description: "the best Harmonica"

    }
]
const productReducer = (state = products, action) => {
    switch(action.type){
        case "DECREASEQTY": {
            const index = state.findIndex(item => item.id === action.payload)
            const tempArray = [...state];
            tempArray[index].qty=tempArray[index].qty-1;
            state = [...tempArray];
            return(state)
        }
        case "ADDQTY": {
            const index = state.findIndex(item => item.id === action.payload.id)
            const tempArray = [...state];
            tempArray[index].qty= tempArray[index].qty+ action.payload.qty;
            state = [...tempArray];
            return(state)
        }
    }

    return state;
};

export default productReducer;

