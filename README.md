# orchard-test

Hello Orchard,

Thank you for the meeting the other day and the opportunity. Please see the completed test available in this application. I figured I might clarify some notes here. 

## Things I Might Mention

- I haven't used any CSS Frameworks to achieve this. In a previous test with another company it wasn't a heavy factor but it was slightly questioned if I was leaning on a framework to complete the required task, since agency is heavily front end required I figured you may appreciate no framework being applied. 
- The NewsFeedItem.vue ('@/components/news-feed/newsFeedItem.vue') would ideally be replaced with a router-link component with a tag of article to meet the link to new pages criteria. I haven't done this deliberately as I wanted to handle the click event, demonstrate that the whole area would be clickable, and didn't want a poor looking news article to transition to and from. So have just implemented the click handler from now. 
- DataCy Attributes have been applied, to imply thoughts about testing during development, it's not applied everywhere as more just to imply that it is thought about during development for review purposes. 
- I would additionally refactor the css / scss theming architecture in `src/App.vue` to a `src/styles` directory structure for global theming for an application.
- I believe there's potentially a font mismatch to some degree or a rendering issue, the fonts in this application aren't as thin as appears in the invision but I wasn't going to throw time into chasing this. 
- I would also consider some refactoring around naming conventions for `src/layout/ImageModal` and `ImageModalItem.vue`,
I just don't think they're entirely accurate in the way they're used.

If there's any questions or queries please let me know and I'd be happy to assist, otherwise I hope your week is travelling well!


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
