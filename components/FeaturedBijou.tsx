import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const FeaturedBijou = () => {
  return (
    <section className="mt-10 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col flex-wrap justify-between md:items-center md:space-x-6 md:flex-row md:mb-16">
        <div className="flex-[50%]">
          <h1 className="h2">Luksusowa biżuteria & zegarki</h1>
          <p>
            Odryj naszą selekcję wyjątkowej biżuterii i zegarków z drugiej ręki{" "}
            <br />
            od największych luksusowych marek.
          </p>
          <Button
            variant="link"
            className="text-black underline w-fit p-0 mt-4"
          >
            Zobacz selekcję <ArrowRight size={16} className="ml-1 inline" />
          </Button>
        </div>
        <div className="flex-[50%]">
          <Image
            src="/images/Featured_bijou.png"
            width={652}
            height={400}
            alt="Featured bijou"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBijou;
