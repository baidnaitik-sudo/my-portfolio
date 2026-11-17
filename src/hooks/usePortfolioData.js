import { useState, useEffect } from 'react';
import { initialPortfolioData } from '../data/portfolioData';

const STORAGE_KEY = 'portfolio_custom_data_v1';

export function usePortfolioData() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialPortfolioData,
          ...parsed,
          personal: { ...initialPortfolioData.personal, ...(parsed.personal || {}) },
          socials: { ...initialPortfolioData.socials, ...(parsed.socials || {}) },
        };
      }
    } catch (e) {
      console.warn('Could not load customized portfolio data:', e);
    }
    return initialPortfolioData;
  });

  const saveToStorage = (newData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } catch (e) {
      console.warn('Could not save portfolio data to local storage:', e);
    }
  };

  const updatePersonal = (updates) => {
    setData((prev) => {
      const updated = {
        ...prev,
        personal: { ...prev.personal, ...updates },
      };
      saveToStorage(updated);
      return updated;
    });
  };

  const updateSocials = (updates) => {
    setData((prev) => {
      const updated = {
        ...prev,
        socials: { ...prev.socials, ...updates },
      };
      saveToStorage(updated);
      return updated;
    });
  };

  const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(initialPortfolioData);
  };

  return {
    data,
    updatePersonal,
    updateSocials,
    resetToDefault,
  };
}
