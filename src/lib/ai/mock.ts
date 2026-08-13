import { AIProvider, AIServiceResponse, MathExplanationRequest, LanguageAssistanceRequest } from "./provider";

export class MockAIProvider implements AIProvider {
  name = "mock";

  async generateMathExplanation(req: MathExplanationRequest): Promise<AIServiceResponse> {
    return {
      success: true,
      provider: "mock",
      content: JSON.stringify({
        problem: req.problem,
        method: "Linear equation transposition",
        steps: [
          "Step 1: Group all terms containing the variable on the left side.",
          "Step 2: Transpose constant integers to the right side by reversing operations.",
          "Step 3: Simplify both sides and isolate the variable.",
        ],
        finalAnswer: "x = 5",
      }),
    };
  }

  async generateLanguageAssistance(req: LanguageAssistanceRequest): Promise<AIServiceResponse> {
    return {
      success: true,
      provider: "mock",
      content: JSON.stringify({
        language: req.language,
        input: req.query,
        translation: "Mock translation response for classroom practice",
        grammarTip: "Always match verb tense with the subject pronoun.",
      }),
    };
  }
}

export const mockAI = new MockAIProvider();
