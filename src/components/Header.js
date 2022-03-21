export const Header = ({ title, description, link }) => {
  return (
    <section className="header">
      <h1>
        {title}
        <a href={link}>{description}</a>
      </h1>
    </section>
  );
};
