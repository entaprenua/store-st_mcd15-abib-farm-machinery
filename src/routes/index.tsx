import { HeroRoot, HeroItems, HeroItemsView, HeroItem, HeroBackground, HeroContent, HeroTitle, HeroSubtitle, HeroDescription, HeroCtaPrimary } from "~/components/ui/hero"
import { CategoryList, CategoryListEmptyView, CategoryListView, Category, CategoryImage, CategoryName } from "~/components/ui/category"
import { RecommendationsRoot, RecommendationsItems, RecommendationsItemsView, RecommendationsContent } from "~/components/ui/recommendations"
import { Product, ProductImage, ProductName, ProductPrice, ProductStockBadge, ProductAddToCartTrigger, ProductToggleWishlistTrigger } from "~/components/ui/product"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

function HeroSection() {
  return (
    <HeroRoot class="w-full">
      <Carousel autoplay>
        <CarouselContent>
          <HeroItems>
            <HeroItemsView>
              <CarouselItem class="w-full">
                <HeroItem aspectRatio="21/9" maxHeight={500}>
                  <HeroBackground />
                  <HeroContent contentPosition="center">
                    <HeroSubtitle />
                    <HeroTitle />
                    <HeroDescription />
                    <Flex class="gap-3 mt-6">
                      <HeroCtaPrimary />
                    </Flex>
                  </HeroContent>
                </HeroItem>
              </CarouselItem>
            </HeroItemsView>
          </HeroItems>
        </CarouselContent>
        <CarouselNext class="right-4" />
        <CarouselPrevious class="left-4" />
      </Carousel>
    </HeroRoot>
  )
}

function RoomSection() {
  return (
    <section class="py-16 bg-stone-50">
      <div class="container mx-auto px-4">
        <Text variant="h2" class="text-2xl font-serif font-light text-center mb-2">Shop by Room</Text>
        <Text class="text-muted-foreground text-center mb-10">Find the perfect pieces for every space</Text>

        <CategoryList mode="root">
          <CategoryListEmptyView />
          <Grid cols={2} colsSm={2} colsMd={4} colsLg={4}>
            <CategoryListView>
              <Category href="categories" class="group">
                <div class="relative overflow-hidden rounded-lg aspect-[4/5]">
                  <CategoryImage class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div class="absolute bottom-4 left-4 right-4">
                    <CategoryName class="text-white text-lg font-serif" />
                  </div>
                </div>
              </Category>
            </CategoryListView>
          </Grid>
        </CategoryList>
      </div>
    </section>
  )
}

function ProductCard() {
  return (
    <Product href="products" class="group bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300">
      <div class="relative overflow-hidden bg-stone-100">
        <ProductImage class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ProductToggleWishlistTrigger class="p-2 bg-white rounded-full shadow-md hover:bg-stone-50" />
        </div>
        <div class="absolute bottom-3 left-3">
          <ProductStockBadge class="text-xs bg-white/90 backdrop-blur-sm" />
        </div>
      </div>
      <div class="p-4">
        <ProductName class="font-medium text-stone-800 line-clamp-2 min-h-[2.5rem]" />
        <div class="flex items-baseline gap-2 mt-3">
          <ProductPrice class="text-lg font-serif text-stone-900" />
        </div>
        <div class="mt-4">
          <ProductAddToCartTrigger class="w-full bg-stone-900 hover:bg-stone-800 text-white text-sm py-2 rounded-sm" />
        </div>
      </div>
    </Product>
  )
}

function FeaturedSection() {
  return (
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <Flex class="flex-col items-center mb-12">
          <Text variant="h2" class="text-2xl font-serif font-light">New Arrivals</Text>
          <Text class="text-muted-foreground mt-2">Fresh finds for your home</Text>
        </Flex>

        <RecommendationsRoot type="newest" limit={8}>
          <RecommendationsItems>
            <RecommendationsContent>
              <Grid cols={2} colsSm={2} colsMd={3} colsLg={4}>
                <RecommendationsItemsView>
                  <ProductCard />
                </RecommendationsItemsView>
              </Grid>
            </RecommendationsContent>
          </RecommendationsItems>
        </RecommendationsRoot>
      </div>
    </section>
  )
}

function BestsellersSection() {
  return (
    <section class="py-16 bg-stone-50">
      <div class="container mx-auto px-4">
        <Flex class="flex-col items-center mb-12">
          <Text variant="h2" class="text-2xl font-serif font-light">Customer Favorites</Text>
          <Text class="text-muted-foreground mt-2">Most loved pieces in our collection</Text>
        </Flex>

        <RecommendationsRoot type="popular" limit={8}>
          <RecommendationsItems>
            <RecommendationsContent>
              <Grid cols={2} colsSm={2} colsMd={3} colsLg={4}>
                <RecommendationsItemsView>
                  <ProductCard />
                </RecommendationsItemsView>
              </Grid>
            </RecommendationsContent>
          </RecommendationsItems>
        </RecommendationsRoot>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RoomSection />
      <FeaturedSection />
      <BestsellersSection />
    </>
  )
}
