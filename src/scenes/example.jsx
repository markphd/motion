import {Circle, Img, makeScene2D} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
  // Create your animations here

  const myCircle = createRef();
  const image = createRef();

  view.add(
    <Img
        ref={image}
        src="https://images.unsplash.com/photo-1679218407381-a6f1660d60e9"
        width={300}
        radius={20}
      />,
  )

  view.add(
    <Circle
      ref={myCircle}
      // try changing these properties:
      x={-300}
      width={140}
      height={140}
      fill="#e13238"
    />,
  );


  yield * image().position.x(-300, 1).to(300, 1),
  yield * image().opacity(0, 1),
  yield * image().alpha(1, 1).to(0, 1),
  yield* all(
    myCircle().position.x(300, 1).to(-300, 1),
    myCircle().fill('#e6a700', 1).to('#e13238', 1)
  );

});



// export default makeScene2D(function*(view) {
//   const circle = createRef()
//   view.add(<Circle ref={circle} width={100} height={100} />)

//   yield* flicker(circle())
// })

// function* flicker(circle) {
//   circle.fill("red")
//   yield
//   circle.fill("blue")
//   yield
//   circle.fill("red")
//   yield
// }
