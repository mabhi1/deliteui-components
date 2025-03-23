import BasicButton from "@/components/pages/button/basic-button";

function ButtonPage() {
  return (
    <div className="md:px-8 w-1 lg:px-12 flex-1 flex flex-col gap-5 md:gap-8">
      <div>
        <div className="text-2xl md:text-3xl">Button</div>
        <div className="text-muted-foreground">Customizable responsive button components.</div>
      </div>
      <BasicButton previewOnly />
    </div>
  );
}

export default ButtonPage;
