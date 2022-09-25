const Heading = ({head, type} ) => {
    return (
      <>
      {type==="heading"?<h1>{head}</h1>:<p>{head}</p>}
      {type==="heading2"?<h2>{head}</h2>:<p>{head}</p>}
      {type==="heading3"?<h3>{head}</h3>:<p>{head}</p>}
      {type==="para"?<h4>{head}</h4>:<p>{head}</p>}



      

      </>
    );
    };
    export default Heading;