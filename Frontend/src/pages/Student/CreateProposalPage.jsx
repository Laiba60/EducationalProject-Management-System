import React from "react";
import { ChevronRight } from "lucide-react";
import Sidebar from "../../components/Student/Sidebar";
import Topbar from "../../components/Student/Topbar";
import ProposalForm from "../../components/Student/ProposalForm";
import TechnologyStack from "../../components/Student/TechnologyStack";
import SubmissionGuidelines from "../../components/Student/SubmissionGuidelines";
import SuggestedSupervisor from "../../components/Student/SuggestedSupervisor";

export default function CreateProposalPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <Sidebar />

      
      <div className="flex-1 flex flex-col">
       
        <Topbar />

        
        <main className="flex-1 px-8 py-8 overflow-y-auto">
          
          <nav className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">
            <span className="hover:text-gray-600 cursor-pointer transition-colors">
              Student Workspace
            </span>
            <ChevronRight size={12} />
            <span className="text-amber-500">Proposal Creation</span>
          </nav>

          {/* Page Heading */}
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Create New Proposal</h1>
          <p className="text-sm text-gray-500 mb-8 max-w-lg">
            Submit your final year project details for academic review. Ensure your technical stack
            and objectives are clearly defined.
          </p>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2">
              <ProposalForm />
            </div>

            
            <div className="flex flex-col gap-4">
              <TechnologyStack />
              <SubmissionGuidelines />
              <SuggestedSupervisor />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
