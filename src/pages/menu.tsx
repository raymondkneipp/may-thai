import { Container, Menu } from "@components";
import {
  APPETIZERS,
  CHINESE_PLATTERS,
  CHINESE_SPECIALS,
  DESSERT,
  KIDS,
  SALADS,
  SOUPS,
  THAI_ENTREES,
  THAI_PLATTERS,
  THAI_SPECIALS,
  THAI_STIR_FRY,
  VEGETARIAN,
} from "@constants";
import { DefaultLayout } from "@layouts";

export default function MenuPage() {
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

        <div className="flex flex-col gap-6">
          <Menu {...KIDS} />
          <Menu {...DESSERT} />
          <Menu {...CHINESE_PLATTERS} />
          <Menu {...THAI_PLATTERS} />
          <Menu {...VEGETARIAN} />
          <Menu {...CHINESE_SPECIALS} />
          <Menu {...THAI_SPECIALS} />
          <Menu {...APPETIZERS} />
          <Menu {...SOUPS} />
          <Menu {...SALADS} />
          <Menu {...THAI_ENTREES} />
          <Menu {...THAI_STIR_FRY} />
        </div>
      </Container>
    </DefaultLayout>
  );
}
