function Section({
  as = "section",
  id,
  size = "default",
  container = true,
  className = "",
  children,
}) {
  const sizes = {
    sm: "py-10 sm:py-14",
    default: "py-12 sm:py-16",
    lg: "py-14 sm:py-20",
  };

  const Component = as;

  return (
    <Component id={id} className={`relative ${sizes[size]} ${className}`}>
      {container ? <div className="container-page">{children}</div> : children}
    </Component>
  );
}

export { Section };
export default Section;
