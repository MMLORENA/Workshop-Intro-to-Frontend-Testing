import "./Decoration.css";

export const Decoration = () => {
  return (
    <div className="images">
      <div className="images__group">
        <img
          src="/assets/logo-bn.svg"
          alt="Logo The Refactor Project Bootcamp school"
          width={169.5}
          height={57.5}
        />
        <img
          src="/assets/tech-fem-logo-portrait.jpg"
          alt="Logo Tech Fem Community"
          width={92}
          height={57.5}
        />
      </div>
      <img
        src="/assets/testing-library-logo.png"
        alt="Logo Testing Library"
        width={64}
        height={64}
      />
    </div>
  );
};
