# SadanLearn — AI Architecture & Integration Guide

> **Module Scope:** Phase 5 — Math Solver & Language Lab AI Assistance  
> **Target Audience:** AI / Machine Learning Team Member

---

## 1. Core Principles

1. **Deterministic First:** Simple arithmetic and algebraic simplification must use `math.js` or deterministic rules without calling external LLM APIs.
2. **Pedagogical Explanation:** When LLMs are called, prompt templates must strictly constrain output to educational steps:
   - **Problem statement**
   - **Mathematical Method / Concept**
   - **Step-by-step logical reasoning**
   - **Final verified answer**
   - *Never provide unannotated direct answer dumps.*
3. **Strict Privacy & Zero PII:** Never send student names, roll numbers, sections, or personal school records to external AI providers. Only pass problem text and grade level (e.g. `Grade: 8, Question: 2x + 5 = 15`).
4. **Server-Side Only:** All AI API calls must remain in Server Actions or Next.js Route Handlers (`src/app/api/...`). Never expose API keys to the browser client.

---

## 2. Directory Structure

```text
src/lib/ai/
├── provider.ts     # Abstract AIProvider interface & request types
├── mock.ts         # Deterministic mock provider for offline development
├── groq.ts         # Groq Cloud provider implementation
└── nvidia.ts       # NVIDIA NIM provider implementation
```

---

## 3. Environment Variables

Add your chosen provider API keys to `.env.local`:

```bash
# Groq
GROQ_API_KEY="gsk_..."

# NVIDIA NIM
NVIDIA_API_KEY="nvapi-..."

# Google Gemini / OpenAI (optional alternate)
AI_API_KEY="..."
```

---

## 4. Provider Implementation Example

```typescript
import { AIProvider, AIServiceResponse, MathExplanationRequest } from "@/lib/ai/provider";

export class CustomProvider implements AIProvider {
  name = "custom";

  async generateMathExplanation(req: MathExplanationRequest): Promise<AIServiceResponse> {
    // 1. Construct prompt with pedagogical formatting rules
    // 2. Call server-side API endpoint
    // 3. Return structured AIServiceResponse
  }
}
```

---

## 5. Next Steps for AI Team Member

- [ ] Implement `src/app/api/math/route.ts` with input validation via Zod.
- [ ] Connect `src/lib/ai/groq.ts` or `src/lib/ai/nvidia.ts` to live endpoints.
- [ ] Implement prompt templates for Kannada and Hindi vocabulary exercises.
- [ ] Add rate limiting using Next.js route handlers.
