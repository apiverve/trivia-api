declare module '@apiverve/trivia' {
  export interface triviaOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface triviaResponse {
    status: string;
    error: string | null;
    data: TriviaGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TriviaGeneratorData {
      question: null | string;
      answer:   null | string;
      options:  (null | string)[];
      category: null | string;
  }

  export default class triviaWrapper {
    constructor(options: triviaOptions);

    execute(callback: (error: any, data: triviaResponse | null) => void): Promise<triviaResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: triviaResponse | null) => void): Promise<triviaResponse>;
    execute(query?: Record<string, any>): Promise<triviaResponse>;
  }
}
