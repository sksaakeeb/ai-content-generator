import React, { useRef } from "react";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

function OutputSection() {

  const editorRef: any = useRef();

  return <div className="bg-white shadow-lg border">
    <div className="flex justify-between items-center p-5">
      <h2 className="font-bold text-lg">Your result</h2>
      <Button className="flex gap-2"><Copy className="h-4 w-4" />Copy</Button>
    </div>
    <Editor
      ref={editorRef}
      initialValue="Your result will appear here."
      initialEditType='wysiwyg'
      height="600px"
      useCommandShortcut={true}
      onChange={() => console.log(editorRef.current.getInstance().getMarkdown())}
    />
  </div>;
}

export default OutputSection;
