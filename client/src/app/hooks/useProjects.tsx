import { useEffect } from "react";
import { fetchProjectsAsync, projectSelectors } from "../slices/projectSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

export default function useProjects() {
  const projects = useAppSelector(projectSelectors.selectAll);
  const { projectsLoaded, metaData } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!projectsLoaded) {
      dispatch(fetchProjectsAsync());
    }
  }, [dispatch, projectsLoaded]);

  return {
    projects,
    projectsLoaded,
    metaData,
  };
}
