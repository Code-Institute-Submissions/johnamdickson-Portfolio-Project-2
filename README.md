<a name="top"></a>
# <img src="favicon.png"  width="50" height="50"> Wild Cards Memory Game

Wild cards is a two player memory game designed for people of all ages but especially kids.

This website is showcasing Javascript, HTML and CSS design for Project Portfolio 2 and can be accessed by following this [link.]

![Responsive Mockup Screenshot]()

## Contents
- [UX](#ux)
  - [Site Goals](#site-goals)
  - [User Stories](#user-stories)
  - [Wireframes](#wireframes)
  - [Further Reading](#further-reading)
- [Design](#design)
  - [Colour Scheme](#colour-scheme)
    -  [Jet Stream](#jet-stream)
    - [Illusion](#illusion)
  - [Typography](#typography)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features Left to Implement](#features-left-to-implement)
- [Testing](#testing)
  - [Development Testing](#development-testing)
  - [Validator Testing](#validator-testing)
  - [Bugs / Issues](#bugs--issues)
  - [Unresolved Bugs / Issues](#unresolved-bugs-or-issues)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)




## UX
### Site Goals
The objective of the site is to create a two player memory card game directed towards young children and their parents. The site should give feedback on successful matches. It should also  keep track of the scores and feedback the game outcome once all cards are turned over.
### User Stories
- As an adult user:
  - I want to play a game with my children that challenges their memory and spatial awareness.
  - I want the game to encourage turn taking by giving feedback on which player's turn it is.
  - I want to be able to play the game on all devices including PC/Mac, tablets and mobile phones.
  - I want responsive feedback from buttons and cards on the website.
<br><br>
- As a child user:
  - I want to engage in a fun game with my parents or caregiver.
  - I want to be visually stimulated by the site including background picture, card pictures and colours.
<br><br>
- As the site administrator:
  - I want to easily identify issues or bugs by providing clear and concise code with annotations.
### Wireframes
The wirframes for the project can be found [here.]
### Further Reading
- 

## Design
### Logo
![Site Logo](/assets/README-files/logo.png)
- The choice of site logo was based upon one that would be fun and engaging for children and have an immediate connection with the content. 
### Colour Scheme
- 
- 

### Typography

All fonts were sourced from Google Fonts. The main font used throughout is called 'Love Ya Like A Sister' which was selected for it's fun characteristics that children can relate too even if they cannot read. Raleway was selected for button font to make it stand out to adults who will normally be controlling the game.

 - 
<br><br>

## Features 

### Existing Features

- __The Game Information Div__
<br>
<img src="assets/README-files/game-information.png"  width="250"> 
  - The game information div contains an `<h2>` welcome message and short `<p>` giving an overview of the game. There are two buttons at the bottom of the div -  *New Game* and *How To Play*. The former button gives the option to restart the game whilst the latter directs the user to an instructions div described below. The buttons are styled to have an embossed look using inset box shadows along with an outset shadow. The buttons have mousedown and mouseup event listeners where the mousedown removes the outset shadow and the mouseup returns the styling to normal. This creates the impression of the button being pressed and springing back to position once released.
<br><br>
![Game-Instructions](/assets/README-files/game-instructions.jpg)
  - When the *How To Play* button is pressed two divs  - blurred and instructions - are made visible from their default hidden property. The blurred div covers the entire screen and creates a visual effect that accentuates the instructions div and contents and helps create a contrast against the backdrop of the game. The instructions div contains an `<ol>` of instructions followed by *New Game* and *Go Back* buttons. The former button completes the same action as its namesake described in Game Information above, whilst the latter returns the user to the current game. Both buttons return the two divs to their default visibility status of hidden.

- __The Footer__ 
![Footer](/assets/README-files/footer.jpg)
  - 
<br><br>



- __The Game Area__
![What You Will Need Section](/assets/README-files/what-you-will-need-section.png)
  - 
  <br><br>
 
- __The Congratulations Page__
![Thank You Page](/assets/README-files/thank-you-form.jpg)
  - 
<br><br>


### Features Left to Implement
- 

## Testing 
### Development Testing

- __Home Page__

  - 
<br><br>

- __Get Started Page__
  - 


<br><br>


### Validator Testing 

- HTML
  - No errors were returned for each page when passing through the official W3C validator:
    - 
    
- CSS
  - 

- Accessibility
  - The accessibility of each of the main pages was checked using the lighthouse tool in devtools with a score within the 90 - 100% bracket for all metrics.
   ![Lighthouse Results]
  - The theme colours were also checked against the font colour using [contrast checker](https://webaim.org/resources/contrastchecker/).
  <br><br>
  <table  width = 100% height = 350px cellspacing="0" cellpadding="0">
  <tr>
  <td><img src="assets/README-files/header-contrast-checker-results.jpg" height=300px width=275px></td>
  <td> <img src="assets/README-files/body-elements-contrast-checker-results.jpg" height=300px width=275px></td>
  </tr>
  </table>

  - Images alt text properties were checked using Chrome extension [Alt Text Checker.](https://chrome.google.com/webstore/detail/alt-text-tester/koldhcllpbdfcdpfpbldbicbgddglodk)
  ![Alt Text Checker](/assets/README-files/alt-text-tester.png)
 

### Bugs / Issues
- __General Issues__
  - 
    <br><br>
- __Home Page Issues__
   - 
   <br><br>

- __Get Started Page Issues__
    - 
    

### Unresolved Bugs or Issues

- 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - Under the repository name, click ⚙ Settings. If you cannot see the "Settings" tab, select the  dropdown menu, then click Settings.
  - In the "Code and automation" section of the sidebar, click  Pages
  - Under "Build and deployment", under "Branch", use the None or Branch dropdown menu and select a publishing source.
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found [here.](https://johnamdickson.github.io/Portfolio-Project-1/index.html)


## Credits 

### Content 

- 


### Media

- The site logo was created using Hatchful, a free logo design service offered by Shopify.
- The site background image is from Freepik - <a href="https://www.freepik.com/free-vector/wild-animal-cartoon-character-forest-scene_14801768.htm#query=cartoon%20jungle&position=49&from_view=search&track=ais">Image by brgfx</a> on Freepik
<br><br>
<a href="#top">BACK TO TOP 🔼</a>