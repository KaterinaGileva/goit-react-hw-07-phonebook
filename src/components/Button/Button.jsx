
export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <>
      
      type={type}
      {...otherProps}
    
      {children}
    </>
  );
};