//Home page text
const homeText = {
    paragraph1: "I am a graduate of UC Berkeley Extension's Coding Boot Camp with a certificate in Full-Stack Web Development, and Fordham University with two Bachelor's degrees in Communications: Digital Technology and Emerging Media, and Film/Television Studies. Currently living in Milford, CT; willing to relocate if necessary.",
    paragraph2: "I am proficient in HTML5, CSS/CSS Frameworks, Javascript/jQuery, and SQL coding languages, and have experience working in MERN stack development. I specialize mostly in front-end development and design, enhanced by knowledge in Adobe Creative Cloud applications, but I can also work in back-end development when needed.",
    paragraph3: "I am ideally looking for a position that will allow me to utilize my ability to create an eye-catching, yet simple user-friendly interface for websites, apps, and other digital media, in order to enhance the user experience with a visually optimized client-side service. Having been on the consumer side of various software, I understand the frustration users may have when navigating through different pages/menus just to find one small piece of information. My mission as a front-end developer is to create an intuitive, easy-to-follow format that minimizes any confusion or difficulty in using."
};

const blogText = {
    entry1: `As I continued to add different screen views for my site’s responsive design (Now currently optimized for mobile, tablet, and standard desktop sizes), I realized that keeping every style object in one file was going to result in an extremely long file, especially when including responsive design for additional pages. Not only would it make finding specific sets a headache to scroll through, but it could also result in accidentally making changes to the wrong object, since a good portion of the styling is very similar across all screen views. With this method of organization, I can be 100 percent sure that whatever changes I make will only be for a specific page, and I won’t have to sift through potentially thousands of lines of code just to make a simple modification.`,
    entry2: {
        paragraph1: `One of the biggest problems I’ve ran into when working in React.js has always been the asynchronous nature of the “this.setState()” function and the React state in general. Sometimes, when I have a function that makes a change to the state, the change won’t appear until reloading the page twice. The reason for this, from what I understand, is that due to this.setState() being asynchronous, it will not be fired off fast enough to appear on the page after a single reload. However, upon implementing these lifecycle methods along with utilizing local storage, I’ve managed to work around the state’s asynchrony.`,
        paragraph2: `So now, when I change the page’s width to various screen sizes, whether it be for mobile, tablet, or computer, the format adjusts to that change instantly, and there is no need to reload again. Full disclosure, I don’t know exactly why it works, but for the sake of time and finishing this site’s updates, I can leave it a mystery for now.`
    }
};

export const webText = {
    homeText,
    blogText
};