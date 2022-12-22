import { Container, Menu } from "@components";
import {
  APPETIZERS,
  CHINESE_DINNERS,
  CHINESE_ENTREES,
  CHINESE_LUNCH,
  CHINESE_NOODLES,
  CHINESE_SPECIALS,
  CURRY,
  CURRY_LUNCH,
  DESSERT,
  EGG_FOO_YOUNG,
  FRIED_RICE,
  KIDS,
  SALADS,
  SOUPS,
  THAI_DINNERS,
  THAI_ENTREES,
  THAI_LUNCH,
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
          <Menu {...THAI_LUNCH} />
          <Menu {...CURRY_LUNCH} />
          <Menu {...CHINESE_LUNCH} />

          <Menu {...CURRY} />

          <Menu {...APPETIZERS} />
          <Menu {...SOUPS} />
          <Menu {...SALADS} />

          <Menu {...CHINESE_SPECIALS} />
          <Menu {...THAI_SPECIALS} />

          <Menu {...CHINESE_DINNERS} />
          <Menu {...THAI_DINNERS} />

          <Menu {...VEGETARIAN} />

          <Menu {...THAI_ENTREES} />
          <Menu {...THAI_STIR_FRY} />

          <Menu {...CHINESE_ENTREES} />
          <Menu {...CHINESE_NOODLES} />
          <Menu {...FRIED_RICE} />
          <Menu {...EGG_FOO_YOUNG} />

          <Menu {...KIDS} />
          <Menu {...DESSERT} />
        </div>
      </Container>
    </DefaultLayout>
  );
}
