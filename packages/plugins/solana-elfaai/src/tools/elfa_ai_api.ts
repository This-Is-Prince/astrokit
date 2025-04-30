import axios from "redaxios";
import { AstroKit, SolanaWalletBase } from "astrokit";

function createAxiosInstance(apiKey: string | undefined) {
  if (!apiKey) {
    throw new Error(
      "ELFA_AI_API_KEY is not configured in AstroKit config.",
    );
  }
  return axios.create({
    baseURL: "https://api.elfa.ai",
    headers: {
      "x-elfa-api-key": apiKey,
      "Content-Type": "application/json",
    },
  });
}

export async function pingElfaAiApi(agent: AstroKit<SolanaWalletBase>): Promise<any> {
  const apiKey = agent.config?.ELFA_AI_API_KEY;
  const axiosInstance = createAxiosInstance(apiKey);
  const response = await axiosInstance.get("/v1/ping");
  return response.data;
}

export async function getElfaAiApiKeyStatus(
  agent: AstroKit<SolanaWalletBase>,
): Promise<any> {
  const apiKey = agent.config?.ELFA_AI_API_KEY;
  const axiosInstance = createAxiosInstance(apiKey);
  const response = await axiosInstance.get("/v1/key-status");
  return response.data;
}

export async function getSmartMentions(
  agent: AstroKit<SolanaWalletBase>,
  limit: number = 100,
  offset: number = 0,
): Promise<any> {
  const apiKey = agent.config?.ELFA_AI_API_KEY;
  const axiosInstance = createAxiosInstance(apiKey);
  const response = await axiosInstance.get("/v1/mentions", {
    params: { limit, offset },
  });
  return response.data;
}

export async function getTopMentionsByTicker(
  agent: AstroKit<SolanaWalletBase>,
  ticker: string,
  timeWindow: string = "1h",
  page: number = 1,
  pageSize: number = 10,
  includeAccountDetails: boolean = false,
): Promise<any> {
  const apiKey = agent.config?.ELFA_AI_API_KEY;
  const axiosInstance = createAxiosInstance(apiKey);
  const response = await axiosInstance.get("/v1/top-mentions", {
    params: { ticker, timeWindow, page, pageSize, includeAccountDetails },
  });
  return response.data;
}

export async function searchMentionsByKeywords(
  agent: AstroKit<SolanaWalletBase>,
  keywords: string,
  from: number,
  to: number,
  limit: number = 20,
  cursor?: string,
): Promise<any> {
  const apiKey = agent.config?.ELFA_AI_API_KEY;
  const axiosInstance = createAxiosInstance(apiKey);
  const response = await axiosInstance.get("/v1/mentions/search", {
    params: { keywords, from, to, limit, cursor },
  });
  return response.data;
}

export async function getTrendingTokensUsingElfaAi(
  agent: AstroKit<SolanaWalletBase>,
  timeWindow: string = "24h",
  page: number = 1,
  pageSize: number = 50,
  minMentions: number = 5,
): Promise<any> {
  const apiKey = agent.config?.ELFA_AI_API_KEY;
  const axiosInstance = createAxiosInstance(apiKey);
  const response = await axiosInstance.get("/v1/trending-tokens", {
    params: { timeWindow, page, pageSize, minMentions },
  });
  return response.data;
}

export async function getSmartTwitterAccountStats(
  agent: AstroKit<SolanaWalletBase>,
  username: string,
): Promise<any> {
  const apiKey = agent.config?.ELFA_AI_API_KEY;
  const axiosInstance = createAxiosInstance(apiKey);
  const response = await axiosInstance.get("/v1/account/smart-stats", {
    params: { username },
  });
  return response.data;
}
