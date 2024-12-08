import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16 bg-gray-900">
      <div className="container overflow-hidden">
        {/* Infinite scrolling section */}
        <div className="flex items-center gap-12 animate-scroll">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
          {brandsData.map((brand) => (
            // Duplicate for seamless infinite scroll
            <SingleBrand key={`${brand.id}-duplicate`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex items-center justify-center px-6 py-6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        {/* Adjust width and height here for larger size */}
        <Image
          src={imageLight}
          alt={name}
          width={800} // Increased width
          height={800} // Increased height
          className="hidden dark:block"
        />
        <Image
          src={image}
          alt={name}
          width={800} // Increased width
          height={800} // Increased height
          className="block dark:hidden"
        />
      </a>
    </div>
  );
};
