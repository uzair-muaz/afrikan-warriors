"use client";

import { useActionState, useMemo, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { CoverImage } from "@/components/ui/CoverImage";
import { Input } from "@/components/ui/Input";
import { SelectField } from "@/components/ui/select";
import {
  deliveryCountries,
  shopCollections,
  shopProducts,
  type ShopCollection,
  type ShopProduct,
} from "@/constants/shop";
import { submitShopInterest, type AudienceState } from "@/lib/actions/audience";
import { cn } from "@/lib/cn";

type CartLine = {
  id: string;
  size?: string;
};

const initial: AudienceState = { ok: false };

export function ShopCatalogue() {
  const [collection, setCollection] = useState<ShopCollection>("All");
  const [sizes, setSizes] = useState<Record<string, string>>({});
  const [cart, setCart] = useState<CartLine[]>([]);
  const [state, action, pending] = useActionState(submitShopInterest, initial);

  const visible = useMemo(
    () =>
      collection === "All"
        ? shopProducts
        : shopProducts.filter((product) => product.collection === collection),
    [collection],
  );

  function add(product: ShopProduct) {
    const size = product.sizes ? sizes[product.id] ?? product.sizes[0] : undefined;
    setCart((current) => [...current, { id: product.id, size }]);
  }

  function remove(index: number) {
    setCart((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  return (
    <div id="collection">
      <div className="flex flex-wrap gap-3 mb-10">
        {shopCollections.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCollection(item)}
            className={cn(
              "border px-4 py-2 font-label-caps text-xs uppercase tracking-widest transition-colors",
              collection === item
                ? "border-primary bg-primary text-on-primary"
                : "border-primary/30 text-on-surface-variant hover:text-primary hover:border-primary",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {visible.map((product) => (
          <li
            key={product.id}
            className="border border-primary/20 bg-surface-container flex flex-col"
          >
            <div className="relative aspect-square overflow-hidden bg-stage">
              <CoverImage
                src={product.image}
                alt={product.imageAlt}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                className="object-center"
              />
            </div>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <p className="font-label-caps text-xs uppercase tracking-widest text-primary">
                {product.collection}
              </p>
              <h3 className="font-headline-md text-xl text-on-surface uppercase">
                {product.name}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant flex-1">
                {product.description}
              </p>
              <p className="font-label-caps text-xs uppercase tracking-widest text-on-surface">
                {product.priceLabel}
              </p>
              {product.sizes ? (
                <SelectField
                  id={`${product.id}-size`}
                  name={`${product.id}-size`}
                  value={sizes[product.id] ?? product.sizes[0]}
                  onValueChange={(value) =>
                    setSizes((current) => ({
                      ...current,
                      [product.id]: value,
                    }))
                  }
                  options={product.sizes.map((size) => ({
                    value: size,
                    label: size,
                  }))}
                />
              ) : null}
              <Button type="button" variant="ghost" onClick={() => add(product)}>
                Add to Cart
              </Button>
            </div>
          </li>
        ))}
      </ul>

      <section id="cart" className="mt-16 border border-primary/20 bg-surface-container p-6 md:p-10">
        <h2 className="font-headline-md text-3xl text-on-surface uppercase mb-2">
          Cart
        </h2>
        <p className="font-body-md text-sm text-on-surface-variant max-w-2xl mb-8">
          Add a delivery address with the order. Card payment is not connected
          yet, so sending this does not take money.
        </p>

        {cart.length === 0 ? (
          <p className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant">
            Your cart is empty.
          </p>
        ) : state.ok ? (
          <p className="font-body-md text-on-surface max-w-xl">
            Thank you. The delivery address is with the request. Nothing has
            been charged — price and payment are confirmed before anything
            ships.
          </p>
        ) : (
          <form action={action} className="flex flex-col gap-4">
            <fieldset disabled={pending} className="flex min-w-0 flex-col gap-4 border-0 p-0">
            <input type="hidden" name="items" value={JSON.stringify(cart)} />
            <ul className="divide-y divide-primary/15 border-y border-primary/15 mb-2">
              {cart.map((line, index) => {
                const product = shopProducts.find((item) => item.id === line.id);
                return (
                  <li
                    key={`${line.id}-${index}`}
                    className="flex items-center justify-between gap-4 py-4"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {product ? (
                        <div className="relative size-16 shrink-0 overflow-hidden bg-stage">
                          <CoverImage
                            src={product.image}
                            alt=""
                            sizes="64px"
                            className="object-center"
                          />
                        </div>
                      ) : null}
                      <div className="min-w-0">
                        <p className="font-headline-md text-lg text-on-surface uppercase">
                          {product?.name}
                        </p>
                        <p className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant mt-1">
                          {line.size ? `Size ${line.size}` : "One piece"} ·{" "}
                          {product?.priceLabel}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="font-label-caps text-xs uppercase tracking-widest text-primary disabled:cursor-not-allowed"
                    >
                      Remove
                    </button>
                  </li>
                );
              })}
            </ul>
            <h3 className="font-label-caps text-xs uppercase tracking-[0.22em] text-primary mt-2">
              Delivery
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Name" htmlFor="delivery-name">
                <Input id="delivery-name" name="name" required autoComplete="name" />
              </Field>
              <Field label="Email" htmlFor="delivery-email">
                <Input
                  id="delivery-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone" htmlFor="delivery-phone">
                <Input id="delivery-phone" name="phone" type="tel" autoComplete="tel" />
              </Field>
              <Field label="Country" htmlFor="delivery-country">
                <SelectField
                  id="delivery-country"
                  name="country"
                  defaultValue="United Kingdom"
                  options={deliveryCountries.map((country) => ({
                    value: country,
                    label: country,
                  }))}
                />
              </Field>
              <Field label="Address" htmlFor="delivery-line1">
                <Input
                  id="delivery-line1"
                  name="line1"
                  required
                  autoComplete="address-line1"
                  placeholder="Street and number"
                />
              </Field>
              <Field label="Address line 2" htmlFor="delivery-line2">
                <Input id="delivery-line2" name="line2" autoComplete="address-line2" />
              </Field>
              <Field label="City" htmlFor="delivery-city">
                <Input id="delivery-city" name="city" required autoComplete="address-level2" />
              </Field>
              <Field label="County" htmlFor="delivery-county">
                <Input id="delivery-county" name="county" autoComplete="address-level1" />
              </Field>
              <Field label="Postcode" htmlFor="delivery-postcode">
                <Input
                  id="delivery-postcode"
                  name="postcode"
                  required
                  autoComplete="postal-code"
                  className="uppercase"
                />
              </Field>
            </div>
            {state.error ? (
              <p className="text-primary font-body-md text-sm" role="alert">
                {state.error}
              </p>
            ) : null}
            <div>
              <Button type="submit" size="lg" disabled={pending}>
                {pending ? "Sending…" : "Request this Order"}
              </Button>
            </div>
            </fieldset>
          </form>
        )}
      </section>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-label-caps text-label-caps uppercase text-on-surface-variant"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
