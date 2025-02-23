const Accordion = ({ title, content }) => {
  return (
    <details className="p-2 border-b border-b-dark border-opacity-20">
      <summary className="text-sm font-semibold text-primary md:text-base lg:text-lg">
        {title}
      </summary>
      <p className="text-xs text-dark mt-2 text-justify lg:text-sm">
        {content}
      </p>
    </details>
  );
};

export default Accordion;
