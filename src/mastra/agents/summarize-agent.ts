import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { AnswerRelevancyMetric, SummarizationMetric } from "@mastra/evals/llm";
import { ToneConsistencyMetric } from "@mastra/evals/nlp";
import { LibSQLStore } from "@mastra/libsql";
import { Memory } from "@mastra/memory";

const summarizeAgent = new Agent({
	name: "Summarize Agent",
	description: "This agent is used to summarize text.",
	instructions: `You are a helpful assistant that summarizes text.

  Ensure that the summary is concise and to the point. 

  The summary should be in the same language as the text.
  `,
	model: openai("gpt-4o"),
	evals: {
		summarization: new SummarizationMetric(openai("gpt-4o")),
		relevance: new AnswerRelevancyMetric(openai("gpt-4o"), {
			uncertaintyWeight: 0.3,
			scale: 1,
		}),
		tone: new ToneConsistencyMetric(),
	},
	memory: new Memory({
		storage: new LibSQLStore({
			url: "file:../mastra.db",
		}),
	}),
});

export { summarizeAgent };
