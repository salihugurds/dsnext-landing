import { ReactNode } from "react";
import { Container } from "../../components/layout/Container";

type DetailLayoutProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children: ReactNode;
  backLink: string;
};

export function DetailLayout({
  title,
  subtitle,
  imageUrl,
  children,
}: DetailLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <Container className="py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {imageUrl && (
            <div className="h-64 md:h-80 bg-gray-200 overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
            {subtitle && (
              <p className="text-xl text-blue-600 mb-8">{subtitle}</p>
            )}

            <div className="prose max-w-none text-gray-700">{children}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
