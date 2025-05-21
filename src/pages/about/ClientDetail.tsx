import { useParams } from "react-router-dom";
import { useCustomers } from "../../hooks/useAboutData";
import { DetailLayout } from "./DetailLayout";
import { LoadingSpinner } from "../../components/shared";
import { Customer } from "../../types/supabase";

export default function ClientDetail() {
  const { id } = useParams<{ id: string }>();
  const { customers, loading, error } = useCustomers(false);
  const customer: Customer | undefined = customers.find(
    (c: Customer) => c?.id === id
  );

  if (loading || !customer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !customer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error loading client information
          </h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </div>
    );
  }

  const { name, logo_url, description, website_url } = customer;

  return (
    <DetailLayout
      title={name}
      imageUrl={logo_url || undefined}
      backLink="/about#clients"
    >
      <div className="prose max-w-none">
        {description && <p className="text-lg">{description}</p>}

        {website_url && (
          <div className="mt-6">
            <a
              href={
                `${website_url}`.startsWith("http")
                  ? website_url
                  : `https://${website_url}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              <span>Visit Website</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </DetailLayout>
  );
}
