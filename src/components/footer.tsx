import { A } from "@solidjs/router"
import { Grid } from "~/components/ui/grid"
import { Flex } from "~/components/ui/flex"

export function Footer() {
  return (
    <footer class="bg-stone-900 text-stone-400 py-16">
      <div class="container mx-auto px-4">
        <Grid cols={4} gap={12}>
          <div>
            <h3 class="text-white font-serif text-lg mb-6">Rooms</h3>
            <Flex class="flex-col gap-3">
              <A href="/categories" class="text-sm hover:text-white transition-colors">Living Room</A>
              <A href="/categories" class="text-sm hover:text-white transition-colors">Bedroom</A>
              <A href="/categories" class="text-sm hover:text-white transition-colors">Dining Room</A>
              <A href="/categories" class="text-sm hover:text-white transition-colors">Office</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-serif text-lg mb-6">Help</h3>
            <Flex class="flex-col gap-3">
              <A href="/contact" class="text-sm hover:text-white transition-colors">Contact Us</A>
              <A href="/about" class="text-sm hover:text-white transition-colors">About Us</A>
              <A href="/faq" class="text-sm hover:text-white transition-colors">FAQ</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-serif text-lg mb-6">Legal</h3>
            <Flex class="flex-col gap-3">
              <A href="/privacy" class="text-sm hover:text-white transition-colors">Privacy Policy</A>
              <A href="/terms" class="text-sm hover:text-white transition-colors">Terms of Service</A>
            </Flex>
          </div>
          <div>
            <h3 class="text-white font-serif text-lg mb-6">Connect</h3>
            <Flex class="flex-col gap-3">
              <A href="https://pinterest.com" class="text-sm hover:text-white transition-colors">Pinterest</A>
              <A href="https://houzz.com" class="text-sm hover:text-white transition-colors">Houzz</A>
              <A href="https://instagram.com" class="text-sm hover:text-white transition-colors">Instagram</A>
            </Flex>
          </div>
        </Grid>
        <div class="border-t border-stone-800 mt-12 pt-8 text-center">
          <p class="text-sm">© 2024 HomeNest. Crafted with care for your home.</p>
        </div>
      </div>
    </footer>
  )
}