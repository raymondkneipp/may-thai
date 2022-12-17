import { ADDRESS } from "@constants";
export function Address() {
  return (
    <div>
      <h2 className="font-bold text-lg">Address</h2>
      <address className="text-stone-600 not-italic">
        {ADDRESS.streetAddress}, {ADDRESS.addressLocality},{" "}
        {ADDRESS.addressRegion}, {ADDRESS.postalCode}
      </address>
    </div>
  );
}
