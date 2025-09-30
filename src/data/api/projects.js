export const projectsList = async () => {
    const PRODUCTION_API_BASE = "https://afaw-beta-api.onrender.com/api";

    try {
        const response = await fetch(`${PRODUCTION_API_BASE}/projects`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};
