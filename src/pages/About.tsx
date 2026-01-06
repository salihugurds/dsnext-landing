import { useLocation, useNavigate } from "react-router-dom";
import { useCustomers } from "../hooks/useAboutData";
import { LoadingSpinner } from "../components/shared";
import { Section, Container } from "../components/layout";
import { Client } from "../types/about";
import TeamSection from "../components/home/TeamSection";
import { AboutSection } from "../types";
import { useEffect } from "react";

const about: Omit<AboutSection, "id"> = {
  title: "About Us",
  description: `
    December 20, 2024, marks the founding date of DSNext Teknoloji ve Danışmanlık A.Ş., and this date signifies not just a beginning, but also the first step of a grand vision. By establishing ourselves in the Technopark Incubation Center, we set out to explore the forefront of technology and deliver the highest quality services.

Our goal is to bring together the most complex projects in the software world with simple, high-quality, and functional solutions. In turnkey projects and staff augmentation services, we work tirelessly to provide top-level solutions tailored to every client need.

At the core of everything we do lies quality and simplicity. Because simplifying complexity is the true power of software engineering. Every line of code we write is not only a solution but also an effort to create a user-friendly experience.

However, we don't just value our clients — we value our teammates as well. As the DSNext family, we provide a supportive yet challenging environment to help each team member reach their full potential. We grow together and draw inspiration from each other’s strengths. Because we believe that the best outcomes emerge only when we act as a team.

To build the technologies of the future and take every project a step further, DSNext will always continue to stay one step ahead.

DSNext Teknoloji ve Danışmanlık A.Ş. | Stronger Together.
  `,
  image:
    "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

export default function About() {
  const {
    customers,
    loading: customersLoading,
    error: customersError,
  } = useCustomers(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (customersError) {
    return (
      <Section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Error loading data
          </h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      </Section>
    );
  }

  const handleCardClick = (type: "client", id: string) => {
    navigate(`/about/${type}/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        id="company"
        className="relative h-screen flex items-center justify-center bg-gray-900 text-white"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${about.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">{about.title}</h1>
          {about.description.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-sm md:text-base mb-8 max-w-3xl mx-auto"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white mt-2 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Leadership Section
      <TeamSection /> */}

      {/* Clients Section */}
      {customers?.length > 0 && (
        <Section id="clients" className="py-16 bg-gray-100">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Clients
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>

            {customersLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {customers.map((client: Client) => (
                  <div
                    key={client.id}
                    onClick={() => handleCardClick("client", client.id)}
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-lg"
                  >
                    {client.logo_url && (
                      <div className="mb-4 flex items-center justify-center">
                        <img
                          src={client.logo_url}
                          alt={client.name}
                          className="max-h-full max-w-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-medium text-gray-900 text-center">
                      {client.name}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </Section>
      )}
    </div>
  );
}
