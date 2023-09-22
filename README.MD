# React Element is object at the end of the day

# Render is converting this object to DOM elements

**React.creteElement is taking 1st argument as What Tag you want and 2nd argument attribute of tag(like id,class) and 3rd argument as children**

**Never thinks that React.createElement is creating HTML. It is creating Object while rendering on DOM it will convert itself into HTML**

if you want to give sibling in React.createElement then you have to pass children in array.

** You have to create Array of Children for Sibling **
** JSX will make our life easy when creating Tag**
** But Without JSX also We can write React Code this is example of Core React**

\*\*

<div id="root">

<h1>Abhimanyu is here</h1>
</div> Here h1 Tag will be replaced by parent when we are doing root.render 
**
** What does root.render is doing ? **
Putting parent Tag inside root

** React is only working inside div id =root **

React Has taken control over this div (id = root)

React is library we can apply in small portion of our app also that is not the case with framework.
