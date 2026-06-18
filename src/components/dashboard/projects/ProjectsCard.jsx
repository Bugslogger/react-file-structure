import React, { memo } from "react";
import SurfaceCard from "../shared/SurfaceCard";
import SectionHeader from "../shared/SectionHeader";
import MemberStack from "./MemberStack";
import { DASHBOARD_PROJECTS } from "../../../utils/dashboard.config";

const ProjectsCard = () => {
  return (
    <SurfaceCard className="px-4 py-4">
      <SectionHeader title="Projects" subtitle="30 done this month" />

      <div className="mt-5 overflow-hidden">
        <div className="grid grid-cols-[1.5fr_0.9fr_0.8fr_0.8fr] gap-3 border-b border-[color:var(--dashboard-border)] pb-3 text-xs font-bold uppercase tracking-wide text-[color:var(--dashboard-muted)]">
          <span>Companies</span>
          <span>Members</span>
          <span>Budget</span>
          <span>Completion</span>
        </div>

        <div className="divide-y divide-[color:var(--dashboard-border)]">
          {DASHBOARD_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-[1.5fr_0.9fr_0.8fr_0.8fr] items-center gap-3 py-4 text-sm"
            >
              <div className="font-semibold text-[color:var(--dashboard-text)]">
                {project.company}
              </div>
              <MemberStack members={project.members} />
              <div className="font-medium text-[color:var(--dashboard-muted)]">
                {project.budget}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-[color:var(--dashboard-muted)]">
                  <span>{project.completionLabel}</span>
                </div>
                <div className="h-1.5 rounded-full dashboard-progress-track">
                  <div
                    className="h-full rounded-full dashboard-progress-fill"
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SurfaceCard>
  );
};

export default memo(ProjectsCard);
