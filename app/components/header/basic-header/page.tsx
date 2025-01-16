import BasicHeader from "@/components/pages/header/basic-header";

function BasicHeaderPage() {
  return (
    <div className="md:px-8 w-1 lg:px-12 flex-1 flex flex-col gap-5 md:gap-8">
      <div className="space-y-2">
        <div className="text-2xl md:text-3xl">Basic header</div>
        <div>
          Basic responsive header with components like main menu, mobile menu, logo for light and dark mode with the
          title.
        </div>
      </div>
      <BasicHeader />
    </div>
  );
}
export default BasicHeaderPage;
