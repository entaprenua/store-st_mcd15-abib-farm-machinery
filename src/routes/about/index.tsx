import { Text } from "~/components/ui/text"
import { Flex } from "~/components/ui/flex"

export default function AboutPage() {
  return (
    <div class="bg-stone-50 min-h-screen">
      <div class="container mx-auto px-4 py-12">
        <Flex class="flex-col items-center mb-12">
          <Text variant="h1" class="text-3xl font-serif font-light">About HomeNest</Text>
          <Text class="text-stone-500 mt-2">Crafting beautiful spaces since 2020</Text>
        </Flex>
        
        <div class="max-w-3xl mx-auto space-y-8">
          <div class="bg-white rounded-sm p-8">
            <Text variant="h2" class="text-xl font-serif font-light mb-4">Our Story</Text>
            <Text variant="body1" class="text-stone-600 leading-relaxed">
              HomeNest was born from a simple idea: everyone deserves a home that tells their story. 
              Founded in 2020, we curate quality furniture pieces that blend timeless design with modern comfort. 
              Each piece in our collection is carefully selected to help you create spaces where memories are made.
            </Text>
          </div>
          
          <div class="bg-white rounded-sm p-8">
            <Text variant="h2" class="text-xl font-serif font-light mb-4">Our Philosophy</Text>
            <Text variant="body1" class="text-stone-600 leading-relaxed">
              We believe furniture is more than functional—it's the foundation of your home's character. 
              Our approach combines sustainable craftsmanship with thoughtful design, ensuring every piece 
              brings both beauty and functionality to your space.
            </Text>
          </div>
          
          <div class="bg-white rounded-sm p-8">
            <Text variant="h2" class="text-xl font-serif font-light mb-6">Why Choose Us</Text>
            <Flex class="flex-col gap-4">
              <Flex class="items-start gap-3">
                <div class="w-6 h-6 bg-stone-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <Text variant="body1" class="text-stone-600">Handcrafted quality, built to last</Text>
              </Flex>
              <Flex class="items-start gap-3">
                <div class="w-6 h-6 bg-stone-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <Text variant="body1" class="text-stone-600">Sustainable materials from trusted sources</Text>
              </Flex>
              <Flex class="items-start gap-3">
                <div class="w-6 h-6 bg-stone-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <Text variant="body1" class="text-stone-600">Free white-glove delivery on orders over $999</Text>
              </Flex>
              <Flex class="items-start gap-3">
                <div class="w-6 h-6 bg-stone-800 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span class="text-white text-xs">✓</span>
                </div>
                <Text variant="body1" class="text-stone-600">30-day hassle-free returns</Text>
              </Flex>
            </Flex>
          </div>
          
          <div class="bg-white rounded-sm p-8">
            <Text variant="h2" class="text-xl font-serif font-light mb-4">Get in Touch</Text>
            <Text variant="body1" class="text-stone-600 leading-relaxed">
              We'd love to help you find the perfect pieces for your home. 
              Reach out to us at hello@homenest.com or call us at +1 (555) 123-4567.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}