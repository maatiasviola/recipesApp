import images from "./images"
import icons from "./icons"

const trendingRecipes = [
    {
        id: 1,
        name: "Espaguetis Con Camarones",
        image: images.spagetti,
        duration: "30 mins",
        serving: 1,
        isBookmark: false,
        category: "Pasta",
        author: {
            profilePic: images.UserProfile5,
            name: "Maria",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Pasta espagueti",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Aceite de oliva",
                quantity: "2 cucharadas"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Camarones Frescos",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Tomates campari",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Sal",
                quantity: "¾ cucharada"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Pimienta negra",
                quantity: "¼ cucharada"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 2,
        name: "Satay de pollo malasio",
        image: images.satay,
        duration: "50 mins",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile8,
            name: "Mandy",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Muslos de pollo deshuesados",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Tallo de limoncillo",
                quantity: "1 Tallo"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Cebolla grande",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Dientes de ajo",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Cilantro",
                quantity: "1 cucharadita"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile9,
            name: "Jessie",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Dientes de ajo",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Hierba de limón",
                quantity: "2 tallos"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Huevo",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Camarones Frescos",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Chalote",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "Fideos",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ]
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        duration: "1 hora",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile7,
            name: "Ali Baba",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Chile seco",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Dientes de ajo",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Huevo",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "Arroz",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Anchoas secas",
                quantity: "3 tazas"
            },


        ],
        viewers: [

        ]
    },

]

const categories = trendingRecipes

const top_searches = [
    {
        id: 0,
        label: "Asado"
    },
    {
        id: 1,
        label: "Yogur"
    },
    {
        id: 2,
        label: "Chocotorta"
    },
    {
        id: 3,
        label: "Papas Fritas"
    },
    {
        id: 4,
        label: "Arroz con pollo"
    },
    {
        id: 5,
        label: "Medialunas"
    },
]

const categoriesSearch = [
    {
        id: 3,
        title: "Pastas",
        thumbnail: images.bg_1
    },
    {
        id: 1,
        title: "Ensaladas",
        thumbnail: images.bg_2
    },
    {
        id: 2,
        title: "Carne",
        thumbnail: images.bg_3
    },
    {
        id: 9,
        title: "Pizza",
        thumbnail: images.bg_4
    },
    {
        id: 4,
        title: "Pescado",
        thumbnail: images.bg_5
    },
    {
        id: 6,
        title: "Postres",
        thumbnail: images.bg_6
    },
    {
        id: 7,
        title: "Vegetariano",
        thumbnail: images.bg_2
    },
    {
        id: 8,
        title: "Vegano",
        thumbnail: images.bg_1
    }
]

const recipe_details_tabs = [
    {
        id: 0,
        label: "Pasos",
    },
    {
        id: 1,
        label: "Ingredientes",
    },
    {
        id: 2,
        label: "Discusiones",
    }
]

const recipe_details = {
    id: 0,
    title: "The Ultimate Ui/Ux Course Beginner to Advanced",
    number_of_students: "33.5k Students",
    duration: "2h 30m",
    instructor: {
        name: "Matias Viola",
        title: "Programador Full Stack"
    },
    videos: [
        {
            title: "1. Introduccion",
            duration: "1:37",
            size: "10 MB",
            progress: "100%",
            is_playing: false,
            is_complete: true,
            is_lock: false,
            is_downloaded: false,
        },
        {
            title: "2. Paso 2",
            duration: "1:15:00",
            size: "200 MB",
            progress: "100%",
            is_playing: true,
            is_complete: false,
            is_lock: false,
            is_downloaded: true,
        },
        {
            title: "3. Paso 3",
            duration: "1:27:00",
            size: "230 MB",
            progress: "0%",
            is_playing: false,
            is_complete: false,
            is_lock: true,
            is_downloaded: false,
        }
    ],
    discussions: [
        {
            id: 0,
            profile: require("../assets/images/dummy_profiles/profile-pic-1.png"),
            name: "Matias Viola",
            no_of_comments: "11 comentarios",
            no_of_likes: "72 likes",
            posted_on: "Hace 5 dias",
            comment: "Se la hice a mis amigos y les fascino!",
            replies: [
                {
                    id: 0,
                    profile: images.UserProfile6,
                    name: "Juan Garcia",
                    posted_on: "Hace 4 dias",
                    comment: "Mati a mi me paso lo mismo! Nadie cree que la hice yo!",
                },
                {
                    id: 1,
                    profile: images.UserProfile3,
                    name: "Nicolas Gaggero",
                    posted_on: "Hace 4 dias",
                    comment: "¿Estaremos hablando de la mejor receta a nivel mundial?",
                },
                {
                    id: 2,
                    profile: images.UserProfile8,
                    name: "Matias Cordero",
                    posted_on: "Hace 4 dias",
                    comment: "Si aprobamos APIS distribuidas hay que celebrar con esta receta!",
                },
                {
                    id: 3,
                    profile: images.UserProfile6,
                    name: "Matias Viola",
                    posted_on: "Hace 4 dias",
                    comment: "Tus deseos son ordenes Mati 🫡",
                },
            ]
        },
        {
            id: 1,
            profile: images.UserProfile3,
            name: "Nicolas Gaggero",
            no_of_comments: "21 comentarios",
            no_of_likes: "372 likes",
            posted_on: "Hace 14 dias",
            comment: "El paso 4 es dificilismo😳 Alguien sabe como hacerlo?",
            replies: [
                {
                    id: 0,
                    profile: images.UserProfile6,
                    name: "Matias Viola",
                    posted_on: "Hace 7 dias",
                    comment: "Nico! Fijate de hervir bien el agua!",
                },
                {
                    id: 1,
                    profile: images.UserProfile8,
                    name: "Matias Cordero",
                    posted_on: "Hace 7 dias",
                    comment: "A mi me habia pasado lo mismo, tenes que dejar reposar 24 horas las cebollas en agua tibia",
                },
                {
                    id: 2,
                    profile: images.UserProfile4,
                    name: "Fernando Cardozo",
                    posted_on: "Hace 7 dias",
                    comment: "Tal cual! Yo hice lo que dijo Mati y salio exquisito😋",
                },
            ]
        }
    ]
}


export default {
    trendingRecipes,
    categories,
    top_searches,
    categoriesSearch,
    recipe_details_tabs,
    recipe_details
}