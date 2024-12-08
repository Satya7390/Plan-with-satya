import agraImage from "./assets/agra.jpg";
import amritsarImage from "./assets/delhi.jpg";
import bangaloreImage from "./assets/bangalore.jpg";
import bhopalImage from "./assets/bhopal.jpg";
import chennaiImage from "./assets/chennai.jpg";
import cochinImage from "./assets/cochin.jpg";
import delhiImage from "./assets/delhi.jpg";
import hyderabadImage from "./assets/hyderabad.jpg";
import jaipurImage from "./assets/jaipur.jpg";
import jaisalmerImage from "./assets/jaisalmer.jpg";
import jodhpurImage from "./assets/jodhpur.jpg";
import khajurahoImage from "./assets/khajuraho.jpg";
import kolkataImage from "./assets/kolkata.jpg";
import lucknowImage from "./assets/lucknow.jpeg";
import mumbaiImage from "./assets/mumbai.jpg";
import mysoreImage from "./assets/mysore.jpeg";
import orchhaImage from "./assets/orchha.jpg";
import puneImage from "./assets/pune.jpg";
import varanasiImage from "./assets/varanasi.jpg";

const data = [
    {
        id: 1,
        name: "Agra",
        info: "Agra is a city in northern India, known for the iconic Taj Mahal, a stunning white marble mausoleum built by Mughal emperor Shah Jahan in memory of his beloved wife. Agra is also home to several other historic and architectural wonders, including Agra Fort and Fatehpur Sikri.",
        image: agraImage,
        price: "35,758",
    },
    {
        id: 2,
        name: "Amritsar",
        info: "Amritsar, located in the northwestern state of Punjab, India, is renowned for the Golden Temple, a breathtaking spiritual site for Sikhs, surrounded by a serene water tank. The city also holds significant historical importance, including Jallianwala Bagh, a memorial for the tragic massacre during India's freedom struggle. Amritsar's vibrant bazaars offer authentic Punjabi cuisine and handicrafts.",
        image: amritsarImage,
        price: "30,000",
    },
    {
        id: 3,
        name: "Bangalore",
        info: "Bangalore, also known as Bengaluru, is the capital of Karnataka and India's leading IT hub. The city is famous for its pleasant climate, lush green spaces like Lalbagh Botanical Garden and Cubbon Park, and its dynamic blend of traditional and modern cultures. It also houses iconic landmarks such as the Bangalore Palace and Vidhana Soudha.",
        image: bangaloreImage,
        price: "28,500",
    },
    {
        id: 4,
        name: "Bhopal",
        info: "Bhopal, the capital of Madhya Pradesh, is often referred to as the 'City of Lakes' due to its beautiful natural and artificial lakes. The city offers a mix of heritage and modernity, with landmarks like the historic Taj-ul-Masjid, the Bharat Bhavan arts complex, and the Upper Lake. It is also a gateway to nearby UNESCO World Heritage Sites like Sanchi.",
        image: bhopalImage,
        price: "25,000",
    },
    {
        id: 5,
        name: "Chennai",
        info: "Chennai, the capital of Tamil Nadu, is a bustling coastal city famous for its Dravidian-style temples such as the Kapaleeshwarar Temple and its colonial-era landmarks like Fort St. George. Marina Beach, one of the longest beaches in the world, and the vibrant cultural festivals add to its charm, making Chennai a blend of heritage and modernity.",
        image: chennaiImage,
        price: "32,000",
    },
    {
        id: 6,
        name: "Cochin",
        info: "Cochin, or Kochi, is a major port city in Kerala known as the 'Queen of the Arabian Sea.' This vibrant city is famous for its Chinese fishing nets, colonial architecture in Fort Kochi, and serene backwaters. The Mattancherry Palace and the Paradesi Synagogue highlight its rich history and cultural diversity.",
        image: cochinImage,
        price: "29,800",
    },
    {
        id: 7,
        name: "Delhi",
        info: "Delhi, the capital city of India, is a captivating blend of ancient and modern worlds. It boasts iconic historical monuments like the Red Fort, Qutub Minar, and Humayun's Tomb, alongside bustling markets such as Chandni Chowk. The city's modern attractions, including India Gate and Rashtrapati Bhavan, reflect its status as the heart of the nation.",
        image: delhiImage,
        price: "42,000",
    },
    {
        id: 8,
        name: "Hyderabad",
        info: "Hyderabad, the capital of Telangana, is a city of contrasts, blending its historic heritage with a thriving IT industry. The Charminar and Golconda Fort are iconic reminders of its royal past, while Ramoji Film City and HITEC City showcase its modern identity. Hyderabad is also famed for its delectable Hyderabadi biryani.",
        image: hyderabadImage,
        price: "33,500",
    },
    {
        id: 9,
        name: "Jaipur",
        info: "Jaipur, known as the 'Pink City,' is the capital of Rajasthan and a UNESCO World Heritage Site. The city is famous for its majestic palaces like City Palace, historic forts such as Amber Fort and Nahargarh Fort, and the intricately designed Hawa Mahal. Jaipur's vibrant markets are a paradise for shopping traditional Rajasthani textiles and jewelry.",
        image: jaipurImage,
        price: "28,200",
    },
    {
        id: 10,
        name: "Jaisalmer",
        info: "Jaisalmer, located in the heart of the Thar Desert in Rajasthan, is known as the 'Golden City' for its stunning yellow sandstone architecture. The Jaisalmer Fort, a living fort with bustling markets and homes, is a highlight, along with Sam Sand Dunes, where you can experience the beauty of the desert.",
        image: jaisalmerImage,
        price: "34,700",
    },
    {
        id: 11,
        name: "Jodhpur",
        info: "Jodhpur, often called the 'Blue City' of Rajasthan, is renowned for its blue-painted houses and the imposing Mehrangarh Fort, offering stunning views of the city. The bustling markets and the grand Umaid Bhawan Palace add to Jodhpur's royal allure.",
        image: jodhpurImage,
        price: "26,000",
    },
    {
        id: 12,
        name: "Khajuraho",
        info: "Khajuraho, located in Madhya Pradesh, is celebrated for its exquisite temples, a UNESCO World Heritage Site. These temples are famous for their intricate sculptures and carvings, depicting various aspects of life, love, and spirituality from the Chandela dynasty.",
        image: khajurahoImage,
        price: "27,500",
    },
    {
        id: 13,
        name: "Kolkata",
        info: "Kolkata, the capital of West Bengal, is a cultural hub known for its colonial-era architecture, vibrant festivals like Durga Puja, and intellectual legacy. Key attractions include the Howrah Bridge, Victoria Memorial, and the historic Indian Museum.",
        image: kolkataImage,
        price: "31,900",
    },
    {
        id: 14,
        name: "Lucknow",
        info: "Lucknow, the capital of Uttar Pradesh, is known for its Nawabi heritage and rich cultural history. Bara Imambara, Chota Imambara, and Rumi Darwaza are architectural marvels that reflect the city's grandeur, alongside its famous Awadhi cuisine.",
        image: lucknowImage,
        price: "24,500",
    },
    {
        id: 15,
        name: "Mumbai",
        info: "Mumbai, the financial capital of India, is a vibrant metropolis known for its iconic Gateway of India, Marine Drive, and the bustling film industry of Bollywood. The city offers a unique mix of colonial-era landmarks, modern skyscrapers, and lively street culture.",
        image: mumbaiImage,
        price: "50,000",
    },
    {
        id: 16,
        name: "Mysore",
        info: "Mysore, a cultural capital in Karnataka, is famous for the opulent Mysore Palace, the Chamundi Hills, and its colorful Dasara festival. Known as the 'City of Palaces,' Mysore also offers a vibrant art and crafts scene.",
        image: mysoreImage,
        price: "29,000",
    },
    {
        id: 17,
        name: "Orchha",
        info: "Orchha, located in Madhya Pradesh, is a historic town known for its palatial forts and temples set along the Betwa River. Highlights include Orchha Fort, Jahangir Mahal, and the beautiful Chaturbhuj Temple.",
        image: orchhaImage,
        price: "22,000",
    },
    {
        id: 18,
        name: "Pune",
        info: "Pune, often referred to as the 'Oxford of the East,' is a vibrant city in Maharashtra known for its educational institutions, historical landmarks like Shaniwar Wada and Aga Khan Palace, and thriving cultural scene. Pune is also recognized for its pleasant weather, lively markets, and numerous nearby hill stations like Lonavala and Khandala.",
        image: puneImage,
        price: "30,200",
    },
    {
        id: 19,
        name: "Varanasi",
        info: "Varanasi, one of the world's oldest cities, is located on the banks of the sacred Ganges River. It is a major cultural and religious hub in India, famous for its ghats, temples, and rituals that take place along the river. The Kashi Vishwanath Temple and Sarnath are among the most important historical and spiritual landmarks in the city.",
        image: varanasiImage,
        price: "18,500",
    },
];

export default data;