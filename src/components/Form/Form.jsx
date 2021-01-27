import { useRecoilState } from "recoil";
import { atomAnimation } from "../../atoms/atomAnimation";

export const Form = () => {
  const [animation, setAnimation] = useRecoilState(atomAnimation);

  function animationPage() {
    setAnimation({ ...animation, header: "rUp", cards: " container rDown" });
    console.log(animation);
  }

  return (
    <div style={{ position: "absolute" }}>
      <button onClick={animationPage}>cLCOSE</button>
    </div>
  );
};
