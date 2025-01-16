import Link from "next/link";

function Footer() {
  return (
    <div className="p-3 border-t">
      <div className="max-w-[85rem] mx-auto">
        Built by <Link href="https://github.com/mabhi1">Abhishek. Code available on github</Link>
      </div>
    </div>
  );
}
export default Footer;
