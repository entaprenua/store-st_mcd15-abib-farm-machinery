import { ProductList, ProductListView, ProductListEmptyView, ProductListContent, ProductSearch } from "~/components/ui/product"
import { Product, ProductImage, ProductName, ProductPrice, ProductStockBadge, ProductToggleWishlistTrigger, ProductAddToCartTrigger } from "~/components/ui/product"
import { Search, SearchControl, SearchInput, SearchContent, SearchListbox, SearchItem, SearchNoResult } from "~/components/ui/search"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

function ProductCard() {
  return (
    <Product href="/products" class="group bg-white rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300">
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

function SearchSection() {
  return (
    <div class="mb-10">
      <ProductSearch
        class="w-full md:w-96"
        itemComponent={
          <SearchItem>
            <Product href="/products">
              <Flex class="items-center gap-3">
                <ProductImage class="w-12 h-12 object-cover rounded" />
                <div>
                  <ProductName class="font-medium" />
                  <ProductPrice class="text-sm text-muted-foreground" />
                </div>
              </Flex>
            </Product>
          </SearchItem>
        }
      >
        <SearchControl>
          <SearchInput placeholder="Search furniture..." />
        </SearchControl>
        <SearchContent>
          <SearchListbox />
          <SearchNoResult class="px-4 py-2 text-sm text-muted-foreground">
            No furniture found
          </SearchNoResult>
        </SearchContent>
      </ProductSearch>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <div class="bg-stone-50 min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <Flex class="flex-col items-center mb-10">
          <Text variant="h1" class="text-3xl font-serif font-light">Our Collection</Text>
          <Text class="text-muted-foreground mt-2">Quality furniture for every room</Text>
        </Flex>
        
        <SearchSection />
        
        <ProductList>
          <ProductListEmptyView />
          <ProductListContent>
            <Grid cols={2} colsSm={2} colsMd={3} colsLg={4}>
              <ProductListView>
                <ProductCard />
              </ProductListView>
            </Grid>
          </ProductListContent>
        </ProductList>
      </div>
    </div>
  )
}