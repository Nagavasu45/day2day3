DAY1:
1.what is SPA:
        SPA stands for single page application and we can develop single page application using react
        and loads all of its content on a single HTML page. This is in contrast to traditional web applications, 
        which load a new HTML page for each new view. SPAs are more responsive and user-friendly, as 
        users do not have to wait for new pages to load every time they interact with the application.
      
2.what is virtual dom:
        DOM : DOM stands for Document Object Model. Normally, whenever a user requests a webpage, 
        the browser receives an HTML document for that page from the server. The browser then constructs a logical, 
        tree-like structure from the HTML to show the user the requested page in the client.
        The problem with DOM
        DOM manipulation is the heart of the modern, interactive web. Unfortunately, 
        it is also a lot slower than most JavaScript operations. This slowness is made worse by the fact 
        that most JavaScript frameworks update the DOM much more than they have to.

        virtual dom: It's a light weight reh4sentation of real dom and
        1.DOM gets created whenever any React application gets loaded on the screen for the first time, Whenever React components 
        gets mounted on the screen for the first time.
        2.Now when any user makes any changes on the screen like button click, then the changes will not directly go to Real Dom.
        So,we are having two virtual doms, one VDOM gets created at the time of mounting of react component so it is a copy of your real DOM.
        Another VDOM is the dom which contains the new changes, updated state variables values.
        Now these two virtual DOMs will get compared with each other and will check for the new changes this complete procedure is known as diffing algorithm.
        Now the new changes will be updated in your Real DOM, this procedure is known as Recoinciliation This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.
      
3.What is difference between class and functional component:
      A.class component using Class keyword
      a.function compponet using function keyword
      B.class component has render function 
      b.function componet does't has render function
      C.class can use life cycle methods
      c.function can use hooks instead of lifecycle methods for same purpose
      D.Class components we have a feature to set the set state in component
      d.Functional components is a plain JavaScript, you do not have a choice 
      to set the state in functional component.
      E.Class components are sometimes called stateful components.
      e.Functional components are somethimes called stateless components.
     
4. What is package.json:
     The package.json file is a crucial part of any Node.js project, 
     including React applications. It's a JSON (JavaScript Object Notation) 
     file that serves as a manifest for your project. In the context of React,
      it specifies the project's metadata and its dependencies like
    Name and Version,Dependencies,Scripts,DevDependencies:
      
5.what is jsx?
        JSX, which stands for JavaScript XML, is a syntax extension for JavaScript that is 
      commonly used in React applications. It allows you to write HTML-like code within your 
      JavaScript code. JSX provides several benefits for building user interfaces, and here's 
      why we use it instead of plain JavaScript:
    1.Declarative Syntax
    2.Readability
    3.Component Composition
    4.Performance Optimization
    5.Ecosystem Support
      </pre></h4>
      <br/>
      <h4><pre>
6.What does mean by state and its use in react?
      The state is a built-in React object that is used to contain data or information about 
      the component. 
      A component's state can change over time; whenever it changes, the component re-renders.
      
7.What is the Difference between react and react native? Which one is library or framework?
    1.JS Library	
    A.Mobile Framework
    2.Use to build web application	
    B.use to build cross-plateform mobile application.
    3.V-DOM render data on browser	
    C.Native API for mobile components rendering
    4.create robust animation using CSS	
    D.Need to use API for create animation
    
8.Difference b/w Stateful and stateless Component:
    Stateful component:

    1.A component that manages the state in class-based with state or functional with useState.
    2.In some component, the data keeps changing.
    3.In most of the cases, the class-based components extend react component.
    4.Stateful components can use react life cycle hooks
    5.In stateful components it good to use the this instance
    Stateless component:

    1.A component that has no internal state management in it.
    2.In some component, the data remains the same, for example, showing the static data.
    3.Function components are simply functions that receive the props and return the JSX code.
    4.Stateless components can not use the react life cycle hooks
    5.Here need not to use this instance, they just receive the props as an argument
    
9.What do you know about NPM?
    NPM (Node Package Manager) is the default package manager for Node.js, a popular runtime environment for executing JavaScript code outside of web browsers. It is a fundamental tool in the JavaScript ecosystem and plays a crucial role in managing packages and dependencies for Node.js applications. Here is an overview of what NPM is and what it's used for:
    1.Package Management
    2.Dependency Management
    3.Command-Line Interface (CLI)
    4.Scripts
    5.Security
    6.Open Source and Community

DAY 2:
1. What is an event in react?
An event in React is an action that is triggered by the user or the system. For example, a mouse click, keyboard press, or window resize are all events. React has its own event handling system, which is known as Synthetic Events. Synthetic Events are cross-browser wrappers of the browser's native events, which means that they have the same interface and behavior across all browsers.

To handle events in React, you use event handlers. Event handlers are functions that are passed to React elements as props. When the event is triggered, the function is called with an event object as the argument. The event object contains information about the event, such as the type of event, the target element, and any additional data.

Here are some examples of common events in React:

onClick: Fired when the user clicks an element.
onChange: Fired when the user changes the value of an input element.
onSubmit: Fired when the user submits a form.
onKeyPress: Fired when the user presses a key on the keyboard.
onMouseOver: Fired when the user moves the mouse cursor over an element.
onMouseOut: Fired when the user moves the mouse cursor away from an element.


2. What is the package name you are using for routing?
Name of the packege is React Router DOM.


3. What is lazy loading in react ?
Lazy loading is a technique in web development that involves loading specific parts of a web application only when they are needed. In the context of React.js, it allows you to load components, modules, or assets asynchronously and on-demand, improving the initial load time and overall performance of your application.

Why Use Lazy Loading in React?

Improves initial page load time.
Reduces the size of the initial bundle.
Enhances user experience by loading resources on-demand.
Optimizes performance for large applications.
Component used in lazyloading

Suspense -
Lazy - import from 'react'


4. H/W Difference between Axios and fetch?

A.Axios is  3rd Prty Library	
1.JavaScript Method
B.Automatically transform Data	
2. manually transform data
C.It' Has to be compiled	
3.can be read directly by browsers
D.Need to install externally	
4.No need to install


Day3:

1. What is Props Drilling Concept ?What is State Uplifting?
Prop Drilling: Prop drilling, also known as "prop passing," is a common issue in React applications. It occurs when you need to pass data through multiple levels of nested components, even if some of the intermediary components don't use that data. It can make your code less maintainable and harder to understand.
State Lifting: State lifting is the process of moving state up the component hierarchy to a common ancestor or a higher-level component where it can be shared by multiple child components that need access to the same data. This makes it easier to manage and update the shared state.
Benefits of State Lifting:
Simplified Code: State lifting reduces redundancy in your code and makes it easier to manage, as you don't have to pass props through many levels of components.
Improved Performance: Avoiding prop drilling can improve the performance of your application, as React doesn't need to re-render components unnecessarily.
Easier Maintenance: When you need to modify the state or data, you only need to do it in one place (the common ancestor) rather than making changes in multiple child components.

2. Context API?
The Context API is a powerful feature in React that allows you to manage and share state data between components without having to pass props down through every level of your component tree. It's especially useful for scenarios where multiple components need access to the same data.
Context API is a built-in feature in React that provides a way to pass data through the component tree without having to pass props manually at every level. It allows you to share data between components, such as theme information, user authentication, or any other global data.

When to Use Context API?
You should consider using the Context API when you have data that needs to be accessed by multiple components at different levels of the component tree. It simplifies data sharing and avoids "prop drilling."
A Provider component is used to wrap the part of your component tree where you want to share data. It accepts a value prop, which will provide the shared data to its child components.
you can use the useContext hook to access the context data more conveniently.


3. What is UseState Hook ?(Implementation)
useState is a built-in hook in React.js that allows you to add state to functional components. State is a way to store and manage data that can change over time, and it's a crucial concept in React as it enables your components to re-render when the state changes. With useState, you can create and manage state variables within your functional components.

4. What is useEffect Hook ?(Implementation)
useEffect is a built-in hook in React that allows you to perform side effects in functional components. Side effects typically involve tasks such as data fetching, DOM manipulation, or subscribing to external events. useEffect is a critical part of React because it helps you manage the side effects of your components.
useEffect :
useEffect takes two arguments: a function and an array of dependencies.
The function inside useEffect is where you place your side effect code.
The dependencies array is optional. If provided, the effect will only be re-run when the values in this array change.
5. Do you know about SEO ? Is it true that react js supports SEO support?
Search Engine Optimization (SEO) is a set of techniques and strategies used to improve a website's visibility in search engine results. The primary goal of SEO is to attract organic (non-paid) traffic to a website and increase its ranking in search engine results pages (SERPs).
is it true that react js support SEO
React.js, a popular JavaScript library for building user interfaces, was once criticized for its initial lack of SEO support because it primarily renders content on the client-side. However, there have been significant improvements in making React applications more SEO-friendly.
React applications can implement Server-Side Rendering (SSR) to improve SEO. SSR pre-renders React components on the server and sends the fully rendered HTML to the client. This allows search engines to crawl and index the content.