import { A } from "@solidjs/router"
import { Title, Meta } from "@solidjs/meta"
import { Button } from "~/components/ui/button"
import { Flex } from "~/components/ui/flex"
import { Text } from "~/components/ui/text"

export default function NotFoundPage() {
  return (
    <>
      <Title>404 - Page Not Found</Title>
      <Meta name="description" content="The page you're looking for doesn't exist" />
      
      <div class="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        <Flex class="flex-col items-center text-center max-w-md">
          <div class="size-24 rounded-full bg-stone-200 flex items-center justify-center mb-6">
            <svg class="w-12 h-12 text-stone-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </div>
          
          <Text class="text-5xl font-serif text-stone-600 mb-2">404</Text>
          
          <Text variant="h2" class="text-xl font-serif font-light mb-4 text-stone-800">
            Page Not Found
          </Text>
          
          <Text class="text-stone-500 mb-8">
            This page seems to be missing from our collection. Let's get you back home.
          </Text>
          
          <Flex class="gap-4">
            <A href="/">
              <Button class="bg-stone-800 hover:bg-stone-700 text-white gap-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back Home
              </Button>
            </A>
          </Flex>
        </Flex>
      </div>
    </>
  )
}