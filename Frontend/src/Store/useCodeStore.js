import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import axios from "axios";

export const useCodeStore = create((set) => ({
    reviewedCode: null,
    isLoadingReview: false,

    setReviewedCode: async (code) => {
        set({ isLoadingReview: true });
        try {
            const response = await axiosInstance.post("/get-review", {code}) ;
            set({ reviewedCode: response.data })
        }
        catch (error) {
            console.log(error);
        }
        finally {
            set({ isLoadingReview: false });
            
        }
    }
    

}));
