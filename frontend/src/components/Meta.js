import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To ComfyShop Home",
  description: "We sell Comfy furniture!",
  keywords: "furniture, sofa, chairs, offce, desk",
};

export default Meta;
