import BasicWithTheme from "@/components/pages/header/basic-with-theme";

function BasicWithThemePage() {
  return (
    <div className="md:px-8 w-1 lg:px-12 flex-1 flex flex-col gap-5 md:gap-8">
      <div className="space-y-2">
        <div className="text-2xl md:text-3xl">Basic header with a theme toggle button</div>
        <div>
          Basic responsive header with components like main menu, mobile menu, logo for light and dark mode with the
          title. It uses a theme toggle button to switch between light, system and dark mode.
        </div>
      </div>
      <BasicWithTheme />
    </div>
  );
}
export default BasicWithThemePage;
