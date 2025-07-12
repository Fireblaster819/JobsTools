import React from "react";

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={\`bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition px-4 py-2 \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}
