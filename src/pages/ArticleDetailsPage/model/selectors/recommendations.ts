import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsPage?.recommendations?.isLoading;
export const getArticleRecommendationsCommentsError = (state: StateSchema) => state.articleDetailsPage?.recommendations?.error;
