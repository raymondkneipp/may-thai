import { Container, Menu } from "@components";
import { Tab, Transition } from "@headlessui/react";
import { MENUS } from "@constants";
import { DefaultLayout } from "@layouts";
import { useState } from "react";

export default function MenuPage() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <DefaultLayout>
      <Container className="py-12 flex flex-col gap-6">
        <h1 className="font-fancy leading-fancy text-fancy text-red-600">
          Menus
        </h1>
        <p className="max-w-screen-sm text-lg">
          Enjoy our Thai and Chinese cuisine for lunch and dinner. We deliver.
          Call for pick-up or join us to dine in. Wine and beer selections
          available for dine in service.
        </p>

        <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
          <Tab.List className="flex gap-3 flex-wrap">
            {MENUS.map((menu) => (
              <Tab className="rounded-2xl font-bold uppercase flex gap-3 bg-wide bg-[0%] transition-all hover:bg-[100%] duration-300 bg-gradient-to-r from-red-600 via-red-400 to-red-500 text-white shadow-red-400 text-sm py-1.5 px-3 shadow-md">
                {menu.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {MENUS.map((menu, index) => (
              <Tab.Panel>
                <Transition
                  show={tabIndex == index}
                  appear
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu {...menu} />
                </Transition>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </DefaultLayout>
  );
}
