import BasicButton from "@/components/pages/button/basic-button";

function BasicButtonPage() {
  return (
    <div className="md:px-8 w-1 lg:px-12 flex-1 flex flex-col gap-5 md:gap-8">
      <div className="space-y-2">
        <div className="text-2xl md:text-3xl">Basic button</div>
        <div>Basic responsive button component.</div>
      </div>
      <BasicButton />
    </div>
  );
}
export default BasicButtonPage;
