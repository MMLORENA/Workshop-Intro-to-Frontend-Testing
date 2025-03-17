import "./Decoration.css";

export const Decoration = () => {
  return (
    <div className="images">
      <div className="images__group">
        <img
          src="/assets/logo-bn.svg"
          alt="Logo The Refactor Project Bootcamp school"
          width={169.5}
          height={68}
        />
        <img
          src="/assets/code-women-logo.png"
          alt="Code women Community"
          width={169.5}
          height={68}
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
