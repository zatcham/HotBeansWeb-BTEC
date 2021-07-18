# Hot Beans Web
Website made as part of assignment for Level 3 ICT BTEC. 

## Libraries used

- Bootstrap 4.6.0 (JSdelivr CDN)
- JQuery 3.5.1 (Jquery CDN)
- AOS.JS 2.3 (local)
- HTML5 Shiv 3.7.3 (local)

## Notes

* JavaScript
    - The files `home.js`, `courses.js`, `team.js`, `vacancies.js` control the "typing" text shown when loading the page, displaying the title.
    - `aos.js` and `html5shiv.min.js` are both libraries used within the code (the former for the animations on pages, and the latter for backwards compatability).
    - `apply.js` uses Jquery to control the form and success screen
    - `preloader.js` uses Jquery to control the falcified loading screen (preloader) on the homepage. The timeout controls how long it stays on the screen.

* CSS
  - `style.css` is the main CSS file used across all pages. Fonts are imported the way they are because it solved a bug. There is probably some bad practices but it mainly works. There is a few minor predicaments surrounding responsiveness across devices that I didn't have time to solve. 
  - `preloader.css` is the CSS file for the preloader. Yes it is rather over-complicated for what it is and yes there is some unused code. 
  - `aos.css` is the supporting CSS file for the AOS.JS library. 

* Graphics
  - The logo was designed by myself using Adobe Illustrator. I'm not sure what font I used. 
  - Fonts used on pages: Roboto Mono for headings, Lato for body text. 
  - Primary colour is #f15a24, the gradient uses #f15a24 and #fdc830.
  - All images used on pages are from Unsplash

* Page Listing
  - Homepage (index.html) - has a slight bug where scrolling doesn't work, not sure how to resolve.
  - Team (team.html)
  - Vacancies (vacancies.html)
  - Apply for jobs (apply.html) - only buttons to this page are on Vacancies, uses JS to automatically select job from dropdown based off button clicked. The form does nothing
  - Courses (courses.html)
  - Contact form (contact.html) - This form does nothing. Uses same JS file as apply.html

* Other
  - There has been no attempts made to improve SEO. 
