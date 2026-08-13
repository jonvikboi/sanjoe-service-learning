export interface AIServiceResponse {
  success: boolean;
  content: string;
  provider: "mock" | "groq" | "nvidia" | "gemini";
  usage?: {
    promptTokens: number;
    completionTokens: number;
  };
  error?: string;
}

export interface MathExplanationRequest {
  problem: string;
  gradeLevel?: string;
  topic?: string;
}

export interface LanguageAssistanceRequest {
  language: "English" | "Kannada" | "Hindi";
  query: string;
  task: "translate" | "grammar_check" | "vocabulary_drill";
}

export interface AIProvider {
  name: string;
  generateMathExplanation(req: MathExplanationRequest): Promise<AIServiceResponse>;
  generateLanguageAssistance(req: LanguageAssistanceRequest): Promise<AIServiceResponse>;
}
