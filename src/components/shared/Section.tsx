import React from "react";

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  backgroundColor?: "white" | "light" | "dark" | "transparent";
  spacing?: "sm" | "md" | "lg";
}

const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  centered = false,
  className = "",
  backgroundColor = "white",
  spacing = "md",
}) => {
  const bgColors = {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900 text-white",
    transparent: "transparent",
  };

  const spacingStyles = {
    sm: "py-8",
    md: "py-12",
    lg: "py-20",
  };

  const textAlignment = centered ? "text-center" : "text-left";

  return (
    <section
      className={`${bgColors[backgroundColor]} ${spacingStyles[spacing]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div
            className={`${textAlignment} max-w-3xl ${
              centered ? "mx-auto" : ""
            } mb-10`}
          >
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
