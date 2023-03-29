import { useState } from "react";
import {
  ButtonStyle,
  ContainerKnowStyle,
  ImageContainerStyle,
  ImageStyle,
  StacksKnowStyle,
  TextKnowStyle,
  TitleKnowStyle,
} from "./style";
import technologyList from "./technologyList";

import ReactJSImage from "../../../assets/stacks/ReactJS.png";
import JavaScriptImage from "../../../assets/stacks/JavaScript.png";
import GitImage from "../../../assets/stacks/Git.png";
import SassImage from "../../../assets/stacks/Sass.png";
import HTMLImage from "../../../assets/stacks/HTML.png";
import CSSImage from "../../../assets/stacks/CSS.png";
import ThreejsImage from "../../../assets/stacks/Threejs.png";
import FigmaImage from "../../../assets/stacks/Figma.png";
import TailwindImage from "../../../assets/stacks/Tailwind.png";
import BootstrapImage from "../../../assets/stacks/Bootstrap.png";
import StyledcomponentsImage from "../../../assets/stacks/Styled components.png";
import IllustratorImage from "../../../assets/stacks/Illustrator.png";
import PhotoshopImage from "../../../assets/stacks/Photoshop.png";
import SketchupImage from "../../../assets/stacks/Sketchup.png";
import BlenderImage from "../../../assets/stacks/Blender.png";

function Knowledge() {
  const images = {
    ReactJS: ReactJSImage,
    JavaScript: JavaScriptImage,
    Git: GitImage,
    Sass: SassImage,
    HTML: HTMLImage,
    CSS: CSSImage,
    Threejs: ThreejsImage,
    Figma: FigmaImage,
    Tailwind: TailwindImage,
    Bootstrap: BootstrapImage,
    Styled: StyledcomponentsImage,
    Illustrator: IllustratorImage,
    Photoshop: PhotoshopImage,
    Sketchup: SketchupImage,
    Blender: BlenderImage,
  };

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const displayedTechnologyList = showAll
    ? technologyList
    : technologyList.slice(0, 6);

  return (
    <ContainerKnowStyle>
      <TitleKnowStyle>Conhecimentos</TitleKnowStyle>
      <StacksKnowStyle>
        {displayedTechnologyList.map((technology) => (
          <ImageContainerStyle key={technology.name}>
            <ImageStyle src={images[technology.name]} alt={technology.name} />
            <TextKnowStyle>{technology.name}</TextKnowStyle>
          </ImageContainerStyle>
        ))}
      </StacksKnowStyle>

      <ButtonStyle onClick={handleClick}>
        {showAll ? "Ver menos" : "Ver mais"}
      </ButtonStyle>
    </ContainerKnowStyle>
  );
}

export default Knowledge;
