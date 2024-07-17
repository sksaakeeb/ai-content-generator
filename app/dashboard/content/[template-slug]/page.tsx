"use client"
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";

interface PROPS {
  params: {
    "template-slug": string;
  };
}
function CreateNewContent(props: PROPS) {

  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const generateAiContent = (formData: any) => {

  }

  return (
    <div className="p-10">
      <Link href={'/dashboard'}>
      <Button> <ArrowLeft /> Back</Button>
      </Link>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 py-5">
      {/* Form section */}
      <FormSection selectedTemplate={selectedTemplate}
        userFormInput={(v: any) => generateAiContent(v)} />

      <div className="col-span-2">
        {/* Output section  */}
        <OutputSection />
      </div>
    </div>
    </div>
  );
}

export default CreateNewContent;
