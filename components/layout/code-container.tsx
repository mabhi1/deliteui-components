import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { CodeBlock } from "../ui/code-block";
import { ExternalLink } from "lucide-react";

interface CodeContainerProps {
  source: {
    path: string;
    filename: string;
    code: string;
  };
  component: {
    filename: string;
    code: string;
  };
  dependencies?: {
    title: string;
    link: string;
  }[];
}

function CodeContainer({ source, component, dependencies }: CodeContainerProps) {
  return (
    <>
      <div className="space-y-2">
        <div className="text-lg font-medium">Dependencies</div>
        <ul className="flex flex-col">
          {dependencies &&
            dependencies.length > 0 &&
            dependencies.map((dependency) => (
              <li key={dependency.title}>
                <Link className={buttonVariants({ variant: "link" })} href={dependency.link} target="_blank">
                  <ExternalLink />
                  {dependency.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-lg font-medium">Usage</div>
        <div>Copy the source code</div>
        <div className="italic bg-muted p-2 px-3 rounded">{source.path}</div>
        <CodeBlock language="tsx" filename={source.filename} code={source.code} />
        <div className="mt-5">Import it in your component</div>
        <CodeBlock language="tsx" filename={component.filename} code={component.code} />
      </div>
    </>
  );
}
export default CodeContainer;
