
# Potential Add On Tasks

1. Anything you want to refactor?
2. What are some potential problems you see?  You could build UI to just add new DOM element.
3. Add the ability for a button to hide/show the form.
    `    <button onclick="$('form').toggle()">Hide</button>`
4. Add ability to delete tasks.  
5. Create 404 page.
6. Add Index to invididual task records in our "database".

# Steps to solve initial problem

1. Update alertButtonHandlr to the proper name in index.html
2. Update createTask to properly parse the req.body
3. Update refreshDom to clear the list before it rebuilds it.