import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { Check, Mail } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

const Newsletter = () => {
  return (
    <section className="mt-10 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col-reverse flex-wrap justify-between md:items-center md:space-x-6 md:flex-row md:mb-16">
        <div className="flex-[50%]">
          <h1 className="h2">
            Zapisz się na newsletter. <br />
            Otrzymaj 100zł rabatu.
          </h1>

          <div className="mt-4 flex w-full max-w-sm items-center space-x-2 border-b-[2px]">
            <Mail size={40} />
            <Input
              type="email"
              placeholder="Wpisz email"
              className="border-none"
            />
            <Button
              variant="link"
              type="submit"
              className="text-black underline-effect hover:no-underline"
            >
              Dołącz
            </Button>
          </div>
          <div className="mt-6 flex items-center space-x-2 w-[80%]">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[12px]  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Wyrażam zgodę na przetwarzanie danych osobowych w celu
              otrzymywania newlsettera. Zobacz naszą politykę prywatności.Accept
              terms and conditions
            </label>
          </div>
        </div>
        <div className="flex-[50%]">
          <Image
            src="/images/Newsletter.png"
            width={652}
            height={400}
            alt="Featured bijou"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
