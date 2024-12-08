export const CardContainer = ({ children, className }) => (
  <div className={`perspective-container ${className}`}>{children}</div>
);

export const CardBody = ({ children, className }) => (
  <div className={`card-body ${className}`}>{children}</div>
);

export const CardItem = ({ children, translateZ, className }) => (
  <div
    className={`card-item ${className}`}
    style={{ transform: `translateZ(${translateZ}px)` }}
  >
    {children}
  </div>
);
