## Who's That Pokemon?

![pokemon talonflame and the input bar to guess it's name](https://joshsoave.com/static/media/pokemonV2.d5e39066ba9f9b24139a.png)

## Intro

Pokemon is a video game created by Game Freak, Nintendo, and The Pokemon Company.

I initially created this app to help Pokemon players practice and remember
Pokemon names since there are over 900 Pokemon in the games.

This project is an omptimaztion of my first ever project, a Pokemon guessing game called Who's That Pokemon. Previously, the project was a static site using HTML, CSS, and jQuery. I was able to address some of the inneficiencies in the code by converting it to a React application.

[Play Who's That Pokemon](https://joshspokemongame.com/)

**Disclaimer: This game is for entertainment and educational purposes only. Using this game for profit is a violation of copyright law.**

## Optimazations

### Team Rocket Theme

One of the biggest inneficiencies I fixed switching from a static site with jQuery to React is handling of the alternate themes. The default theme uses blue, white, and yellow. These are colors from the Pokemon brand. There is an alternate theme that uses black and red colors which are often worned by the villians in Pokemon, Team Rocket.

In the initial project, a theme switcher feature was implemented to enable users to easily change between different themes. This functionality was achieved through the inclusion of a button on the web page. When clicked, the button triggered a function that utilized the power of jQuery to add or remove the Team Rocket classes. It got the job done, but was not the most efficient. If you look at the following code, each class had to be added or removed separately.

![lines of code adding and removing the team rocket class](https://i.imgur.com/jtHeZWq.png)

I simplified this when switching to React. There is still a button for the user to click on and change the theme. Now, the component will conditionally render with the appropriate class and styles based on whether or not the `rocketStyle` is set to `true`. The Team Rocket classes were essential in defining the distinct visual styles associated with each theme. By dynamically using React's conditional logic to determine the theme, the appearance of various elements on the web page could be instantly transformed to match the selected theme. This approach offered a seamless and interactive experience for users, allowing them to customize the visual aesthetics according to their preferences.

![lines of code with conditional rendering between the themes](https://i.imgur.com/7ucRO2W.png)
![lines of code adding styles to the components](https://i.imgur.com/JotovFt.png)

### Code Layout

To enhance code readability and maintainability, an important optimization was implemented by breaking down the code into smaller, more manageable parts. In the initial implementation, all the code resided within a single file, either app.js or index.html. This monolithic structure posed challenges when searching for specific sections of code.

![lines of code where the code is not sorted into separate files](https://i.imgur.com/KwL0gqe.png)

Recognizing the need for improved code organization, the project underwent a restructuring process to promote modularity and separation of concerns. The codebase was divided into logical components or modules, each responsible for a specific functionality or feature. This modular approach not only made it easier to locate specific code snippets but also improved code reuse and facilitated future maintenance and updates.

![more files that are used to break out the code into separate component files](https://i.imgur.com/rGFwshI.png)

By breaking the code into smaller parts, I can focus on individual components, making it easier to understand and debug specific sections of the codebase. Additionally, code organization enables better collaboration in the future if I were to get others involved in the projecct.
