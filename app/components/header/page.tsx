import BasicHeader from "@/components/pages/header/basic-header";

function HeaderPage() {
  return (
    <div className="md:px-8 w-1 lg:px-12 flex-1 flex flex-col gap-5 md:gap-8">
      <div id="about">
        <div className="text-2xl md:text-3xl">Header</div>
        <div className="text-muted-foreground">Customizable responsive header components.</div>
      </div>
      <BasicHeader />
    </div>
  );
}
export default HeaderPage;
