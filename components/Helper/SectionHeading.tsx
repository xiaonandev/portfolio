import React from "react";
type Props = {
  title_1: string;
  title_2: string;
  description: string;
};
const SectionHeading = ({ description, title_1, title_2 }: Props) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title_1} <span className="text-cyan-600">{title_2}</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
    </div>
  );
};

export default SectionHeading;
