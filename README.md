## App Name 

Right First Time (RFT) Engineering - React SPA.

##### Synopsis / Summary 

RFT Engineering required a website to start developing their digital presence and acquire new leads and customers (no existing digital presence). The main objectives were centered around promoting and clarifying their wide range of services (incl. non-standard Engineering Services available via third parties), and; using their extensive library of project photos effectively to showcase their projects. Organic search was also an important consideration over the longer-term.

###### Production URL

https://rftengineering.co.nz/

###### Key deliverables

- UI/UX design
- Front-End development
- Deployment 
- SEO (in progress)

###### Technology 

- NPM
- Sketch & Photoshop (UI/UX)
- HTML
- SASS
- Javascript (ES6) & 
- React (project bootstrapped using create-react-app)
- React router (hash router for SPA)
- Babel
- Webpack 

###### More on technical process

I decided to build in React (using Create-React-App). The current version of the website is largely static (with some use of state management to control the responsive nav). I certainly could have achieved a similar end result using standard markup, styling and vanilla JS and I'm really conscious as a developer not to always reach for the latest tools without good reason. However, in this case, I think there's a lot of opportunity to dial up the functionality of this site as future enhancements. I like knowing that by using React, I'll be in a good space to add features as and when required (rather than trying to integrate a front-end framework at a later date). Additionally, I'm really appreciating the workflow efficiencies provided by React (and in particular Create-React-App). 

On the styling side, I used SASS for this application as I think it works nicely with the component based nature of React. However, I prefer to maintain separate SASS files (usually separate ones for larger components). That may change in future as I understand React best-practices would recommend using style objects in the JS file. However for me, as I'm also maintaining a number of vanilla JS applications that don't support style objects, I'd prefer to stick separate files. Again, not specific to this project but I'm also just enjoying the nesting and variable capabilities of SASS.

Overall, this project was really smooth and it's always great to have a happy client. I feel like spending a solid amount of time on UI/IX, in particular solid wireframes was a big factor and the process of going from sketches, to low-fidelity wires, and then finally high-fidelity designs. 

###### Ideas for enhancement 

- [ ] An integration with Google Maps could be really useful here to really clarify the wide range of services offered by RFT and the fact that effectively work nationwide. It could also be a nicer, more interactive way to display the gallery images which are currently organised manually (weighted by importance).
- [ ] Integration with a back-end form service to capture inquires that are submitted would be a cleaner solution (currently using formspree which works to deploy emails to the client but is basic and has no database).
- [ ] Given a little more time I would like to revisit CSS transitions just to add a few more subtle interactions to the UX. 
