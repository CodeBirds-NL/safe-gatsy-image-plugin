import React from "react";
import Img, { FluidObject } from "gatsby-image";

/** Constants applying only to Placeholder component */
const defaultBgColor = "f2f2f2";
const defaultSize = "960x540";

type ImageData = {
  alt_text: string;
  localFile: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  source_url: string;
};
interface ImageProps {
  data: ImageData;
  className?: string;
  style?: Object;
  /** Only applies if gatsby-image component is used */
  imgStyle?: Object;
  [key: string]: any; // any other props
}

const Image = (props: ImageProps) => {
  const { data, ...imageProperties } = props;
  if (!props.data) {
    return <PlaceHolder {...imageProperties} />;
  }

  const { alt_text, localFile, source_url } = data;

  return localFile ? (
    <Img
      alt={alt_text}
      fluid={localFile.childImageSharp.fluid}
      {...imageProperties}
    />
  ) : (
    <img alt={alt_text} src={source_url} {...imageProperties} />
  );
};

export const PlaceHolder = ({
  bg_color = defaultBgColor,
  size = defaultSize,
  ...props
}) => {
  const url = `https://dummyimage.com/${defaultSize}/${defaultBgColor}/.png&text=Lorem+Ipsum`;
  return <img src={url} {...props} />;
};

export default Image;
