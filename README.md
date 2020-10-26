# my-contacts

Web frontend client providing a user inteface for an address book application.

### Technologies

- TypeScript
- React
- Redux
- Redux Thunk
- TSLint & ESLint
- Prettier
- Jest
- webpack
- API: https://randomuser.me/

### How To Start Development Mode With Hot Reloading

1. `yarn install` or `npm intall`
2. `yarn start` or `npm start`

### How To Build Code For Production & Serve It Locally

1. `yarn install` or `npm intall`
2. `yarn build` or `npm run build`
3. `yarn serve` or `npm run serve`
4. Go to http://localhost:8080/ or http://127.0.0.1:8080/

### Tech Summary

- Employed Facebook's official create-react-app as the foundation/skeleton/boiler plate to kickstart the MVP allowing me to focus on feature development. I 'ejected' the app by running the package.json 'eject' script to enable greater control and transparency.
- Filled in the npm package.json's important fields including license, engines, and browsers list.
- TypeScript was chosen so the project could benefit from its advantages over JavaScript including strict typing – code as comments.
- Redux Thunk was chosen for handling asynchronous side effects due to its simple nature and simple use case.
- TSLint + ESLint were included to enable static analysis of the code as well as automatic fixing.
- Prettier, along with TSLint + ESLint, is used to format code into a standard style.

### Feature Summary

- The frontend app employs a minimalist design inspired by the Google landing page. Zero fluff – less is more approach – no distractions. Its design is also mobile first with media queries targeting larger screens.
- With the use of the versatile flex box CSS 3 layout model, the web app is responsive while keeping the aformentioned media queries slim in size and number.
- When loading the landing page, an animated loading image is shown to signal to the user that the app is getting data from the API.
- When successful, the app displays the contacts for the user. In conjunction with the API, the app employs paging with an initial seed to gather 20 contacts at a time.
- If the user wants to see more contacts, they can scroll to the bottom of the page – lazy loading. This will cause the next page of contacts to be fetched.
- If the user clicks on a contact, they will be directed to the contact's detail page. Clicking on the app's title (My Contacts) text will redirect them to the home/landing page.

### Future Work

- If this app was not a MVP/POC, I would not use the Facebook create-react-app boiler plate code as it has a lot of bloat although it can definitely be harnessed as reference code.
- In future work, I would connect a CI/CD service (eg. CircleCI) to the GitHub repo to automatically run linting + testing on the creation of pull requests, and enable one-click deployment to AWS S3 where the code would be hosted.
- In future work, I would incorporate React Material-UI component library and Tachyons CSS library to faciliate the implementation of better designs.
- In future work, I would always create the first 20 contact item containers on the home/landing page with greyed out empty content to signal to the user that the page is loading the data. It is a better signal design as well as removes the issue of the incoming contact item containers rearranging on load.
- In future work, I would use a lazy loading library to enable seemless + error free lazy loading in all major browsers.
- In future work, I would make the data fetch request automatically 'retry' once when the the Random User API fails, and work on better error handling.
- In future work, I would focus on test quality and coverage.

Erik Paluka. October 2020.
