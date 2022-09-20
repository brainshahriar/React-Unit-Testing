import React from "react";

type MultiProps = {
  multi: string[];
};

const Multi: React.FC<MultiProps> = (props: MultiProps) => {
  const { multi } = props;
  return (
    <div>
      <ul>
        {multi.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default Multi;
