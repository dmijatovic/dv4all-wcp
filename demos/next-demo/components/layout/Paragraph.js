const Paragraph = props => {
  return (
    <>
    <style jsx>{`
      p{
        font-size:1rem;
        font-color: red;
      }
    `}</style>
    <p>{props.children}</p>
    </>
  );
};

export default Paragraph;