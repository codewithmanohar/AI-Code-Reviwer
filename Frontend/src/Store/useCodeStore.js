import { create } from "zustand";
import axios from "axios"

export const useCodeStore = create((set) => ({
    reviewedCode: null,
    isLoadingReview: false,

    setReviewedCode: async (code) => {
        set({ isLoadingReview: true });
        try {
            const response = await axios.post("http://localhost:8000/api/get-review", {code});
            set({ reviewedCode: response.data })
            console.log(response.data)
        }
        catch (error) {
            console.log(error);
        }
        finally {
            set({ isLoadingReview: false });
            
        }
    }
    

}));
