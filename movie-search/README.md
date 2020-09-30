# groupnine-movie

How to set up application.
1. create .env file in /movie-search with the API Key as below:
    `REACT_APP_API_KEY = `
2. Go into `/movie-search` folder
3. `yarn add & yarn start`

Challenges. 
I wanted to make sure that when images failed to fetch correctly or if a movie does not have a image src available that the structure won't change -- I resolved this by adding a grey container that will always show despite the image and the image will fill the size of the grey box.

Design Decisions.
I worked on the mobile version first so, just to make sure the movie container didn't look crazy on desktop, I set a max width on the movie container as a whole. I also didn't make the font any lower than 16px -- after learning that the lowest I should use on all devices is 16px during a UXUI course.

Future Improvements.
I would like the Load button to not immediately go all the way to the botton of the next page. Maybe I can do this by setting a scroll / watch on where the page is and implement a smooth scroll. This will also help the user know that more information came through above (more movies have been loaded).