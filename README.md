# Netflix GPT

- Create Vite App
- Configured TailwindCSS
- Header
- Routing
- Login Form
- Sign Up Form
- Form Validation
- useRef hook
- Firebase Setup
- Deploying our App to production
- Create SignUp User Account
- implemented Signin user API
- Create Redux Store with userSlice
- Implemented Sign Out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login page and vice-versa
- Unsubscribed to the onAuthStateChanged Callback 
- Add hardcoded values to the constant file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing Movies list API
- Custom Hook for Now Playing movies
- Created movieSlice
- Updated store with movies data
- Planning for MainContainer & SecondaryContainer
- Fetch Data for trailer video
- Updated the store with  Trailer Video Data
- Embedded the Youtube Video and make it autoPlay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the browse page amazing with tailwind CSS
- usePopular Custom hook
- Added useToRatedMovies & useUpcomingMovies custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language feature in our App
- Get Open AI api key
- Gpt Search API Call
- Fetched gptMovieSuggestions from TMDB
- created gptSlice added data
- Reused Movie List Component to make movie Suggestion container
- Memoization
- Adding .env file
- Adding .env file to gitignore
- Made our site Responsive
- Error Component Added

# Features
- Login /Sign up
    - Sign In /Sign Up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in Background
        - Title & Description
        - Movie Suggestions
            - MoviesList * N
- NetflixGPT
    - Search Bar
    - Movie Suggestions


- Responsive
    - By default mobile
    - sm is > than mobile device
    - md is > than tab means desktop

# Project Setup
- Before starting the project please add .env file and add TMDB and OPENAI KEY into it