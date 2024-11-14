"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Separator } from "~/components/ui/separator";
import { ModeToggle } from "~/components/ui/toggle-theme";

const tags = [
  { name: "pdf compressor", link: "/Tools/pdfcompressor" },
  { name: "json parser", link: "/Tools/jsonparser" },
  { name: "json validator", link: "/Tools/jsonvalidator" },
  { name: "md to html", link: "/Tools/mdtohtml" },
  { name: "pdf to Doc", link: "/Tools/pdftodoc" },
  { name: "Doc to PDF", link: "/Tools/doctopdf" },
  { name: "QR Code Generator", link: "/Tools/qrcodegenerator" },
  { name: "image compressor", link: "/Tools/imagecompressor" },
  { name: "token seperator", link: "/Tools/tokenseperator" },
  { name: "String Case Convertor", link: "/Tools/stringconvertor" },
  { name: "Color picker", link: "/Tools/colorpicker" },
  { name: "Color Convertor", link: "/Tools/colorconvertor" },
  {
    name: "Gradiant Generator",
    link: "/Tools/gradiantgenerator",
  },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
  { name: "Nav 1", link: "/Tools" },
];
function Navbar() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <ScrollArea className="insep-0 sticky h-screen w-36 rounded-md border-r md:w-48 lg:w-60">
        <div className="p-4">
          <div className="flex items-center justify-around">
            <h4 className="mb-4 text-4xl font-medium leading-none">
              <Link href="/Tools">Tools</Link>
            </h4>
            <ModeToggle />
          </div>
          {tags.map((tag) => (
            <>
              <div key={tag.name} className="p-2 text-lg">
                <Link
                  href={tag.link}
                  className={clsx(
                    `capitalize hover:border-b-4 hover:border-violet-800`,
                    {
                      "text-violet-500 hover:border-none": pathName == tag.link,
                    },
                  )}
                >
                  {tag.name}
                </Link>
              </div>
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Navbar;
