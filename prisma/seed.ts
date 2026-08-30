import { PrismaClient, AdministrativeType } from "@prisma/client";

const prisma = new PrismaClient();

const tags = [
  {
    "slug": "beaches",
    "name": "Beaches"
  },
  {
    "slug": "heritage",
    "name": "Heritage"
  },
  {
    "slug": "culture",
    "name": "Culture"
  },
  {
    "slug": "nature",
    "name": "Nature"
  },
  {
    "slug": "wildlife",
    "name": "Wildlife"
  },
  {
    "slug": "food",
    "name": "Food"
  },
  {
    "slug": "mountains",
    "name": "Mountains"
  },
  {
    "slug": "pilgrimage",
    "name": "Pilgrimage"
  },
  {
    "slug": "adventure",
    "name": "Adventure"
  },
  {
    "slug": "city",
    "name": "City"
  },
  {
    "slug": "islands",
    "name": "Islands"
  },
  {
    "slug": "himalayas",
    "name": "Himalayas"
  }
];

const regions = [
  {
    "slug": "andhra-pradesh",
    "name": "Andhra Pradesh",
    "type": "STATE",
    "capital": "Amaravati",
    "region": "South India",
    "tagline": "Temples, coastlines and spicy cuisine.",
    "description": "A diverse state stretching from the Eastern Ghats to the Bay of Bengal, known for pilgrimage sites, beaches and Telugu culture.",
    "culture": "Telugu traditions, Kuchipudi, temple festivals, handlooms and coastal cuisine.",
    "bestTime": "October to March",
    "latitude": 16.5062,
    "longitude": 80.648,
    "destinationSlug": "tirupati",
    "destination": "Tirupati",
    "destinationTagline": "Temple town and gateway to the Eastern Ghats.",
    "destinationDescription": "A major pilgrimage destination centered on the sacred Tirumala hills.",
    "significance": "A culturally important pilgrimage center visited by millions of devotees.",
    "destinationBestTime": "September to February",
    "history": "Tirupati has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "arunachal-pradesh",
    "name": "Arunachal Pradesh",
    "type": "STATE",
    "capital": "Itanagar",
    "region": "Northeast India",
    "tagline": "Himalayan valleys, monasteries and wild landscapes.",
    "description": "India's northeastern frontier is known for high mountains, forests, rivers and diverse tribal cultures.",
    "culture": "Monpa, Nyishi and Adi traditions, Buddhist monasteries, festivals and crafts.",
    "bestTime": "October to April",
    "latitude": 27.0844,
    "longitude": 93.6053,
    "destinationSlug": "tawang",
    "destination": "Tawang",
    "destinationTagline": "High-altitude monasteries and Himalayan scenery.",
    "destinationDescription": "A mountain destination famous for its monastery, lakes and dramatic valleys.",
    "significance": "An important center of Himalayan Buddhist culture.",
    "destinationBestTime": "March to May and October to November",
    "history": "Tawang has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "assam",
    "name": "Assam",
    "type": "STATE",
    "capital": "Dispur",
    "region": "Northeast India",
    "tagline": "Tea gardens, river islands and wildlife.",
    "description": "A fertile Brahmaputra valley state celebrated for tea, wildlife and distinctive Assamese culture.",
    "culture": "Bihu, Sattriya, weaving, tea culture and river traditions.",
    "bestTime": "October to April",
    "latitude": 26.1445,
    "longitude": 91.7362,
    "destinationSlug": "guwahati",
    "destination": "Guwahati",
    "destinationTagline": "Gateway to Northeast India.",
    "destinationDescription": "A riverside city linking temples, wildlife and the wider Northeast.",
    "significance": "A major cultural and transport gateway in the Brahmaputra valley.",
    "destinationBestTime": "October to April",
    "history": "Guwahati has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "bihar",
    "name": "Bihar",
    "type": "STATE",
    "capital": "Patna",
    "region": "East India",
    "tagline": "Ancient Buddhism and living heritage.",
    "description": "One of India's most historically significant regions, connected with Buddhism, Jainism and ancient learning.",
    "culture": "Bhojpuri and Maithili traditions, Madhubani art, festivals and historic cuisine.",
    "bestTime": "October to March",
    "latitude": 25.5941,
    "longitude": 85.1376,
    "destinationSlug": "bodh-gaya",
    "destination": "Bodh Gaya",
    "destinationTagline": "Where Buddhist history comes alive.",
    "destinationDescription": "A sacred town associated with the Buddha's enlightenment under the Bodhi tree.",
    "significance": "One of the world's most important Buddhist pilgrimage sites.",
    "destinationBestTime": "October to March",
    "history": "Bodh Gaya has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "chhattisgarh",
    "name": "Chhattisgarh",
    "type": "STATE",
    "capital": "Raipur",
    "region": "Central India",
    "tagline": "Forests, waterfalls and tribal heritage.",
    "description": "A forest-rich central Indian state with waterfalls, caves, temples and vibrant tribal communities.",
    "culture": "Tribal arts, Bastar crafts, folk dance and local cuisine.",
    "bestTime": "October to February",
    "latitude": 21.2514,
    "longitude": 81.6296,
    "destinationSlug": "jagdalpur",
    "destination": "Jagdalpur",
    "destinationTagline": "Gateway to Bastar's forests and culture.",
    "destinationDescription": "A base for exploring waterfalls, forests and the living traditions of Bastar.",
    "significance": "A cultural hub for Bastar's indigenous arts and landscapes.",
    "destinationBestTime": "October to February",
    "history": "Jagdalpur has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "goa",
    "name": "Goa",
    "type": "STATE",
    "capital": "Panaji",
    "region": "West India",
    "tagline": "Beaches, heritage and relaxed coastal life.",
    "description": "A compact coastal state combining beaches, Portuguese-era heritage, forests and distinctive cuisine.",
    "culture": "Konkani culture, music, churches, temples and seafood traditions.",
    "bestTime": "November to February",
    "latitude": 15.4909,
    "longitude": 73.8278,
    "destinationSlug": "panaji",
    "destination": "Panaji",
    "destinationTagline": "A charming riverside capital.",
    "destinationDescription": "A heritage-rich capital with colorful streets, riverfront views and nearby beaches.",
    "significance": "A showcase of Goa's Indo-Portuguese architectural and cultural character.",
    "destinationBestTime": "November to February",
    "history": "Panaji has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "gujarat",
    "name": "Gujarat",
    "type": "STATE",
    "capital": "Gandhinagar",
    "region": "West India",
    "tagline": "Rann landscapes, temples and enterprise.",
    "description": "A western state known for historic ports, pilgrimage sites, crafts, wildlife and the dramatic Rann of Kutch.",
    "culture": "Garba, bandhani, handicrafts, Jain heritage and Gujarati cuisine.",
    "bestTime": "October to March",
    "latitude": 23.2156,
    "longitude": 72.6369,
    "destinationSlug": "ahmedabad",
    "destination": "Ahmedabad",
    "destinationTagline": "Heritage, design and Sabarmati riverfronts.",
    "destinationDescription": "A major city blending historic pols, museums, textiles and modern urban life.",
    "significance": "A UNESCO-recognized historic city with a rich architectural legacy.",
    "destinationBestTime": "October to March",
    "history": "Ahmedabad has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "haryana",
    "name": "Haryana",
    "type": "STATE",
    "capital": "Chandigarh",
    "region": "North India",
    "tagline": "Sacred history and modern cities.",
    "description": "A north Indian state surrounding the national capital region and associated with major sites from India's epic history.",
    "culture": "Haryanvi folk traditions, wrestling, fairs and agrarian culture.",
    "bestTime": "October to March",
    "latitude": 29.0588,
    "longitude": 76.0856,
    "destinationSlug": "kurukshetra",
    "destination": "Kurukshetra",
    "destinationTagline": "Epic landscapes and sacred history.",
    "destinationDescription": "A pilgrimage and heritage destination associated with the Mahabharata.",
    "significance": "A major cultural and religious landscape in northern India.",
    "destinationBestTime": "October to March",
    "history": "Kurukshetra has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "himachal-pradesh",
    "name": "Himachal Pradesh",
    "type": "STATE",
    "capital": "Shimla",
    "region": "North India",
    "tagline": "Snow peaks, valleys and hill towns.",
    "description": "A Himalayan state of mountain valleys, forests, temples and celebrated hill stations.",
    "culture": "Pahari traditions, temples, wool crafts and mountain cuisine.",
    "bestTime": "March to June and October to November",
    "latitude": 31.1048,
    "longitude": 77.1734,
    "destinationSlug": "shimla",
    "destination": "Shimla",
    "destinationTagline": "A classic Himalayan hill station.",
    "destinationDescription": "A historic hill capital with colonial architecture, forests and panoramic mountain views.",
    "significance": "A landmark of India's hill-station heritage.",
    "destinationBestTime": "March to June and October to November",
    "history": "Shimla has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "jharkhand",
    "name": "Jharkhand",
    "type": "STATE",
    "capital": "Ranchi",
    "region": "East India",
    "tagline": "Waterfalls, forests and tribal traditions.",
    "description": "A forested eastern state rich in mineral resources, waterfalls and indigenous cultures.",
    "culture": "Santhal and Munda traditions, tribal art, dance and forest foods.",
    "bestTime": "October to February",
    "latitude": 23.3441,
    "longitude": 85.3096,
    "destinationSlug": "ranchi",
    "destination": "Ranchi",
    "destinationTagline": "Waterfalls and forested hills.",
    "destinationDescription": "A green plateau city surrounded by waterfalls and forest landscapes.",
    "significance": "A gateway to Jharkhand's natural and tribal heritage.",
    "destinationBestTime": "October to February",
    "history": "Ranchi has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "karnataka",
    "name": "Karnataka",
    "type": "STATE",
    "capital": "Bengaluru",
    "region": "South India",
    "tagline": "Ruins, coast and technology.",
    "description": "A large southern state spanning heritage monuments, coffee country, beaches and a major technology hub.",
    "culture": "Kannada literature, classical arts, temple architecture and diverse cuisine.",
    "bestTime": "October to February",
    "latitude": 15.3173,
    "longitude": 75.7139,
    "destinationSlug": "hampi",
    "destination": "Hampi",
    "destinationTagline": "Ruins of a legendary empire.",
    "destinationDescription": "A vast archaeological landscape of temples, boulders and ruins of Vijayanagara.",
    "significance": "A UNESCO World Heritage landscape and one of India's most evocative historic sites.",
    "destinationBestTime": "October to February",
    "history": "Hampi has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "kerala",
    "name": "Kerala",
    "type": "STATE",
    "capital": "Thiruvananthapuram",
    "region": "South India",
    "tagline": "Backwaters, beaches and spice country.",
    "description": "A lush southwestern state known for backwaters, Ayurveda, beaches, forests and layered cultural traditions.",
    "culture": "Kathakali, Theyyam, Onam, Ayurveda and Malabar cuisine.",
    "bestTime": "October to March",
    "latitude": 10.8505,
    "longitude": 76.2711,
    "destinationSlug": "alappuzha",
    "destination": "Alappuzha",
    "destinationTagline": "Slow journeys through the backwaters.",
    "destinationDescription": "A coastal town famous for canals, lagoons, houseboats and coconut-lined waterways.",
    "significance": "A defining destination for Kerala's backwater tourism.",
    "destinationBestTime": "October to March",
    "history": "Alappuzha has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "madhya-pradesh",
    "name": "Madhya Pradesh",
    "type": "STATE",
    "capital": "Bhopal",
    "region": "Central India",
    "tagline": "Temples, wildlife and historic heartlands.",
    "description": "A central Indian state filled with forts, forests, wildlife reserves and ancient temple architecture.",
    "culture": "Tribal crafts, folk traditions, classical monuments and regional cuisine.",
    "bestTime": "October to March",
    "latitude": 22.9734,
    "longitude": 78.6569,
    "destinationSlug": "khajuraho",
    "destination": "Khajuraho",
    "destinationTagline": "Masterpieces in stone.",
    "destinationDescription": "A historic temple complex celebrated for intricate medieval sculpture and architecture.",
    "significance": "A UNESCO World Heritage site and landmark of Indian temple art.",
    "destinationBestTime": "October to March",
    "history": "Khajuraho has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "maharashtra",
    "name": "Maharashtra",
    "type": "STATE",
    "capital": "Mumbai",
    "region": "West India",
    "tagline": "Caves, forts and vibrant cities.",
    "description": "A diverse western state ranging from the Arabian Sea to the Sahyadris, with major cities and historic forts.",
    "culture": "Marathi theatre, Lavani, Ganeshotsav, forts and Maharashtrian cuisine.",
    "bestTime": "October to February",
    "latitude": 19.7515,
    "longitude": 75.7139,
    "destinationSlug": "mumbai",
    "destination": "Mumbai",
    "destinationTagline": "India's energetic coastal metropolis.",
    "destinationDescription": "A cosmopolitan city of heritage neighborhoods, waterfronts, arts and food.",
    "significance": "A major center of Indian finance, cinema and culture.",
    "destinationBestTime": "October to February",
    "history": "Mumbai has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "manipur",
    "name": "Manipur",
    "type": "STATE",
    "capital": "Imphal",
    "region": "Northeast India",
    "tagline": "Lakes, dance and mountain culture.",
    "description": "A northeastern valley state known for Loktak Lake, classical dance and distinctive communities.",
    "culture": "Manipuri dance, handloom traditions, indigenous festivals and cuisine.",
    "bestTime": "October to April",
    "latitude": 24.6637,
    "longitude": 93.9063,
    "destinationSlug": "imphal",
    "destination": "Imphal",
    "destinationTagline": "Valley culture and Loktak landscapes.",
    "destinationDescription": "A cultural gateway to Manipur with nearby lakes, memorials and hills.",
    "significance": "An important center of Manipuri arts and history.",
    "destinationBestTime": "October to April",
    "history": "Imphal has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "meghalaya",
    "name": "Meghalaya",
    "type": "STATE",
    "capital": "Shillong",
    "region": "Northeast India",
    "tagline": "Cloud forests, caves and waterfalls.",
    "description": "A lush hill state famous for living root bridges, caves, waterfalls and highland communities.",
    "culture": "Khasi, Jaintia and Garo traditions, music, weaving and local food.",
    "bestTime": "October to April",
    "latitude": 25.467,
    "longitude": 91.3662,
    "destinationSlug": "shillong",
    "destination": "Shillong",
    "destinationTagline": "Scotland of the East.",
    "destinationDescription": "A cool hill city surrounded by pine forests, waterfalls and music culture.",
    "significance": "A long-standing cultural and tourism center of Meghalaya.",
    "destinationBestTime": "October to April",
    "history": "Shillong has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "mizoram",
    "name": "Mizoram",
    "type": "STATE",
    "capital": "Aizawl",
    "region": "Northeast India",
    "tagline": "Rolling hills and vibrant traditions.",
    "description": "A mountainous northeastern state known for forested ridges, clean towns and Mizo culture.",
    "culture": "Mizo festivals, bamboo crafts, choral music and community traditions.",
    "bestTime": "October to March",
    "latitude": 23.1645,
    "longitude": 92.9376,
    "destinationSlug": "aizawl",
    "destination": "Aizawl",
    "destinationTagline": "A hill city above the clouds.",
    "destinationDescription": "A scenic ridge-top capital with panoramic views and lively local culture.",
    "significance": "A strong introduction to contemporary Mizo life and heritage.",
    "destinationBestTime": "October to March",
    "history": "Aizawl has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "nagaland",
    "name": "Nagaland",
    "type": "STATE",
    "capital": "Kohima",
    "region": "Northeast India",
    "tagline": "Mountain villages and living heritage.",
    "description": "A hill state known for indigenous communities, forested mountains and colorful festivals.",
    "culture": "Hornbill Festival, Naga crafts, village traditions and music.",
    "bestTime": "October to May",
    "latitude": 26.1584,
    "longitude": 94.5624,
    "destinationSlug": "kohima",
    "destination": "Kohima",
    "destinationTagline": "Hills, history and Naga culture.",
    "destinationDescription": "A mountain capital surrounded by villages, forests and historic sites.",
    "significance": "A cultural center for Naga traditions and the Hornbill Festival.",
    "destinationBestTime": "October to May",
    "history": "Kohima has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "odisha",
    "name": "Odisha",
    "type": "STATE",
    "capital": "Bhubaneswar",
    "region": "East India",
    "tagline": "Temples, crafts and the Bay of Bengal.",
    "description": "A coastal eastern state famous for monumental temples, classical dance, crafts and beaches.",
    "culture": "Odissi dance, Pattachitra, Rath Yatra and coastal cuisine.",
    "bestTime": "October to March",
    "latitude": 20.9517,
    "longitude": 85.0985,
    "destinationSlug": "puri",
    "destination": "Puri",
    "destinationTagline": "A sacred coastal city.",
    "destinationDescription": "A temple town and beach destination known for the Jagannath tradition.",
    "significance": "A major pilgrimage center and important coastal cultural destination.",
    "destinationBestTime": "October to March",
    "history": "Puri has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "punjab",
    "name": "Punjab",
    "type": "STATE",
    "capital": "Chandigarh",
    "region": "North India",
    "tagline": "Golden heritage and hearty food.",
    "description": "A fertile northwestern state known for Sikh heritage, agriculture, music and hospitality.",
    "culture": "Bhangra, Giddha, Sikh traditions, fairs and Punjabi cuisine.",
    "bestTime": "October to March",
    "latitude": 31.1471,
    "longitude": 75.3412,
    "destinationSlug": "amritsar",
    "destination": "Amritsar",
    "destinationTagline": "Sacred heritage and unforgettable food.",
    "destinationDescription": "A historic city centered on the Golden Temple and surrounded by rich cultural experiences.",
    "significance": "A major pilgrimage, heritage and culinary destination.",
    "destinationBestTime": "October to March",
    "history": "Amritsar has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "rajasthan",
    "name": "Rajasthan",
    "type": "STATE",
    "capital": "Jaipur",
    "region": "North India",
    "tagline": "Forts, deserts and royal cities.",
    "description": "India's largest state by area, famed for desert landscapes, forts, palaces and craft traditions.",
    "culture": "Rajasthani folk music, block printing, miniature art and desert cuisine.",
    "bestTime": "October to March",
    "latitude": 27.0238,
    "longitude": 74.2179,
    "destinationSlug": "jaipur",
    "destination": "Jaipur",
    "destinationTagline": "The Pink City of royal architecture.",
    "destinationDescription": "A historic planned city of palaces, forts, markets and craft traditions.",
    "significance": "A landmark of Rajput and Mughal-influenced architecture.",
    "destinationBestTime": "October to March",
    "history": "Jaipur has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "sikkim",
    "name": "Sikkim",
    "type": "STATE",
    "capital": "Gangtok",
    "region": "Northeast India",
    "tagline": "Monasteries and Himalayan peaks.",
    "description": "A small Himalayan state offering mountain scenery, monasteries, forests and distinctive communities.",
    "culture": "Buddhist traditions, monasteries, Losar and mountain cuisine.",
    "bestTime": "March to May and October to November",
    "latitude": 27.533,
    "longitude": 88.5122,
    "destinationSlug": "gangtok",
    "destination": "Gangtok",
    "destinationTagline": "A Himalayan capital with monastery views.",
    "destinationDescription": "A hillside city overlooking mountain ranges and surrounded by monasteries and forests.",
    "significance": "A major base for exploring Sikkim's cultural and mountain landscapes.",
    "destinationBestTime": "March to May and October to November",
    "history": "Gangtok has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "tamil-nadu",
    "name": "Tamil Nadu",
    "type": "STATE",
    "capital": "Chennai",
    "region": "South India",
    "tagline": "Dravidian temples and classical arts.",
    "description": "A southern state renowned for monumental temples, classical arts, beaches and ancient Tamil heritage.",
    "culture": "Bharatanatyam, Carnatic music, temple festivals and Tamil cuisine.",
    "bestTime": "October to March",
    "latitude": 11.1271,
    "longitude": 78.6569,
    "destinationSlug": "madurai",
    "destination": "Madurai",
    "destinationTagline": "A temple city alive with tradition.",
    "destinationDescription": "An ancient city centered on the Meenakshi temple complex and bustling heritage streets.",
    "significance": "One of Tamil Nadu's most important cultural and pilgrimage centers.",
    "destinationBestTime": "October to March",
    "history": "Madurai has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "telangana",
    "name": "Telangana",
    "type": "STATE",
    "capital": "Hyderabad",
    "region": "South India",
    "tagline": "Deccan heritage and modern energy.",
    "description": "A Deccan state combining historic forts and monuments with a major technology and food capital.",
    "culture": "Telugu and Deccani traditions, Bathukamma, crafts and biryani culture.",
    "bestTime": "October to February",
    "latitude": 18.1124,
    "longitude": 79.0193,
    "destinationSlug": "hyderabad",
    "destination": "Hyderabad",
    "destinationTagline": "Charminar, cuisine and Deccan history.",
    "destinationDescription": "A vibrant city blending Qutb Shahi heritage, bazaars, lakes and modern technology.",
    "significance": "A major center of Deccan architecture, cuisine and culture.",
    "destinationBestTime": "October to February",
    "history": "Hyderabad has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "tripura",
    "name": "Tripura",
    "type": "STATE",
    "capital": "Agartala",
    "region": "Northeast India",
    "tagline": "Palaces, forests and craft traditions.",
    "description": "A small northeastern state known for royal heritage, forest landscapes and distinctive handicrafts.",
    "culture": "Bengali and tribal traditions, bamboo crafts, dance and festivals.",
    "bestTime": "October to March",
    "latitude": 23.9408,
    "longitude": 91.9882,
    "destinationSlug": "agartala",
    "destination": "Agartala",
    "destinationTagline": "Royal heritage in a green setting.",
    "destinationDescription": "A compact capital with palace heritage, lakes and access to surrounding forests.",
    "significance": "A cultural gateway to Tripura's royal and indigenous heritage.",
    "destinationBestTime": "October to March",
    "history": "Agartala has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "uttar-pradesh",
    "name": "Uttar Pradesh",
    "type": "STATE",
    "capital": "Lucknow",
    "region": "North India",
    "tagline": "Sacred rivers and monumental heritage.",
    "description": "A vast northern state containing some of India's best-known pilgrimage, Mughal and cultural landmarks.",
    "culture": "Awadhi and Braj traditions, Kathak, crafts and rich regional cuisine.",
    "bestTime": "October to March",
    "latitude": 26.8467,
    "longitude": 80.9462,
    "destinationSlug": "agra",
    "destination": "Agra",
    "destinationTagline": "A city of timeless monuments.",
    "destinationDescription": "A historic city on the Yamuna known for the Taj Mahal, forts and Mughal heritage.",
    "significance": "Home to the Taj Mahal, a UNESCO World Heritage masterpiece.",
    "destinationBestTime": "October to March",
    "history": "Agra has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "uttarakhand",
    "name": "Uttarakhand",
    "type": "STATE",
    "capital": "Dehradun",
    "region": "North India",
    "tagline": "Himalayan pilgrimage and adventure.",
    "description": "A Himalayan state of sacred rivers, mountain valleys, forests and pilgrimage routes.",
    "culture": "Garhwali and Kumaoni traditions, temple festivals, folk music and mountain food.",
    "bestTime": "March to June and September to November",
    "latitude": 30.0668,
    "longitude": 79.0193,
    "destinationSlug": "rishikesh",
    "destination": "Rishikesh",
    "destinationTagline": "Yoga, rivers and Himalayan gateways.",
    "destinationDescription": "A riverside destination known for yoga, ashrams, rafting and mountain access.",
    "significance": "An internationally recognized center for yoga and spiritual travel.",
    "destinationBestTime": "September to November and March to May",
    "history": "Rishikesh has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "west-bengal",
    "name": "West Bengal",
    "type": "STATE",
    "capital": "Kolkata",
    "region": "East India",
    "tagline": "Culture, literature and Himalayan gateways.",
    "description": "A culturally rich eastern state stretching from the Himalayas to the Sundarbans and the Bay of Bengal.",
    "culture": "Bengali literature, Durga Puja, music, theatre and distinctive cuisine.",
    "bestTime": "October to March",
    "latitude": 22.9868,
    "longitude": 87.855,
    "destinationSlug": "kolkata",
    "destination": "Kolkata",
    "destinationTagline": "A city of literature and living culture.",
    "destinationDescription": "A historic metropolis celebrated for colonial architecture, art, literature and food.",
    "significance": "A major center of Bengali intellectual and artistic life.",
    "destinationBestTime": "October to March",
    "history": "Kolkata has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "andaman-nicobar",
    "name": "Andaman and Nicobar Islands",
    "type": "UNION_TERRITORY",
    "capital": "Port Blair",
    "region": "Islands and Coast",
    "tagline": "Coral seas, forests and island history.",
    "description": "A tropical island territory known for beaches, marine life, forests and important colonial history.",
    "culture": "Island communities, seafood, marine traditions and multicultural heritage.",
    "bestTime": "November to April",
    "latitude": 11.7401,
    "longitude": 92.6586,
    "destinationSlug": "port-blair",
    "destination": "Port Blair",
    "destinationTagline": "Gateway to tropical island adventures.",
    "destinationDescription": "A coastal base for exploring beaches, marine life and historic island sites.",
    "significance": "A key gateway to the Andaman archipelago.",
    "destinationBestTime": "November to April",
    "history": "Port Blair has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "chandigarh",
    "name": "Chandigarh",
    "type": "UNION_TERRITORY",
    "capital": "Chandigarh",
    "region": "North India",
    "tagline": "Planned modernism and green spaces.",
    "description": "A planned city known for modernist architecture, gardens and a distinctive urban landscape.",
    "culture": "Modernist design, Punjabi and Haryanvi influences, gardens and food culture.",
    "bestTime": "October to March",
    "latitude": 30.7333,
    "longitude": 76.7794,
    "destinationSlug": "chandigarh-city",
    "destination": "Chandigarh City",
    "destinationTagline": "A masterpiece of planned urban design.",
    "destinationDescription": "A green, carefully planned city with modernist architecture, gardens and cultural institutions.",
    "significance": "A landmark of twentieth-century urban planning in India.",
    "destinationBestTime": "October to March",
    "history": "Chandigarh City has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "dadra-nagar-haveli-daman-diu",
    "name": "Dadra and Nagar Haveli and Daman and Diu",
    "type": "UNION_TERRITORY",
    "capital": "Daman",
    "region": "West India",
    "tagline": "Coasts, heritage and tribal landscapes.",
    "description": "A western coastal union territory combining beaches, historic architecture and forested interiors.",
    "culture": "Portuguese-influenced heritage, tribal arts, festivals and coastal cuisine.",
    "bestTime": "October to March",
    "latitude": 20.3974,
    "longitude": 72.8328,
    "destinationSlug": "daman",
    "destination": "Daman",
    "destinationTagline": "Sea breezes and coastal heritage.",
    "destinationDescription": "A compact coastal destination with beaches, forts and historic churches.",
    "significance": "A distinctive blend of coastal and Indo-Portuguese heritage.",
    "destinationBestTime": "October to March",
    "history": "Daman has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "delhi",
    "name": "Delhi",
    "type": "UNION_TERRITORY",
    "capital": "New Delhi",
    "region": "North India",
    "tagline": "Monuments, museums and urban energy.",
    "description": "India's national capital territory layers ancient monuments, imperial avenues, markets and contemporary culture.",
    "culture": "Mughal and colonial heritage, festivals, crafts and food traditions.",
    "bestTime": "October to March",
    "latitude": 28.6139,
    "longitude": 77.209,
    "destinationSlug": "new-delhi",
    "destination": "New Delhi",
    "destinationTagline": "India's historic and political capital.",
    "destinationDescription": "A vast urban destination filled with monuments, museums, gardens and celebrated food districts.",
    "significance": "A major center of India's political and cultural history.",
    "destinationBestTime": "October to March",
    "history": "New Delhi has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "jammu-kashmir",
    "name": "Jammu and Kashmir",
    "type": "UNION_TERRITORY",
    "capital": "Srinagar",
    "region": "North India",
    "tagline": "Lakes, valleys and Himalayan beauty.",
    "description": "A Himalayan union territory celebrated for lakes, mountain valleys, gardens and crafts.",
    "culture": "Kashmiri crafts, carpets, wazwan, Sufi traditions and mountain culture.",
    "bestTime": "April to October",
    "latitude": 34.0837,
    "longitude": 74.7973,
    "destinationSlug": "srinagar",
    "destination": "Srinagar",
    "destinationTagline": "Houseboats and Himalayan horizons.",
    "destinationDescription": "A scenic valley city known for Dal Lake, Mughal gardens, houseboats and mountain views.",
    "significance": "A cultural and landscape icon of Kashmir.",
    "destinationBestTime": "April to October",
    "history": "Srinagar has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "ladakh",
    "name": "Ladakh",
    "type": "UNION_TERRITORY",
    "capital": "Leh",
    "region": "Himalayas",
    "tagline": "High passes, monasteries and stark landscapes.",
    "description": "A high-altitude Himalayan territory of dramatic mountains, monasteries, lakes and ancient trade routes.",
    "culture": "Tibetan Buddhist traditions, monasteries, apricot culture and mountain crafts.",
    "bestTime": "May to September",
    "latitude": 34.1526,
    "longitude": 77.5771,
    "destinationSlug": "leh",
    "destination": "Leh",
    "destinationTagline": "High-altitude adventure and monasteries.",
    "destinationDescription": "A dramatic mountain town surrounded by monasteries, passes and high desert landscapes.",
    "significance": "A major gateway to Ladakh's Himalayan cultural heritage.",
    "destinationBestTime": "May to September",
    "history": "Leh has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "lakshadweep",
    "name": "Lakshadweep",
    "type": "UNION_TERRITORY",
    "capital": "Kavaratti",
    "region": "Islands and Coast",
    "tagline": "Turquoise lagoons and coral islands.",
    "description": "A tropical archipelago of coral atolls, lagoons and beaches in the Arabian Sea.",
    "culture": "Island traditions, maritime culture, coconut crafts and seafood.",
    "bestTime": "October to May",
    "latitude": 10.5667,
    "longitude": 72.6417,
    "destinationSlug": "kavaratti",
    "destination": "Kavaratti",
    "destinationTagline": "Quiet lagoons and island life.",
    "destinationDescription": "A tranquil island destination with lagoons, coral reefs and a relaxed coastal atmosphere.",
    "significance": "A representative destination for Lakshadweep's marine environment and island culture.",
    "destinationBestTime": "October to May",
    "history": "Kavaratti has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  },
  {
    "slug": "puducherry",
    "name": "Puducherry",
    "type": "UNION_TERRITORY",
    "capital": "Puducherry",
    "region": "South India",
    "tagline": "French quarters and Tamil coast.",
    "description": "A coastal union territory known for French-influenced streets, ashram culture, beaches and Tamil heritage.",
    "culture": "Tamil traditions, Franco-Tamil architecture, Aurobindo heritage and coastal cuisine.",
    "bestTime": "October to March",
    "latitude": 11.9416,
    "longitude": 79.8083,
    "destinationSlug": "puducherry-city",
    "destination": "Puducherry City",
    "destinationTagline": "French streets by the Coromandel coast.",
    "destinationDescription": "A walkable coastal city with colorful heritage streets, cafés, beaches and cultural institutions.",
    "significance": "A distinctive example of French and Tamil cultural interaction.",
    "destinationBestTime": "October to March",
    "history": "Puducherry City has a long and layered history shaped by regional traditions, historic communities, architecture, trade, pilgrimage and changing cultural influences."
  }
];


// Additional popular destinations for every state / union territory.
// The first destination in `regions` remains the primary destination; these
// entries make each region useful as a multi-place travel guide.
const EXTRA_DESTINATIONS: Record<string, Array<[string, string, string]>> = {
  "Andhra Pradesh": [["Visakhapatnam","visakhapatnam","Coastal city, beaches and the Eastern Ghats."],["Vijayawada","vijayawada","Riverfront city, temples and lively Andhra culture."]],
  "Arunachal Pradesh": [["Bomdila","bomdila","Monasteries, mountain views and Himalayan culture."],["Ziro","ziro","Green valleys, Apatani culture and a slower mountain escape."]],
  "Assam": [["Kaziranga","kaziranga","Wildlife, grasslands and one-horned rhinoceros country."],["Majuli","majuli","River-island culture, satras and Assamese village life."]],
  "Bihar": [["Nalanda","nalanda","Ancient learning, Buddhist heritage and archaeological remains."],["Rajgir","rajgir","Hills, hot springs and important Buddhist and Jain sites."]],
  "Chhattisgarh": [["Chitrakote","chitrakote","A dramatic waterfall and gateway to Bastar landscapes."],["Sirpur","sirpur","Ancient temples, Buddhist remains and archaeological heritage."]],
  "Goa": [["Calangute","calangute","Classic North Goa beach life, cafés and sunset walks."],["Old Goa","old-goa","Churches, heritage monuments and Portuguese-era history."]],
  "Gujarat": [["Kutch","kutch","Rann landscapes, crafts, villages and desert culture."],["Dwarka","dwarka","Sacred coastal heritage and one of India's major pilgrimage towns."]],
  "Haryana": [["Panipat","panipat","Historic battlefields, museums and textile traditions."],["Sultanpur","sultanpur","Wetlands and birdwatching close to the NCR."]],
  "Himachal Pradesh": [["Manali","manali","Mountain scenery, adventure and access to high valleys."],["Dharamshala","dharamshala","Himalayan views, Tibetan culture and mountain trails."]],
  "Jharkhand": [["Deoghar","deoghar","Temple heritage, pilgrimage and local markets."],["Netarhat","netarhat","Forest hills, viewpoints and peaceful plateau landscapes."]],
  "Karnataka": [["Mysuru","mysuru","Palaces, markets, yoga traditions and royal heritage."],["Coorg","coorg","Coffee estates, forests, waterfalls and plantation stays."]],
  "Kerala": [["Munnar","munnar","Tea plantations, misty hills and Western Ghats scenery."],["Kochi","kochi","Harbour history, art, food and layered coastal heritage."]],
  "Madhya Pradesh": [["Bhopal","bhopal","Lakes, museums and the gateway to central Indian heritage."],["Ujjain","ujjain","Ancient temple city and major pilgrimage centre."]],
  "Maharashtra": [["Pune","pune","Historic neighbourhoods, food culture and a lively arts scene."],["Aurangabad","aurangabad","Gateway to Ajanta and Ellora and Deccan heritage."]],
  "Manipur": [["Loktak Lake","loktak-lake","Floating phumdis, lake landscapes and local livelihoods."],["Moreh","moreh","Border-town culture and a gateway toward Southeast Asia."]],
  "Meghalaya": [["Cherrapunji","cherrapunji","Waterfalls, caves and dramatic Khasi hills."],["Mawlynnong","mawlynnong","Village landscapes, living-root bridges and Khasi culture."]],
  "Mizoram": [["Lunglei","lunglei","Hilltop views, forests and quiet Mizo landscapes."],["Reiek","reiek","Mountain viewpoints and an easy escape into nature."]],
  "Nagaland": [["Mon","mon","Konyak heritage, village life and distinctive crafts."],["Dzukou Valley","dzukou-valley","Highland trekking and seasonal valley landscapes."]],
  "Odisha": [["Bhubaneswar","bhubaneswar","Temple architecture, museums and a historic old city."],["Konark","konark","Sun Temple heritage and the Odisha coast."]],
  "Punjab": [["Ludhiana","ludhiana","Punjabi food, markets and modern city life."],["Patiala","patiala","Royal heritage, music, crafts and Punjabi traditions."]],
  "Rajasthan": [["Udaipur","udaipur","Lakes, palaces and romantic Mewar heritage."],["Jodhpur","jodhpur","Blue-city streets, Mehrangarh Fort and desert culture."]],
  "Sikkim": [["Pelling","pelling","Monasteries, forests and sweeping Kanchenjunga views."],["Lachung","lachung","High mountain valleys and a gateway to North Sikkim."]],
  "Tamil Nadu": [["Chennai","chennai","Coastal city, temples, music and South Indian food."],["Ooty","ooty","Tea gardens, colonial-era charm and Nilgiri mountain scenery."]],
  "Telangana": [["Warangal","warangal","Kakatiya temples, lakes and Deccan history."],["Nizamabad","nizamabad","Temples, forts and northern Telangana landscapes."]],
  "Tripura": [["Udaipur","udaipur-tripura","Temple heritage, lakes and the Tripura Sundari tradition."],["Unakoti","unakoti","Rock-cut Shaivite sculptures in a forested landscape."]],
  "Uttar Pradesh": [["Varanasi","varanasi","Ghats, temples, river rituals and living spiritual traditions."],["Lucknow","lucknow","Awadhi culture, architecture, food and refined craft traditions."]],
  "Uttarakhand": [["Nainital","nainital","Lake town, Himalayan views and classic hill-station character."],["Mussoorie","mussoorie","Colonial-era hill walks, mountain views and cafés."]],
  "West Bengal": [["Darjeeling","darjeeling","Tea estates, mountain railways and Himalayan views."],["Sundarbans","sundarbans","Mangrove forests, waterways and rich wildlife landscapes."]],
  "Andaman and Nicobar Islands": [["Havelock Island","havelock-island","Turquoise waters, beaches and marine adventures."],["Neil Island","neil-island","Quiet beaches, coral reefs and island sunsets."]],
  "Chandigarh": [["Rock Garden","rock-garden-chandigarh","A distinctive art landscape built from recycled materials."],["Sukhna Lake","sukhna-lake-chandigarh","A calm urban lake for walks, boating and sunsets."]],
  "Dadra and Nagar Haveli and Daman and Diu": [["Silvassa","silvassa","Green landscapes, tribal culture and relaxed weekend travel."],["Diu","diu","Fort heritage, beaches and Portuguese-era coastal character."]],
  "Delhi": [["Old Delhi","old-delhi","Historic lanes, Mughal heritage and legendary street food."],["Mehrauli","mehrauli","Archaeological monuments, gardens and layers of Delhi history."]],
  "Jammu and Kashmir": [["Gulmarg","gulmarg","Meadows, mountain views and winter sports."],["Pahalgam","pahalgam","River valleys, forests and access to Himalayan trails."]],
  "Ladakh": [["Nubra Valley","nubra-valley","High-altitude desert, monasteries and dramatic valleys."],["Pangong Lake","pangong-lake","A striking high-altitude lake framed by mountains."]],
  "Lakshadweep": [["Agatti","agatti","Coral lagoons, beaches and clear-water island experiences."],["Bangaram","bangaram","Secluded beaches and a classic tropical-island escape."]],
  "Puducherry": [["Auroville","auroville","Experimental community, architecture and quiet green spaces."],["Mahabalipuram","mahabalipuram","Nearby Pallava heritage, shore temples and sculptural landscapes."]],
};


// Third signature destination for every region so the guide has exactly 3 destinations per State/UT.
const FOOD_DATA: Record<string, string[]> = {
  "Andhra Pradesh": [
    "Pulihora",
    "Gongura Pachadi",
    "Gutti Vankaya",
    "Pesarattu",
    "Andhra Chicken Curry",
    "Pootharekulu"
  ],
  "Arunachal Pradesh": [
    "Thukpa",
    "Momos",
    "Zan",
    "Gyapa Khazi",
    "Apong",
    "Chura Sabzi"
  ],
  "Assam": [
    "Assamese Thali",
    "Khar",
    "Masor Tenga",
    "Pitika",
    "Pitha",
    "Duck Curry"
  ],
  "Bihar": [
    "Litti Chokha",
    "Sattu Paratha",
    "Dal Pitha",
    "Khaja",
    "Thekua",
    "Makhana Kheer"
  ],
  "Chhattisgarh": [
    "Fara",
    "Chila",
    "Aamat",
    "Bafauri",
    "Dehati Vada",
    "Muthia"
  ],
  "Goa": [
    "Goan Fish Curry",
    "Prawn Balchão",
    "Pork Vindaloo",
    "Xacuti",
    "Bebinca",
    "Ros Omelette"
  ],
  "Gujarat": [
    "Dhokla",
    "Khandvi",
    "Undhiyu",
    "Thepla",
    "Fafda-Jalebi",
    "Gujarati Thali"
  ],
  "Haryana": [
    "Bajra Khichdi",
    "Bajre Ki Roti",
    "Churma",
    "Kadhal",
    "Kachri Ki Sabzi",
    "Lassi"
  ],
  "Himachal Pradesh": [
    "Dhaam",
    "Siddu",
    "Madra",
    "Chana Madra",
    "Tudkiya Bhath",
    "Mittha"
  ],
  "Jharkhand": [
    "Dhuska",
    "Rugra",
    "Thekua",
    "Chilka Roti",
    "Pittha",
    "Local forest produce dishes"
  ],
  "Karnataka": [
    "Bisi Bele Bath",
    "Mysore Masala Dosa",
    "Ragi Mudde",
    "Mangaluru Ghee Roast",
    "Kori Gassi",
    "Mysore Pak"
  ],
  "Kerala": [
    "Appam & Stew",
    "Sadya",
    "Puttu & Kadala",
    "Kerala Parotta",
    "Karimeen Pollichathu",
    "Payasam"
  ],
  "Madhya Pradesh": [
    "Poha-Jalebi",
    "Bhutte Ka Kees",
    "Dal Bafla",
    "Sabudana Khichdi",
    "Bhopali Gosht",
    "Mawa Bati"
  ],
  "Maharashtra": [
    "Vada Pav",
    "Misal Pav",
    "Pav Bhaji",
    "Puran Poli",
    "Kolhapuri Tambda Rassa",
    "Modak"
  ],
  "Manipur": [
    "Eromba",
    "Singju",
    "Kangshoi",
    "Chamthong",
    "Paknam",
    "Momos"
  ],
  "Meghalaya": [
    "Jadoh",
    "Dohneiihong",
    "Doh Khleh",
    "Tungrymbai",
    "Pukhlein",
    "Nakham Bitchi"
  ],
  "Mizoram": [
    "Bai",
    "Vawksa Rep",
    "Misa Mach Poora",
    "Sawhchiar",
    "Chhum Han",
    "Koat Pitha"
  ],
  "Nagaland": [
    "Smoked Pork",
    "Axone dishes",
    "Galho",
    "Bamboo Shoot Curry",
    "Hinkejvu",
    "Sticky Rice"
  ],
  "Odisha": [
    "Dalma",
    "Pakhala Bhata",
    "Chhena Poda",
    "Dahi Pakhala",
    "Macha Besara",
    "Rasabali"
  ],
  "Punjab": [
    "Amritsari Kulcha",
    "Sarson da Saag",
    "Makki di Roti",
    "Chole Bhature",
    "Tandoori Chicken",
    "Lassi"
  ],
  "Rajasthan": [
    "Dal Baati Churma",
    "Laal Maas",
    "Gatte Ki Sabzi",
    "Ker Sangri",
    "Pyaaz Kachori",
    "Ghevar"
  ],
  "Sikkim": [
    "Momos",
    "Thukpa",
    "Phagshapa",
    "Sha Phalley",
    "Gundruk Soup",
    "Sel Roti"
  ],
  "Tamil Nadu": [
    "Masala Dosa",
    "Pongal",
    "Idli-Sambar",
    "Chettinad Chicken",
    "Kothu Parotta",
    "Filter Coffee"
  ],
  "Telangana": [
    "Hyderabadi Biryani",
    "Haleem",
    "Sarva Pindi",
    "Mirchi Bajji",
    "Double Ka Meetha",
    "Qubani Ka Meetha"
  ],
  "Tripura": [
    "Mui Borok",
    "Chakhwi",
    "Mosdeng Serma",
    "Wahan Mosdeng",
    "Gudok",
    "Berma dishes"
  ],
  "Uttar Pradesh": [
    "Awadhi Biryani",
    "Kebab",
    "Bedai-Kachori",
    "Banarasi Chaat",
    "Petha",
    "Banarasi Lassi"
  ],
  "Uttarakhand": [
    "Kafuli",
    "Aloo Ke Gutke",
    "Bhatt Ki Churkani",
    "Phaanu",
    "Bal Mithai",
    "Singori"
  ],
  "West Bengal": [
    "Kosha Mangsho",
    "Macher Jhol",
    "Shorshe Ilish",
    "Luchi-Alur Dom",
    "Mishti Doi",
    "Sandesh"
  ],
  "Delhi": [
    "Chole Bhature",
    "Butter Chicken",
    "Paranthe",
    "Nihari",
    "Dahi Bhalla",
    "Daulat Ki Chaat"
  ],
  "Jammu and Kashmir": [
    "Rogan Josh",
    "Gushtaba",
    "Yakhni",
    "Dum Aloo",
    "Kahwa",
    "Kalari Kulcha"
  ],
  "Ladakh": [
    "Thukpa",
    "Momos",
    "Skyu",
    "Tingmo",
    "Chutagi",
    "Butter Tea"
  ],
  "Andaman and Nicobar Islands": [
    "Seafood Curry",
    "Grilled Fish",
    "Coconut Prawn Curry",
    "Fish Fry",
    "Tropical Fruit Bowls",
    "Coconut Desserts"
  ],
  "Chandigarh": [
    "Chole Bhature",
    "Butter Chicken",
    "Amritsari Kulcha",
    "Rajma Chawal",
    "Tandoori Chicken",
    "Lassi"
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    "Daman seafood",
    "Gujarati Thali",
    "Ubadiyu",
    "Prawn Curry",
    "Dudhi Halwa",
    "Pav Bhaji"
  ],
  "Lakshadweep": [
    "Tuna Curry",
    "Mas Huni-style fish",
    "Coconut Rice",
    "Tuna Fry",
    "Coconut-based curries",
    "Fresh tropical fruit"
  ],
  "Puducherry": [
    "Creole Seafood",
    "Dosa",
    "Prawn Curry",
    "French-style Baguettes",
    "Fish Molee",
    "Coconut Desserts"
  ]
};

const STAY_TEMPLATES: Array<[string, number, number, string]> = [
  [
    "Boutique Homestay",
    3200,
    4.6,
    "A comfortable locally styled stay with easy access to the main sights."
  ],
  [
    "Heritage Guesthouse",
    3800,
    4.5,
    "A heritage-inspired option for travelers who want a more local atmosphere."
  ],
  [
    "Family-run Homestay",
    2500,
    4.7,
    "A simple, welcoming stay suited to travelers looking for local hospitality."
  ],
  [
    "City Comfort Hotel",
    4200,
    4.4,
    "A convenient base close to transport, food and sightseeing areas."
  ],
  [
    "Nature Retreat",
    4500,
    4.6,
    "A quieter stay for travelers who want to experience the surrounding landscape."
  ],
  [
    "Premium Stay",
    6500,
    4.8,
    "A higher-comfort option for a relaxed stay while exploring the destination."
  ]
];


const plannedSlugs = [
  ...regions.map((item) => item.destinationSlug),
  ...Object.values(EXTRA_DESTINATIONS).flat().map(([, slug]) => slug),
];

if (plannedSlugs.length !== 108 || new Set(plannedSlugs).size !== plannedSlugs.length) {
  const duplicates = plannedSlugs.filter((slug, index) => plannedSlugs.indexOf(slug) !== index);
  throw new Error(`Seed validation failed: expected 108 unique destination slugs, found ${plannedSlugs.length}. Duplicates: ${[...new Set(duplicates)].join(", ")}`);
}

async function main() {
  console.log("🌱 Starting AuricVista Travel database seed...");

  await prisma.favorite.deleteMany();
  await prisma.itineraryItem.deleteMany();
  await prisma.itinerary.deleteMany();
  await prisma.destinationTag.deleteMany();
  await prisma.regionTag.deleteMany();
  await prisma.attraction.deleteMany();
  await prisma.stay.deleteMany();
  await prisma.foodSpot.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.destination.deleteMany();
  await prisma.administrativeRegion.deleteMany();
  await prisma.tag.deleteMany();

  const tagMap = new Map<string, number>();

  for (const tag of tags) {
    const created = await prisma.tag.create({ data: tag });
    tagMap.set(tag.slug, created.id);
  }

  const airbnbUrlFor = (destination: string) =>
    `https://www.airbnb.co.in/s/${encodeURIComponent(destination + ", India")}/homes`;

  const makeDestinationData = (item: typeof regions[number], destinationName: string, destinationSlug: string, tagline: string, description: string, significance: string, history: string, bestTime: string) => ({
    slug: destinationSlug,
    name: destinationName,
    tagline,
    description,
    history,
    significance,
    bestTime,
    accent: "#B06B3C",
    latitude: item.latitude,
    longitude: item.longitude,
    published: true,
  });

  const addDestinationContent = async (item: typeof regions[number], regionId: string, destination: { id: string; slug: string }, destinationName: string) => {
    const tagSlugs = ["culture", "heritage", "nature", "food"];
    if (["Goa", "Odisha", "Andaman and Nicobar Islands", "Lakshadweep", "Puducherry"].includes(item.name)) tagSlugs.push("beaches", "islands");
    if (item.name.includes("Pradesh") || ["Sikkim", "Himachal Pradesh", "Uttarakhand", "Ladakh", "Jammu and Kashmir", "Meghalaya", "Nagaland", "Mizoram", "Manipur"].includes(item.name)) tagSlugs.push("mountains");
    if (["Bihar", "Uttar Pradesh", "Tamil Nadu", "Rajasthan", "Punjab", "Odisha", "Andhra Pradesh", "Telangana", "Delhi", "Jammu and Kashmir"].includes(item.name)) tagSlugs.push("pilgrimage");
    if (["Kerala", "Karnataka", "Madhya Pradesh", "Assam", "Chhattisgarh", "Jharkhand", "Meghalaya", "Tripura"].includes(item.name)) tagSlugs.push("wildlife");
    if (["Mumbai", "Delhi", "Hyderabad", "Kolkata", "Bengaluru", "Chandigarh"].includes(item.destination)) tagSlugs.push("city");
    if (["Arunachal Pradesh", "Himachal Pradesh", "Sikkim", "Uttarakhand", "Ladakh"].includes(item.name)) tagSlugs.push("adventure");

    for (const slug of [...new Set(tagSlugs)]) {
      const tagId = tagMap.get(slug);
      if (tagId) {
        await prisma.destinationTag.create({ data: { destinationId: destination.id, tagId } });
      }
    }

    const attractionTemplates = [
      ["Heritage", `${destinationName} historic quarter`, `Walk through the historic heart of ${destinationName} and discover its architecture and local stories.`],
      ["Landmark", `${destinationName} signature landmark`, `Visit one of ${destinationName}'s best-known landmarks and understand its cultural importance.`],
      ["Nature", `${destinationName} scenic viewpoint`, `Enjoy a scenic landscape, sunset or sunrise viewpoint around ${destinationName}.`],
      ["Culture", `${destinationName} local market`, `Explore a lively market for crafts, regional products, snacks and everyday local life.`],
      ["Experience", `${destinationName} cultural centre`, `Learn about regional traditions, art, music and community heritage.`],
      ["Day trip", `${destinationName} countryside escape`, `Take a short excursion beyond ${destinationName} for landscapes, villages and slower-paced local experiences.`],
    ];
    for (let i = 0; i < attractionTemplates.length; i++) {
      const [type, name, description] = attractionTemplates[i];
      await prisma.attraction.create({ data: { name, slug: `${destination.slug}-spot-${i + 1}`, type, description, priceNote: "Check current entry fees and opening hours locally.", latitude: item.latitude, longitude: item.longitude, destinationId: destination.id } });
    }

    const localFoods = FOOD_DATA[item.name] ?? ["Regional thali", "Local breakfast", "Seasonal specialty", "Street-food favourite", "Traditional sweet", "Local tea or drink"];
    for (let i = 0; i < localFoods.length; i++) {
      await prisma.foodSpot.create({ data: { name: localFoods[i], cuisine: `${item.name} regional cuisine`, area: destinationName, priceLevel: i < 2 ? 1 : 2, mustTry: localFoods[i], destinationId: destination.id } });
    }

    const activityTemplates = [
      ["Heritage walk", "2–3 hours", `Take a guided-style walk through ${destinationName}'s historic and cultural areas.`],
      ["Local food trail", "2–4 hours", `Sample regional favourites and learn how local ingredients shape ${item.name} cuisine.`],
      ["Sunrise or sunset outing", "2 hours", `Find a scenic viewpoint around ${destinationName} for a memorable sunrise or sunset.`],
      ["Arts & crafts experience", "2–3 hours", `Explore local craft traditions and meet artisans or browse regional handmade products.`],
      ["Nature escape", "Half day", `Spend time outdoors and explore the landscapes surrounding ${destinationName}.`],
      ["Local market experience", "1–2 hours", `Explore a local market, discover everyday life and pick up regional souvenirs.`],
    ];
    for (let i = 0; i < activityTemplates.length; i++) {
      const [category, duration, description] = activityTemplates[i];
      await prisma.activity.create({ data: { name: category === "Local food trail" ? `Taste the flavours of ${destinationName}` : `${category} in ${destinationName}`, category, duration, description, destinationId: destination.id } });
    }

    const stayTypes = [
      ["Airbnb-friendly Homestay", 2800, 4.7, `A locally styled home base near ${destinationName}'s main sights and neighbourhoods.`],
      ["Heritage Stay", 4200, 4.6, `A character-filled option for travellers who want to stay close to ${destinationName}'s heritage areas.`],
      ["Family Apartment", 3500, 4.6, `A practical apartment-style stay for couples, families or small groups.`],
      ["Boutique Retreat", 5200, 4.8, `A more polished stay for travellers looking for comfort and a memorable setting.`],
      ["Budget Homestay", 1800, 4.5, `A simpler option for travellers who want to spend more time exploring and less on the room.`],
    ] as const;
    for (const [category, pricePerNight, rating, description] of stayTypes) {
      await prisma.stay.create({ data: { name: `${category} near ${destinationName}`, category, pricePerNight, rating, description: `${description} Prices and availability can change.`, airbnbUrl: airbnbUrlFor(destinationName), destinationId: destination.id } });
    }
  };

  for (const item of regions) {
    console.log(`Creating ${item.name} → ${item.destination} + popular nearby places...`);
    const region = await prisma.administrativeRegion.create({ data: { slug: item.slug, name: item.name, type: item.type as AdministrativeType, capital: item.capital, region: item.region, tagline: item.tagline, description: item.description, culture: item.culture, bestTime: item.bestTime, accent: "#B06B3C", latitude: item.latitude, longitude: item.longitude, published: true } });

    const regionTagSlugs = ["culture", "heritage", "nature", "food"];
    if (["Goa", "Odisha", "Andaman and Nicobar Islands", "Lakshadweep", "Puducherry"].includes(item.name)) regionTagSlugs.push("beaches", "islands");
    if (item.name.includes("Pradesh") || ["Sikkim", "Himachal Pradesh", "Uttarakhand", "Ladakh", "Jammu and Kashmir", "Meghalaya", "Nagaland", "Mizoram", "Manipur"].includes(item.name)) regionTagSlugs.push("mountains");
    if (["Bihar", "Uttar Pradesh", "Tamil Nadu", "Rajasthan", "Punjab", "Odisha", "Andhra Pradesh", "Telangana", "Delhi", "Jammu and Kashmir"].includes(item.name)) regionTagSlugs.push("pilgrimage");
    if (["Kerala", "Karnataka", "Madhya Pradesh", "Assam", "Chhattisgarh", "Jharkhand", "Meghalaya", "Tripura"].includes(item.name)) regionTagSlugs.push("wildlife");
    if (["Mumbai", "Delhi", "Hyderabad", "Kolkata", "Bengaluru", "Chandigarh"].includes(item.destination)) regionTagSlugs.push("city");
    if (["Arunachal Pradesh", "Himachal Pradesh", "Sikkim", "Uttarakhand", "Ladakh"].includes(item.name)) regionTagSlugs.push("adventure");
    for (const slug of [...new Set(regionTagSlugs)]) {
      const tagId = tagMap.get(slug);
      if (tagId) await prisma.regionTag.create({ data: { regionId: region.id, tagId } });
    }

    const primary = await prisma.destination.create({ data: { ...makeDestinationData(item, item.destination, item.destinationSlug, item.destinationTagline, item.destinationDescription, item.significance, item.history, item.destinationBestTime), regionId: region.id } });
    await addDestinationContent(item, region.id, primary, item.destination);

    for (const [name, slug, tagline] of EXTRA_DESTINATIONS[item.name] ?? []) {
      const destination = await prisma.destination.create({ data: { ...makeDestinationData(item, name, slug, tagline, `${name} is a popular place to visit in ${item.name}, offering a different perspective on the region's landscape, culture and everyday life.`, `A well-known ${item.name} travel stop valued for its distinctive character, local experiences and connection to the wider region.`, `${name} has developed through layers of local history, community traditions, travel and cultural exchange. Its streets, landscapes and landmarks help explain why ${name} remains a memorable part of ${item.name}.`, item.bestTime), regionId: region.id } });
      await addDestinationContent(item, region.id, destination, name);
    }

  }

  console.log("");
  console.log("🎉 SEED COMPLETED SUCCESSFULLY!");
  console.log(`✅ Regions: ${regions.length}`);
  const extraCount = Object.values(EXTRA_DESTINATIONS).reduce((sum, items) => sum + items.length, 0);
  const destinationCount = regions.length + extraCount;
  console.log(`✅ Destinations: ${destinationCount}`);
  console.log(`✅ Attractions: ${destinationCount * 6}`);
  console.log(`✅ Food & local favourites: ${destinationCount * 6}`);
  console.log(`✅ Activities: ${destinationCount * 6}`);
  console.log(`✅ Stays: ${destinationCount * 5}`);
  console.log("🏠 Every stay includes an Airbnb destination-search link.");
}

main()
  .catch((error) => {
    console.error("❌ SEED FAILED:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
