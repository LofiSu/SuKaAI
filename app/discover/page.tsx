import { MainLayout } from "@/components/features/main-layout"

export default function DiscoverPage() {
  return (
    <MainLayout
      showLibrary={false}
      searchPlaceholder="Discover trending content and insights..."
    />
  )
}

