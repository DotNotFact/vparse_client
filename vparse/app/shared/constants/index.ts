// import { IUserMainProps } from "@/components/screens/home/Home";

// export const userData = [
//   {
//     id: 1,
//     firstName: "Peggie",
//     bDate: 28,
//     hobbies: ["Concerts", "Festivals", "Photography"],
//     bio: "Hey there! My firstName is Peggie. I'm a passionate fashion photographer with a love for capturing the beauty in everyday life. When I'm not behind the lens, you'll find me immersing myself in the energy of live music at concerts and festivals. Exploring new cultures and cuisines is my idea of a perfect adventure. Let's share stories over a cup of coffee and see where our shared passions take us!",
//     distance: "3 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
//   {
//     id: 2,
//     firstName: "Diana",
//     bDate: 30,
//     hobbies: ["Hiking", "Cooking", "Music"],
//     bio: "Hi there! I'm Diana, a nature lover who finds joy in the kitchen and the magic of music. Let's go on a hike and then cook up a storm together. Seeking someone to share adventures and good food with.",
//     distance: "10 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
//   {
//     id: 3,
//     firstName: "Sophie",
//     bDate: 26,
//     hobbies: ["Painting", "Yoga", "Traveling"],
//     bio: "Greetings! I'm Sophie, a free-spirited artist who finds inspiration in the colors of life. Yoga keeps me grounded, and painting allows my imagination to soar. Let's embark on a journey of self-discovery together, exploring the world and creating masterpieces along the way.",
//     distance: "2 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
//   {
//     id: 4,
//     firstName: "Betty",
//     bDate: 32,
//     hobbies: ["Soccer", "Cooking", "Movies"],
//     bio: "Hi there! I'm Betty, a soccer lover who finds joy in the kitchen and the magic of movies. Let's kick a ball around and then cook up a storm together. Seeking someone to share adventures and good food with.",
//     distance: "5 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
//   {
//     id: 5,
//     firstName: "Lily",
//     bDate: 29,
//     hobbies: ["Dancing", "Reading", "Hiking"],
//     bio: "Hola! I'm Lily, a dance lover who finds joy in the rhythm of life. Books are my escape, and hiking fuels my spirit. Let's dance under the stars and get lost in stories over a cup of coffee. EbDater to meet someone to share life's dance with.",
//     distance: "7 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
//   {
//     id: 6,
//     firstName: "Chiara",
//     bDate: 28,
//     hobbies: ["Singing", "Writing", "Sailing"],
//     bio: "Ciao! I'm Chiara, a melody-maker who finds solace in writing and the serenity of sailing. Let's harmonize our voices and create music together. A poetic soul searching for someone to sail through life's highs and lows.",
//     distance: "4 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
//   {
//     id: 7,
//     firstName: "Emma",
//     bDate: 27,
//     hobbies: ["Singing", "Writing", "Sailing"],
//     bio: "Hi there! I'm Emma, a melody-maker who finds solace in writing and the serenity of sailing. Let's harmonize our voices and create music together. A poetic soul searching for someone to sail through life's highs and lows.",
//     distance: "4 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
//   {
//     id: 8,
//     firstName: "Sarah",
//     bDate: 29,
//     hobbies: ["Surfing", "Gardening", "Painting"],
//     bio: "Hi there! I'm Sarah, a surfer who finds joy in the garden and the magic of painting. Let's ride the waves and then paint up a storm together. Seeking someone to share adventures and good food with.",
//     distance: "8 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
//   {
//     id: 9,
//     firstName: "Olivia",
//     bDate: 28,
//     hobbies: ["Yoga", "Hiking", "Photography"],
//     bio: "Hello, I'm Olivia, a yoga enthusiast who finds peace in the serenity of nature and expression through photography. Let's go on a hike and then strike a pose together. Looking for someone to share adventures and good food with.",
//     distance: "9 miles away",
//     imgPath:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//   },
// ];

// export const chatData = [
//   {
//     id: 1,
//     firstName: "Betty",
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     bDate: 32,
//     isOnline: true,
//     lastMessbDate:
//       "That sounds like a lot of fun. Would you like to go together sometime?",
//     date: "2023-10-15",
//     timeSent: "5 mins",
//     chat: [
//       {
//         sender: "me",
//         messbDate: "Hi there! How's it going?",
//         timestamp: "10:00 AM",
//       },
//       {
//         sender: "Betty",
//         messbDate: "I am doing great, thanks!",
//         timestamp: "10:05 AM",
//       },
//       {
//         sender: "me",
//         messbDate: "Have any exciting plans for the weekend? 😊",
//         timestamp: "10:10 AM",
//       },
//       {
//         sender: "Betty",
//         messbDate: "Yes, I'm thinking of going hiking. 🏞️ What about you?",
//         timestamp: "10:15 AM",
//       },
//       {
//         sender: "me",
//         messbDate: "That sounds amazing! I might just tag along. 🥾",
//         timestamp: "10:20 AM",
//       },
//       {
//         sender: "Betty",
//         messbDate: "That would be great! The more, the merrier. 🌟",
//         timestamp: "10:25 AM",
//       },
//     ],
//   },
//   {
//     id: 2,
//     firstName: "Basquit",
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     bDate: 28,
//     isOnline: false,
//     lastMessbDate: "Sure, let's do that. When are you free?",
//     date: "2023-10-14",
//     timeSent: "10 mins",
//     chat: [
//       {
//         sender: "me",
//         messbDate: "Hey Charlie, how have you been?",
//         timestamp: "11:00 AM",
//       },
//       {
//         sender: "Charlie",
//         messbDate: "I've been good. How about you?",
//         timestamp: "11:05 AM",
//       },
//       {
//         sender: "me",
//         messbDate: "I've been a bit busy, but managing. 😊",
//         timestamp: "11:10 AM",
//       },
//       {
//         sender: "Charlie",
//         messbDate: "I understand. We should catch up soon! ☕",
//         timestamp: "11:15 AM",
//       },
//       {
//         sender: "me",
//         messbDate: "Definitely! Let's plan something for this weekend. 🎉",
//         timestamp: "11:20 AM",
//       },
//       {
//         sender: "Charlie",
//         messbDate: "Sure, that sounds good. When are you free? 🗓️",
//         timestamp: "11:25 AM",
//       },
//       {
//         sender: "me",
//         messbDate: "I'm free on Saturday afternoon. How about you? 🌤️",
//         timestamp: "11:30 AM",
//       },
//       {
//         sender: "Charlie",
//         messbDate:
//           "Saturday works for me too! Let's meet at our usual spot. 🍔",
//         timestamp: "11:35 AM",
//       },
//       {
//         sender: "me",
//         messbDate: "Sounds like a plan! See you then. 👋",
//         timestamp: "11:40 AM",
//       },
//     ],
//   },
//   {
//     id: 3,
//     firstName: "Oliver",
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     bDate: 30,
//     isOnline: true,
//     lastMessbDate: "Sounds like a plan! Let's make it happen.",
//     date: "2023-10-11",
//     timeSent: "25 mins",
//     chat: [
//       {
//         sender: "me",
//         messbDate: "Hi Oliver, how's your day going?",
//         timestamp: "2:00 PM",
//       },
//       {
//         sender: "Oliver",
//         messbDate: "It's going great! Enjoying the sunshine. How about you?",
//         timestamp: "2:05 PM",
//       },
//       {
//         sender: "me",
//         messbDate: "That's wonderful! I'm just getting through some work. 💻",
//         timestamp: "2:10 PM",
//       },
//       {
//         sender: "Oliver",
//         messbDate: "Don't work too hard! Make sure to take breaks. 🌞",
//         timestamp: "2:15 PM",
//       },
//       {
//         sender: "me",
//         messbDate:
//           "Absolutely, breaks are necessary. Planning anything fun for the evening? 🎉",
//         timestamp: "2:20 PM",
//       },
//       {
//         sender: "Oliver",
//         messbDate:
//           "I might go to the gym later. Need to work off some steam. 💪",
//         timestamp: "2:25 PM",
//       },
//       {
//         sender: "me",
//         messbDate: "That's a great idea! I should join you sometime. 🏋️‍♂️",
//         timestamp: "2:30 PM",
//       },
//       {
//         sender: "Oliver",
//         messbDate: "Definitely! The more, the merrier. 🤸‍♂️",
//         timestamp: "2:35 PM",
//       },
//     ],
//   },
//   {
//     id: 4,
//     firstName: "Sophie",
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     bDate: 27,
//     isOnline: true,
//     lastMessbDate: "Definitely! Looking forward to it.",
//     date: "2023-10-10",
//     timeSent: "30 mins",
//     chat: [
//       {
//         sender: "me",
//         messbDate: "Hey Sophie, how's your week been?",
//         timestamp: "3:00 PM",
//       },

//       {
//         sender: "Sophie",
//         messbDate: "It's been busy but good. How about you?",
//         timestamp: "3:05 PM",
//       },
//       {
//         sender: "Sophie",
//         messbDate: "And also tired",
//         timestamp: "3:05 PM",
//       },
//       {
//         sender: "me",
//         messbDate: "Mine's been quite hectic too, but managing.",
//         timestamp: "3:10 PM",
//       },
//       {
//         sender: "Sophie",
//         messbDate: "That's good to hear. Any exciting plans for the weekend?",
//         timestamp: "3:15 PM",
//       },
//       {
//         sender: "me",
//         messbDate:
//           "Not yet, but I'm thinking of checking out that new restaurant downtown. You?",
//         timestamp: "3:20 PM",
//       },
//       {
//         sender: "Sophie",
//         messbDate:
//           "I'm planning to go hiking with some friends. You should join us sometime!",
//         timestamp: "3:25 PM",
//       },
//     ],
//   },

//   {
//     id: 5,
//     firstName: "William",
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     bDate: 29,
//     isOnline: false,
//     lastMessbDate: "Let me check my schedule and get back to you.",
//     date: "2023-10-09",
//     timeSent: "35 mins",
//     chat: [
//       {
//         sender: "me",
//         messbDate: "Hi William, how's everything going?",
//         timestamp: "4:00 PM",
//       },
//       {
//         sender: "William",
//         messbDate: "Things are going well. How about you?",
//         timestamp: "4:05 PM",
//       },
//     ],
//   },
//   {
//     id: 6,
//     firstName: "Jack",
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     bDate: 30,
//     isOnline: true,
//     lastMessbDate: "Sounds like a great idea. Let's make it happen.",
//     date: "2023-10-07",
//     timeSent: "45 mins",
//     chat: [
//       {
//         sender: "me",
//         messbDate: "Hey Jack, how's your week been?",
//         timestamp: "6:00 PM",
//       },
//       {
//         sender: "Jack",
//         messbDate: "It's been busy but good. How about you?",
//         timestamp: "6:05 PM",
//       },
//     ],
//   },
// ];
// export const datesData: IUserMainProps[] = [
//   {
//     id: 1,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Dianna",
//     lastName: "Jones",
//     bDate: 25,
//     titlSign: "New York",
//     swipe: "USA",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Jane",
//     lastName: "Smith",
//     bDate: 28,
//     titlSign: "Los Angeles",
//     swipe: "USA",
//   },
//   {
//     id: 3,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Chiara",
//     lastName: "Doe",
//     bDate: 26,
//     titlSign: "London",
//     swipe: "UK",
//   },
//   {
//     id: 4,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Ella",
//     lastName: "Williams",
//     bDate: 29,
//     titlSign: "Sydney",
//     swipe: "Australia",
//   },
//   {
//     id: 5,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Jullie",
//     lastName: "Brown",
//     bDate: 30,
//     titlSign: "Paris",
//     swipe: "France",
//   },
//   {
//     id: 6,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Olivia",
//     lastName: "Miller",
//     bDate: 27,
//     titlSign: "Berlin",
//     swipe: "Germany",
//   },
//   {
//     id: 7,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "William",
//     lastName: "Wilson",
//     bDate: 31,
//     titlSign: "Toronto",
//     swipe: "Canada",
//   },
//   {
//     id: 8,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Sophia",
//     lastName: "Moore",
//     bDate: 29,
//     titlSign: "Tokyo",
//     swipe: "Japan",
//   },
//   {
//     id: 9,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Diana",
//     lastName: "Taylor",
//     bDate: 32,
//     titlSign: "Mumbai",
//     swipe: "India",
//   },
//   {
//     id: 10,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     firstName: "Alex",
//     lastName: "Anderson",
//     bDate: 30,
//     titlSign: "Moscow",
//     swipe: "Russia",
//   },
// ];

// export const profileData = [
//   {
//     firstName: "Jacob Jones",
//     bDate: 30,
//     imageUrl:
//       "https://sun9-56.userapi.com/impg/FRjdOPlTqbfGMaKPlp02dRa8Q0Z-74ehLBOlng/RX7pTivDOe0.jpg?size=745x512&quality=95&sign=eed6b07808e5de2d627f230f73032f56&type=album",
//     hobbies: ["Hiking", "Photography", "Cooking"],
//     bio: "I'm an adventurous person who loves exploring new places, trying out different cuisines, capturing moments through photography, and spending time in nature. I enjoy hiking on weekends and experimenting with new recipes in the kitchen. Traveling and experiencing different cultures are some of my greatest passions, and I'm always looking for my next adventure.",
//   },
// ];
