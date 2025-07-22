# Mastra Networks Example

A comprehensive example showcasing Mastra's core primitives including **Agents**, **Workflows**, **Networks**, and **Tools** for weather-based activity planning and intelligent task routing.

## Project Structure

### 📁 `src/mastra/`

#### **🤖 Agents** (`agents/`)

**Agents** are AI-powered entities that use language models to make decisions and execute actions. They can call tools, interact with workflows, and maintain memory across conversations.

- **`planning-agent.ts`** - A specialized activity recommendation agent that analyzes weather conditions and suggests location-specific outdoor and indoor activities with optimal timing considerations.

- **`summarize-agent.ts`** - A general-purpose summarization agent for condensing information and creating concise overviews.

- **`weather-agent.ts`** - A weather-focused agent that interprets meteorological data and provides weather-related insights and recommendations.

#### **🌐 Networks** (`networks/`)

**Networks** enable non-deterministic orchestration of multiple agents and workflows, allowing complex task routing and collaboration between different Mastra primitives.

- **`complex-network.ts`** - A vNext Agent Network that demonstrates multi-primitive collaboration using agents for research and synthesis, workflows for structured city research, and memory for task coordination. Includes evaluation metrics for tone consistency and answer relevancy.

#### **🔧 Tools** (`tools/`)

**Tools** are typed functions that extend agent capabilities beyond text generation, enabling interaction with external APIs and data processing.

- **`weather-tool.ts`** - Integrates with Open Meteo API to fetch real-time weather data including geocoding, current conditions, temperature, humidity, wind speed, and weather condition mapping.

#### **⚙️ Workflows** (`workflows/`)

**Workflows** orchestrate complex sequences of operations as typed steps with defined inputs, outputs, and execution flows including branching, parallel execution, and control structures.

- **`activity-planning-workflow.ts`** - A comprehensive workflow that fetches weather forecasts and branches execution based on precipitation probability to suggest either outdoor or indoor activities using the planning agent.

- **`weather-workflow.ts`** - A streamlined workflow for basic weather data retrieval and processing.

#### **🎯 Main Configuration** (`index.ts`)

Central Mastra instance configuration that registers all agents, workflows, networks, and configures storage (LibSQL) and logging (Pino) for the application.

## Setup & Configuration

### Environment Variables

Get your `.env` file from the **1Password note titled "Mastra Playground .env"**.

### Installation & Running

1. **Ensure latest Bun version:**
   ```bash
   bun upgrade
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start development server:**
   ```bash
   bun run dev
   ```

4. **Open the application:**
   Navigate to [http://localhost:4111](http://localhost:4111)

## Development Interfaces

The local development server provides access to the following interfaces:

- **Playground**: [http://localhost:4111/](http://localhost:4111/) - Interactive interface for testing agents and workflows
- **Mastra API**: [http://localhost:4111/api](http://localhost:4111/api) - REST API endpoints  
- **OpenAPI Spec**: [http://localhost:4111/openapi.json](http://localhost:4111/openapi.json) - API specification
- **Swagger UI**: [http://localhost:4111/swagger-ui](http://localhost:4111/swagger-ui) - API explorer and documentation

## Key Features Demonstrated

- **Multi-Agent Collaboration** - Networks that route tasks between specialized agents
- **Conditional Workflows** - Weather-based branching logic for activity recommendations  
- **External API Integration** - Real-time weather data from Open Meteo
- **Memory & Persistence** - LibSQL storage for conversation history and state
- **Evaluation Metrics** - Tone consistency and answer relevancy measurements
- **Tool Integration** - Typed functions for weather data processing
- **Structured Output** - Zod schema validation for type-safe data flows

## Architecture Highlights

This example showcases the power of Mastra's composable architecture:

1. **Tools** fetch external data (weather APIs)
2. **Agents** make intelligent decisions based on data and context  
3. **Workflows** orchestrate multi-step processes with conditional logic
4. **Networks** provide intelligent routing between different primitives
5. **Memory** maintains context and enables complex task coordination

Perfect for exploring how Mastra handles real-world scenarios requiring multiple AI primitives working together. 