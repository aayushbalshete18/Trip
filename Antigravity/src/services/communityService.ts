import { REVIEWS } from '../data/reviews';
import { CommunityReview } from '../types/trip';

const STORAGE_KEY = 'smarttrip_community_reviews';

export const communityService = {
  getReviews: (destinationName?: string): CommunityReview[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const list: CommunityReview[] = stored ? JSON.parse(stored) : REVIEWS;
      if (!destinationName || destinationName.trim() === '' || destinationName.toLowerCase() === 'all') {
        return list;
      }
      return list.filter((r) => r.destination.toLowerCase().includes(destinationName.toLowerCase()));
    } catch {
      return REVIEWS;
    }
  },

  addReview: (newReview: Omit<CommunityReview, 'id' | 'date' | 'likesCount' | 'hasLiked'>): CommunityReview => {
    const list = communityService.getReviews();
    const created: CommunityReview = {
      ...newReview,
      id: `rev-${Date.now()}`,
      date: 'Just now',
      likesCount: 1,
      hasLiked: true
    };
    const updated = [created, ...list];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to save review in localStorage', e);
    }
    return created;
  },

  toggleLike: (reviewId: string): CommunityReview[] => {
    const list = communityService.getReviews();
    const updated = list.map((r) => {
      if (r.id === reviewId) {
        const hasLiked = !r.hasLiked;
        return {
          ...r,
          hasLiked,
          likesCount: hasLiked ? r.likesCount + 1 : Math.max(0, r.likesCount - 1)
        };
      }
      return r;
    });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Failed to update likes in localStorage', e);
    }
    return updated;
  }
};
