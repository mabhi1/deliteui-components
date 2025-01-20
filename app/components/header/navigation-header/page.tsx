import NavigationHeader from "@/components/pages/header/navigation-header";

function NavigationHeaderPage() {
  return (
    <div className="md:px-8 w-1 lg:px-12 flex-1 flex flex-col gap-5 md:gap-8">
      <div className="space-y-2">
        <div className="text-2xl md:text-3xl">Navigation header</div>
        <div>
          Responsive navigation header with components like navigation for desktop menu, drawer and accordion for mobile
          menu, and logo.
        </div>
      </div>
      <NavigationHeader />
    </div>
  );
}
export default NavigationHeaderPage;
