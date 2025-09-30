import { useEffect, useState } from "react";
import { projectsList } from "../data/api/projects";

export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [projectsLoading, setProjectsLoading] = useState(true);
    const [projectsError, setProjectsError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await projectsList();
                setProjects(data);
            } catch (err) {
                setProjectsError(err);
            } finally {
                setProjectsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, projectsLoading, projectsError };
};
