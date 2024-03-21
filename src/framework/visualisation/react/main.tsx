import * as React from "react";

interface MainProps {
  elements: JSX.Element[];
}

export const Main = ({ elements }: MainProps): JSX.Element => {
  elements = elements.map((element, index) => {
    return { ...element, key: `${index}` };
  });

  if (process.env.REACT_APP_BUILD !== "standalone" && process.env.NODE_ENV === "production") {
    return <Embedded elements={elements} />;
  } else {
    return <Standalone elements={elements} />;
  }
};

const Embedded = ({ elements }: MainProps): JSX.Element => {
  return <div className="max-w-7xl w-full h-full">{elements}</div>;
};

const Standalone = ({ elements }: MainProps): JSX.Element => {
  return (
    <div className='w-full h-full flex justify-center items-center mt-10'>
        <div className="max-w-screen-lg">
            {elements}
        </div>
    </div>
  );
};
