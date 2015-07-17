Main performance issues when scrolling:
1.	Excess of moving pizzas were created.
  a.	To fix it I had to reduce the quantity of moving pizzas to just enough to fill out the container with pizzas.
2.	The updatePositions function was producing a force synchronous layout.
  a.	To fix it I had to take out the read variable from the loop and to make sure the function reads the value one time and then writes all the new ones on the loop.
3.	Minor fixes
  a.	Used requestAnimationFrame each time the updatePositions is called.
  b.	Used fasters DOM Selectors.
  c.	Add Will-Change property to .mover class in order to make each pizza have its own layer. 

In order to reduce the time when resizing the pizza with the sliders, I had to re-do the function; there was too much going on to accomplish a simple task.
