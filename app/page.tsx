import React from "react";
import { FullResume } from "@/app/full-resume";
import PrintProvider from "@/components/print-provider";
import PDFResumeContainer from "@/components/pdf-resume-container";

export default function CVPage() {
  return (
    <div className="mt-12">
      <PrintProvider>
        <div className="hidden">
          <PDFResumeContainer>
            <FullResume usage="pdf" />
          </PDFResumeContainer>
        </div>
        <FullResume usage="live" />
      </PrintProvider>
    </div>
  );
}
