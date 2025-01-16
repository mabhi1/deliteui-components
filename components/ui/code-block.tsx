"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  language: string;
  filename?: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({ language, filename, code, highlightLines = [], tabs = [] }: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  const [codeType, setCodeType] = useState<"expanded" | "collapsed">("collapsed");

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab]?.code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab]?.code : code;
  const activeLanguage = tabsExist ? tabs[activeTab]?.language || language : language;
  const activeHighlightLines = tabsExist ? tabs[activeTab]?.highlightLines || [] : highlightLines;

  return (
    <div
      className={cn(
        "relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm break-words transition-all duration-200",
        codeType === "collapsed" ? "h-60 overflow-hidden" : "h-full"
      )}
    >
      <div
        className={cn(
          "absolute top-12 left-0 w-full h-full bg-gradient-to-b from-transparent via-muted/90 to-muted items-center justify-center",
          codeType === "expanded" ? "hidden" : "flex"
        )}
      >
        <Button onClick={() => setCodeType("expanded")}>Expand</Button>
      </div>
      <div
        className={cn(
          "absolute bottom-5 right-5 items-center justify-center",
          codeType === "collapsed" ? "hidden" : "flex"
        )}
      >
        <Button variant="secondary" onClick={() => setCodeType("collapsed")}>
          Collapse
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex  overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 !py-2 text-xs transition-colors font-sans ${
                  activeTab === index ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex justify-between items-center py-2">
            <div className="text-xs text-zinc-400">{filename}</div>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        )}
        {!tabsExist && !filename && (
          <button
            onClick={copyToClipboard}
            className="absolute top-5 right-5 flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        )}
      </div>
      <SyntaxHighlighter
        language={activeLanguage}
        style={tomorrow}
        customStyle={{
          margin: 0,
          padding: 0,
          background: "transparent",
          scrollbarWidth: "none",
          fontSize: "0.875rem", // text-sm equivalent
        }}
        wrapLines={true}
        showLineNumbers={true}
        lineProps={(lineNumber) => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber) ? "rgba(255,255,255,0.1)" : "transparent",
            display: "block",
            width: "100%",
            maxWidth: "75vw",
          },
        })}
        PreTag="div"
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};
