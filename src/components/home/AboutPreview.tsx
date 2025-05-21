import React from "react";
import Section from "../shared/Section";
import Button from "../shared/Button";
import { AboutSection as AboutSectionType } from "../../types";

interface AboutPreviewProps {
  data?: AboutSectionType;
}

// Default data in case Supabase data hasn't loaded yet
const defaultData: AboutSectionType = {
  id: "1",
  title: "About DSNext",
  description: `
    20 Aralık 2024 tarihi, DSNext Teknoloji ve Danışmanlık A.Ş.'nin kurulduğu tarihtir ve bu tarih, sadece bir başlangıcın değil, aynı zamanda büyük bir vizyonun da ilk adımıdır. Teknopark Kuluçka Merkezi'nde yer alarak, teknolojinin en ileri noktalarını keşfetmek ve en kaliteli hizmeti sunmak için yola çıktık.

Amacımız, yazılım dünyasının en karmaşık projelerini, sade, kaliteli ve işlevsel çözümlerle buluşturmak. Anahtar teslim projelerde ve çalışan kiralama hizmetlerinde, müşterilerimizin her bir ihtiyaçlarına en üst düzeyde çözüm sağlamak için gece gündüz çalışıyoruz.

Bizim için her şeyin temelinde kalite ve basitlik yer alır. Çünkü karmaşıklığı basitleştirmek, gerçek yazılım mühendisliğinin gücüdür. Her bir satır kod, sadece bir çözüm değil, aynı zamanda kullanıcı dostu bir deneyim yaratmak için yazılır.

Ancak, yalnızca müşterilerimize değil, aynı zamanda çalışma arkadaşlarımıza da değer veriyoruz. DSNext ailesi olarak, her bir çalışanımızın potansiyelini en üst düzeye çıkarmak için destekleyici ve zorlayıcı bir ortam sunuyoruz. Birlikte büyüyor, birbirimizin gücünden ilham alıyoruz. Çünkü inanıyoruz ki, en iyi sonuçlar yalnızca bir ekip olarak birlikte hareket ettiğimizde ortaya çıkar.

Geleceğin teknolojilerini inşa etmek ve her bir projemizde bir adım daha ileri gitmek için DSNext, her zaman bir adım önde olmaya devam edecek.

DSNext Teknoloji ve Danışmanlık A.Ş. | Birlikte Daha Güçlüyüz.
  `,
  image:
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

const AboutPreview: React.FC<AboutPreviewProps> = ({ data = defaultData }) => {
  return (
    <Section backgroundColor="white" spacing="lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
            <img
              src={data.image}
              alt="About TechSphere"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-lg -z-10"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-lg -z-10"></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">{data.title}</h2>
          <div className="text-gray-600 space-y-4">
            {data.description.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/about/company">Our Company</Button>
            <Button href="/about/leadership" variant="outline">
              Leadership Team
            </Button>
            <Button href="/about/clients" variant="ghost">
              Client Success Stories
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutPreview;
