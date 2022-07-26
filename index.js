import React from "react";
import Img from "gatsby-image";

const Image = ({ data, style, className }) => {
  if (!data) {
    return <PlaceHolder style={style} className={className} />;
  }

  const { alt_text, localFile, source_url } = data;

  return localFile ? (
    <Img
      alt={alt_text}
      fluid={localFile.childImageSharp.fluid}
      style={style}
      className={className}
    />
  ) : (
    <img alt={alt_text} style={style} className={className} src={source_url} />
  );
};

const defaultBgColor = "f2f2f2";
const defaultSize = "960x540";
export const PlaceHolder = ({
  bg_color = defaultBgColor,
  size = defaultSize,
  ...props
}) => {
  const url = `https://dummyimage.com/${defaultSize}/${defaultBgColor}/.png&text=Lorem+Ipsum`;
  return <img src={url} {...props} />;
};

export default Image;
