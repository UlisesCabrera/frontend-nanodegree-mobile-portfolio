## Website Performance Optimization portfolio project

### How to test the performance?
- Open the pizza.html on Google Chrome.
- Go to the developers tools by right clicking on the page and selecting "Inspect Element"
- Go to the Timeline section and click the record button.
- Scroll thru the page and click stop to see the page performed.

### Steps to get 60fps on pizza.html when scrolling

- Reduce the quantity of moving pizzas to just enough to fill out the container with pizzas.
- Refactor the updatePositions to stop producing a force synchronous layout, in order to fix it you need to take out the read variable from the loop and to make sure the function reads the value one time and then writes all the new ones on the loop.
- Use requestAnimationFrame each time the updatePositions is called.
- Use fasters DOM Selectors like getElementById or getElementsByClassName
- Add Will-Change property to .mover class in order to make each pizza have its own layer. 

### Steps to make the resize pizza less than 5 ms

- In order to reduce the time when resizing the pizza with the sliders, you have to re-do the function; there is too much going on to accomplish a simple task.
