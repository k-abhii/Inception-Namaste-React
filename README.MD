# React Element is object at the end of the day

# Render is converting this object to DOM elements

**React.creteElement is taking 1st argument as What Tag you want and 2nd argument attribute of tag(like id,class) and 3rd argument as children**

**Never thinks that React.createElement is creating HTML. It is creating Object while rendering on DOM it will convert itself into HTML**

if you want to give sibling in React.createElement then you have to pass children in array.

** You have to create Array of Children for Sibling **
