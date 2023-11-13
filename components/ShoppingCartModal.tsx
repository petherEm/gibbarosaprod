import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const ShoppingCartModal = () => {
  const cartCount: number = 4;
  return (
    <>
      <Sheet defaultOpen>
        <SheetContent className="sm:max-w-lg w-[90vw]">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>

          <div className="h-full flex flex-col justify-between">
            <div className="mt-8 flex-1 overflow-y-auto">
              <ul className="-my-6 divide-y divide-gray-200">
                {cartCount === 0 ? (
                  <h1 className="py-6">You do not have any items</h1>
                ) : (
                  <h1 className="py-6">You have some items.</h1>
                )}
              </ul>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppingCartModal;
