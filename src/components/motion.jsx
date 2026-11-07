import React from 'react';

function createMotionComponent(Tag) {
  return React.forwardRef(function MotionElement(
    {
      initial,
      animate,
      exit,
      transition,
      layout,
      whileHover,
      whileTap,
      variants,
      className = '',
      style = {},
      children,
      ...rest
    },
    ref
  ) {
    return (
      <Tag
        ref={ref}
        className={`transition-all duration-300 ease-out ${className}`}
        style={style}
        {...rest}
      >
        {children}
      </Tag>
    );
  });
}

export const motion = {
  div: createMotionComponent('div'),
  article: createMotionComponent('article'),
  section: createMotionComponent('section'),
  span: createMotionComponent('span'),
  button: createMotionComponent('button'),
};

export function AnimatePresence({ children }) {
  return <>{children}</>;
}

