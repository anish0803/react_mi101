const Buttons = ({ handleC }) => {
    return (
      <div className="center">
        <button className="mid"
          onClick={() => {
            handleC("prev");
          }}
        >
          Prev
        </button>
        <button className="mid"
          onClick={() => {
            handleC("reset");
          }}
        >
          Reset
        </button>

        <button className="mid"
          onClick={() => {
            handleC("next");
          }}
        >
          Next
        </button>
        
      </div>
    );
  };
  
  export default Buttons;