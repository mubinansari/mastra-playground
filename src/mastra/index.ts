import { Mastra } from "@mastra/core/mastra";
import { PinoLogger } from "@mastra/loggers";
import { LibSQLStore } from "@mastra/libsql";
import { weatherWorkflow } from "./workflows/weather-workflow";
import { weatherAgent } from "./agents/weather-agent";
import { complexNetwork } from "./networks/complex-network";
import { summarizeAgent } from "./agents/summarize-agent";
import { activityPlanningWorkflow } from "./workflows/activity-planning-workflow";
import { planningAgent } from "./agents/planning-agent";

export const mastra = new Mastra({
	workflows: { weatherWorkflow, activityPlanningWorkflow },
	agents: { weatherAgent, summarizeAgent, planningAgent },
	vnext_networks: { complexNetwork },
	storage: new LibSQLStore({
		// stores telemetry, evals, ... into memory storage, if it needs to persist, change to file:../mastra.db
		url: ":memory:",
	}),
	logger: new PinoLogger({
		name: "Mastra",
		level: "info",
	}),
});
