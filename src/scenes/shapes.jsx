import { Circle, Img, makeScene2D } from "@motion-canvas/2d";
import { all, createRef } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const initialBall = createRef();
  const coverImage = createRef();

  view.add(
    <Circle ref={initialBall} x={0} width={500} height={500} radius={100} fill="#e13238" opacity={0}/>
  );
  view.add(
    <Img
      ref={coverImage}
      src="https://images.unsplash.com/photo-1711539924946-2445fcebcdd3"
      width={600}
      height={400}
      radius={20}
      opacity={0}
    />
  );

  yield* all(
    initialBall().position.x(300, 1).to(-300, 1),
    initialBall().fill('#e6a700', 1).to('red', 1),
    initialBall().opacity(1, 1),
    coverImage().position.x(-300, 1).to(300, 1),
    coverImage().opacity(1, 1),
    coverImage().alpha(1, 1).to(1, 1),
  );
});
