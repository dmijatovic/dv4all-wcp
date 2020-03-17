const Paragraph = props => {
  return (
    <>
    <style jsx>{`
      div{
        font-size:1rem;
        line-height: 1.5rem;
        padding: 0.5rem 0rem;
      }
    `}</style>
    <div>{props.children}</div>
    </>
  );
};

export default Paragraph;