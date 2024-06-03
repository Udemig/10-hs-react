import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <div className="bg-primary text-dark p-3 m-3 rounded">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Title</h2>
        <button
          onClick={() => {
            // isOpen değerini trueya çekeriz
            setIsOpen(isOpen === true ? false : true);
          }}
          className="btn btn-danger"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && (
        <p className="mt-4 lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          est atque provident, suscipit porro rem quas dolorem soluta
          exercitationem fugiat.
        </p>
      )}
    </div>
  );
};
export default Accordion;
