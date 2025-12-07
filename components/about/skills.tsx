"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@heroui/react";

import { OrbitingCircles } from "@/components/orbiting-circles";
import { SectionHeader } from "@/components/about/section-header";
import { capitalize } from "@/lib/utils";
import { TechCategories } from "@/components/about/types";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

type Tool = { name?: string; icon?: string } | string;
type TechEntry = { description?: string; tools?: Tool[] };

interface SkillsProps {
  tech?: TechCategories | Record<string, any> | Tool[];
}

export const Skills: React.FC<SkillsProps> = ({ tech }) => {
  if (!tech) return null;

  let entries: [string, TechEntry][] = [];

  if (Array.isArray(tech)) {
    entries = [["Skills", { description: "", tools: tech as Tool[] }]];
  } else if (typeof tech === "object" && tech !== null) {
    const objEntries = Object.entries(tech) as [string, any][];
    const hasToolsEntry = objEntries.some(([, v]) => v && typeof v === "object" && Array.isArray(v.tools));

    if (hasToolsEntry) {
      entries = objEntries
        .filter(([, v]) => v && typeof v === "object" && Array.isArray(v.tools))
        .map(([k, v]) => [k, { description: v.description || "", tools: v.tools }]);
    } else if (Array.isArray((tech as any).skills)) {
      entries = [["Skills", { description: "", tools: (tech as any).skills }]];
    } else {
      entries = objEntries
        .filter(([, v]) => Array.isArray(v))
        .map(([k, v]) => [k, { description: "", tools: v }]);
    }
  }

  if (!entries.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <SectionHeader icon="mdi:tools" title="Skills" />

      <Accordion selectionMode="multiple" variant="bordered">
        {entries.map(([category, { description = "", tools = [] }]) => {
          const toolsArr = Array.isArray(tools) ? tools : [];

          return (
            <AccordionItem key={category} aria-label={category} title={capitalize(category)}>
              {description ? <p className="mb-4 text-sm text-muted-foreground">{description}</p> : null}

              {toolsArr.length > 0 ? (
                <div className="relative h-[300px] w-full">
                  <OrbitingCircles
                    className="h-full w-full [&>div]:hover:scale-110 [&>div]:hover:text-primary-500"
                    duration={20}
                    radius={120}
                  >
                    {toolsArr.map((tool: Tool, idx: number) => {
                      const name = typeof tool === "string" ? tool : tool?.name ?? `tool-${idx}`;
                      const icon = typeof tool === "object" && tool?.icon ? tool.icon : undefined;

                      return (
                        <div key={`${category}-${name}-${idx}`} className="flex items-center justify-center">
                          {icon ? (
                            <Icon className="transition-all duration-300" height={24} icon={icon} width={24} />
                          ) : (
                            <span className="text-sm">{name}</span>
                          )}
                        </div>
                      );
                    })}
                  </OrbitingCircles>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">No tools available</p>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </motion.div>
  );
};